import { create, StateCreator } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { GitHubRepository } from "../types/github";

interface RepositoryState {
  repositories: GitHubRepository[];
  username: string;
  searchTerm: string;
  setRepositories: (repos: GitHubRepository[]) => void;
  setUsername: (name: string) => void;
  setSearchTerm: (term: string) => void;
  clearRepositories: () => void;
}

const storeCreator: StateCreator<RepositoryState> = (set) => ({
  repositories: [],
  username: "",
  searchTerm: "",
  setRepositories: (repositories: GitHubRepository[]) => set({ repositories }),
  setUsername: (username: string) => set({ username }),
  setSearchTerm: (searchTerm: string) => set({ searchTerm }),
  clearRepositories: () => set({ repositories: [], searchTerm: "" }),
});

export const useRepositoryStore = create<RepositoryState>()(
  persist(storeCreator, {
    name: "repository-storage",
    storage: createJSONStorage(() => localStorage),
    partialize: (state) => ({
      repositories: state.repositories,
      username: state.username,
    }),
  }),
);
