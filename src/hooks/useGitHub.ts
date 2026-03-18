import { useQuery } from "@tanstack/react-query";
import { GitHubRepository, RepositoryListSchema } from "../types/github";

const GITHUB_API_URL = "https://api.github.com";

async function fetchUserRepositories(
  username: string,
): Promise<GitHubRepository[]> {
  const response = await fetch(`${GITHUB_API_URL}/users/${username}/repos`);

  if (!response.ok) {
    throw new Error("User not found");
  }

  const data = await response.json();
  return RepositoryListSchema.parse(data);
}

export function useGitHubRepositories(username: string) {
  return useQuery({
    queryKey: ["repositories", username],
    queryFn: () => fetchUserRepositories(username),
    enabled: username.length > 0,
    retry: 1,
    staleTime: 1000 * 60 * 5,
  });
}
