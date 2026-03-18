import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
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
  LinktoHome,
  ModalList,
  RepositoryGrid,
  SearchInput,
  Title,
} from "./styles";

const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  Java: "#b07219",
  "C++": "#f34b7d",
  C: "#555555",
  "C#": "#178600",
  Ruby: "#701516",
  Go: "#00ADD8",
  Rust: "#dea584",
  PHP: "#4F5D95",
  Swift: "#F05138",
  Kotlin: "#A97BFF",
  Dart: "#00B4AB",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
};

function getLanguageColor(language: string | null): string {
  if (!language) return "#878a99";
  return LANGUAGE_COLORS[language] || "#878a99";
}

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
