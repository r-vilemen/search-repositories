import { useQuery } from "@tanstack/react-query";
import { GitHubSearchUsersSchema, GitHubUser } from "../types/github";

const GITHUB_API_URL = "https://api.github.com";

async function fetchUsers(query: string): Promise<GitHubUser[]> {
  const response = await fetch(
    `${GITHUB_API_URL}/search/users?q=${query}&per_page=10`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const data = await response.json();
  return GitHubSearchUsersSchema.parse(data).items;
}

export function useGitHubUsers(query: string) {
  return useQuery({
    queryKey: ["users", query],
    queryFn: () => fetchUsers(query),
    enabled: query.trim().length >= 2,
    staleTime: 1000 * 60 * 2,
  });
}
