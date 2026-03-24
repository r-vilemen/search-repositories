import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { ProjectTitle } from "../../components/ProjectTitle";
import { ThemeToggle } from "../../components/ThemeToggle";
import { useDebounce } from "../../hooks/useDebounce";
import { useGitHubRepositories } from "../../hooks/useGitHub";
import { useGitHubUsers } from "../../hooks/useGitHubUsers";
import { useRepositoryStore } from "../../stores/useRepositoryStore";
import { GitHubUser } from "../../types/github";
import {
  Container,
  ErrorText,
  Header,
  SearchBtn,
  SearchGroup,
  SearchInputWrapper,
  SearchProfileGitHub,
  SuggestionAvatar,
  SuggestionItem,
  SuggestionName,
  SuggestionsContainer,
  Title,
} from "./styles";

export const Home = () => {
  const [username, setUsername] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();
  const setRepositories = useRepositoryStore((state) => state.setRepositories);
  const setStoreUsername = useRepositoryStore((state) => state.setUsername);
  const debouncedUsername = useDebounce(username, 300);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const {
    data: suggestions = [],
    isLoading: suggestionsLoading,
    isError: suggestionsError,
  } = useGitHubUsers(debouncedUsername);

  const {
    isLoading: reposLoading,
    isError: reposError,
    refetch,
  } = useGitHubRepositories(username);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (reposError) {
      navigate("/");
    }
  }, [reposError, navigate]);

  const searchHandle = async (user?: string) => {
    const searchUsername = user || username;
    if (!searchUsername.trim()) return;

    setShowSuggestions(false);

    const { data } = await refetch();
    if (data) {
      setRepositories(data);
      setStoreUsername(searchUsername);
      navigate("/repositories");
    }
  };

  const handleKeyPress = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === "Enter") {
      searchHandle();
    }
  };

  const handleSelectSuggestion = (user: GitHubUser) => {
    setUsername(user.login);
    setShowSuggestions(false);
    searchHandle(user.login);
  };

  return (
    <Container>
      <Header>
        <ThemeToggle />
      </Header>
      <ProjectTitle />
      <Title>Lista de Repositórios:</Title>
      <SearchGroup ref={wrapperRef}>
        <SearchInputWrapper>
          <SearchProfileGitHub
            maxLength={64}
            onKeyPress={handleKeyPress}
            placeholder="Digite o usuário do Github"
            value={username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setUsername(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => setShowSuggestions(true)}
            aria-label="Nome de usuário do GitHub"
            autoComplete="off"
          />
          {showSuggestions &&
            username.trim().length >= 2 &&
            (suggestionsLoading ? (
              <SuggestionsContainer>
                <SuggestionItem>Carregando...</SuggestionItem>
              </SuggestionsContainer>
            ) : suggestionsError ? null : suggestions.length > 0 ? (
              <SuggestionsContainer>
                {suggestions.map((user) => (
                  <SuggestionItem
                    key={user.id}
                    onClick={() => handleSelectSuggestion(user)}
                  >
                    <SuggestionAvatar src={user.avatar_url} alt={user.login} />
                    <SuggestionName>{user.login}</SuggestionName>
                  </SuggestionItem>
                ))}
              </SuggestionsContainer>
            ) : null)}
        </SearchInputWrapper>
        <SearchBtn
          type="button"
          onClick={() => searchHandle()}
          disabled={!username.trim() || reposLoading}
        >
          {reposLoading ? "Buscando..." : "Pesquisar"}
        </SearchBtn>
      </SearchGroup>
      {reposError && <ErrorText>Usuário não encontrado</ErrorText>}
      <Footer />
    </Container>
  );
};
