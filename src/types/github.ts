import { z } from "zod";

export const GitHubRepositorySchema = z.object({
  id: z.number(),
  name: z.string(),
  full_name: z.string(),
  private: z.boolean(),
  html_url: z.string().url(),
  description: z.string().nullable(),
  fork: z.boolean(),
  url: z.string().url(),
  language: z.string().nullable(),
  stargazers_count: z.number(),
  forks_count: z.number(),
  updated_at: z.string(),
});

export const GitHubUserSchema = z.object({
  login: z.string(),
  id: z.number(),
  avatar_url: z.string().url(),
  html_url: z.string().url(),
});

export const GitHubSearchUsersSchema = z.object({
  total_count: z.number(),
  incomplete_results: z.boolean(),
  items: z.array(GitHubUserSchema),
});

export type GitHubRepository = z.infer<typeof GitHubRepositorySchema>;
export type GitHubUser = z.infer<typeof GitHubUserSchema>;
export type GitHubSearchUsers = z.infer<typeof GitHubSearchUsersSchema>;

export const RepositoryListSchema = z.array(GitHubRepositorySchema);
