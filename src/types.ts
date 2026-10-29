export interface GitHubRepo {
  id: number;
  name: string;
  clone_url: string;
  html_url: string;
  description: string | null;
  language?: string | null;
  stargazers_count?: number;
  forks_count?: number;
}

export type AuthMode = 'login' | 'register' | null;
