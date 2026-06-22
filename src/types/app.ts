export interface App {
  id: string;
  name: string;
  description: string;
  badge?: string;
  category: string;
}

export interface AppCategory {
  id: string;
  name: string;
}
