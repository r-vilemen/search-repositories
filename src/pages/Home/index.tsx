import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { useRepositoryStore } from "../../stores/useRepositoryStore";
import { GitHubUser } from "../../types/github";
import {
  Container,
  ErrorText,
  SearchBtn,
  SearchGroup,
  SearchInputWrapper,
  SearchProfileGitHub,
  SuggestionsContainer,
  SuggestionItem,
  SuggestionAvatar,
  SuggestionName,
  Title,
} from "./styles";

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export const Home = () => {
  const [username, setUsername] = useState("");
  const [suggestions, setSuggestions] = useState<GitHubUser[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [suggestionsLoading, setSuggestionsLoading] = useState(false);
  const navigate = useNavigate();
  const setRepositories = useRepositoryStore((state) => state.setRepositories);
  const setStoreUsername = useRepositoryStore((state) => state.setUsername);
  const debouncedUsername = useDebounce(username, 300);
  const wrapperRef = useRef<HTMLDivElement>(null);

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
    const fetchSuggestions = async () => {
      if (debouncedUsername.trim().length < 2) {
        setSuggestions([]);
        return;
      }

      setSuggestionsLoading(true);
      try {
        const response = await fetch(
          `https://api.github.com/search/users?q=${debouncedUsername}&per_page=10`,
        );

        if (response.ok) {
          const data = await response.json();
          setSuggestions(data.items || []);
        } else {
          setSuggestions([]);
        }
      } catch {
        setSuggestions([]);
      } finally {
        setSuggestionsLoading(false);
      }
    };

    fetchSuggestions();
  }, [debouncedUsername]);

  const searchHandle = async (user?: string) => {
    const searchUsername = user || username;
    if (!searchUsername.trim()) return;

    setLoading(true);
    setError(false);
    setShowSuggestions(false);

    try {
      const response = await fetch(
        `https://api.github.com/users/${searchUsername}/repos`,
      );

      if (!response.ok) {
        throw new Error("User not found");
      }

      const data = await response.json();

      setRepositories(data);
      setStoreUsername(searchUsername);
      navigate("/repositories");
    } catch {
      setError(true);
    } finally {
      setLoading(false);
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
              setError(false);
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
            ) : suggestions.length > 0 ? (
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
          disabled={!username.trim() || loading}
        >
          {loading ? "Buscando..." : "Pesquisar"}
        </SearchBtn>
      </SearchGroup>
      {error && <ErrorText>Usuário não encontrado</ErrorText>}
      <Footer />
    </Container>
  );
};
