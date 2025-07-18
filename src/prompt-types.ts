export interface PromptData {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  prompt: string;
  examples?: {
    input: string;
    output: string;
  }[];
  effectiveness: number;
  author: string;
  version: string;
  created_at: string;
  updated_at: string;
}

export interface PromptWithScore extends PromptData {
  searchScore: number;
}

export interface PromptStats {
  totalPrompts: number;
  categories: number;
  categoryBreakdown: Record<string, number>;
}

export interface LogEntry {
  timestamp: string;
  level: string;
  component: string;
  message: string;
  data?: any;
}

export type PromptCategory =
  | "ui-design"
  | "onboarding"
  | "development"
  | "debugging"
  | "documentation";

export interface GetPromptsRequest {
  category?: PromptCategory;
}

export interface GetPromptRequest {
  name: string;
  arguments?: {
    task?: string;
  };
}

export interface SearchPromptsRequest {
  query: string;
}
