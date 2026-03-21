import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { ThemeToggle } from "../../components/ThemeToggle";
import { getLanguageColor } from "../../constants/languageColors";
import { useRepositoryStore } from "../../stores/useRepositoryStore";
import { GitHubRepository } from "../../types/github";
import {
  Card,
  CardDescription,
  CardHeader,
  CardLanguage,
  CardTitle,
  Container,
  EmptyText,
  Header,
  LinktoHome,
  ModalList,
  RepositoryGrid,
  SearchInput,
  Title,
} from "./styles";

export const Repositories = () => {
  const navigate = useNavigate();
  const repositories = useRepositoryStore((state) => state.repositories);
  const searchTerm = useRepositoryStore((state) => state.searchTerm);
  const setSearchTerm = useRepositoryStore((state) => state.setSearchTerm);
  const clearRepositories = useRepositoryStore(
    (state) => state.clearRepositories,
  );

  useEffect(() => {
    if (repositories.length === 0) {
      navigate("/");
    }
  }, [repositories, navigate]);

  const filteredRepositories = repositories.filter((repo: GitHubRepository) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleClear = () => {
    clearRepositories();
  };

  return (
    <Container>
      <Header>
        <ThemeToggle />
      </Header>
      <Title>Repositórios:</Title>
      <SearchInput
        type="text"
        placeholder="Pesquise aqui"
        value={searchTerm}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchTerm(e.target.value)
        }
        aria-label="Pesquisar repositórios"
      />
      <ModalList>
        {filteredRepositories.length === 0 ? (
          <EmptyText>Nenhum repositório encontrado</EmptyText>
        ) : (
          <RepositoryGrid>
            {filteredRepositories.map((repo: GitHubRepository) => (
              <Card
                key={repo.id}
                onClick={() => window.open(repo.html_url, "_blank")?.focus()}
              >
                <CardHeader>
                  <CardTitle>{repo.name}</CardTitle>
                  {repo.language && (
                    <CardLanguage>
                      <span
                        style={{
                          display: "inline-block",
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          backgroundColor: getLanguageColor(repo.language),
                          marginRight: "6px",
                        }}
                      />
                      {repo.language}
                    </CardLanguage>
                  )}
                </CardHeader>
                {repo.description && (
                  <CardDescription>{repo.description}</CardDescription>
                )}
              </Card>
            ))}
          </RepositoryGrid>
        )}
      </ModalList>

      <LinktoHome onClick={handleClear} to="/">
        Voltar
      </LinktoHome>
      <Footer />
    </Container>
  );
};
