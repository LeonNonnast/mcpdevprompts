import { readdir, readFile } from "fs/promises";
import { join } from "path";
import { Logger } from "./utils/logger.js";
import {
  PromptData,
  PromptWithScore,
  PromptStats,
  PromptCategory,
} from "./prompt-types.js";

const logger = new Logger("prompt-manager");

/**
 * Manages prompt loading, caching, and retrieval
 */
export class PromptManager {
  private promptsDir: string;
  private prompts: Map<string, PromptData>;
  private categories: Set<string>;

  constructor(promptsDir: string) {
    this.promptsDir = promptsDir;
    this.prompts = new Map();
    this.categories = new Set();
  }

  /**
   * Load all prompts from the prompts directory
   */
  async loadPrompts(): Promise<void> {
    try {
      const categories = await readdir(this.promptsDir, {
        withFileTypes: true,
      });

      for (const category of categories) {
        if (category.isDirectory()) {
          await this.loadCategoryPrompts(category.name);
        }
      }

      logger.info(
        `Loaded ${this.prompts.size} prompts from ${this.categories.size} categories`
      );
    } catch (error) {
      logger.error("Error loading prompts:", error);
      throw error;
    }
  }

  /**
   * Load prompts from a specific category directory
   */
  private async loadCategoryPrompts(category: string): Promise<void> {
    try {
      const categoryPath = join(this.promptsDir, category);
      const files = await readdir(categoryPath);

      for (const file of files) {
        if (file.endsWith(".json")) {
          const filePath = join(categoryPath, file);
          const content = await readFile(filePath, "utf8");
          const promptData = JSON.parse(content);

          // Handle both single prompt and array of prompts
          const prompts: PromptData[] = Array.isArray(promptData)
            ? promptData
            : [promptData];

          for (const prompt of prompts) {
            this.validatePrompt(prompt);
            prompt.category = category;
            this.prompts.set(prompt.id, prompt);
          }
        }
      }

      this.categories.add(category);
      logger.info(`Loaded prompts from category: ${category}`);
    } catch (error) {
      logger.error(`Error loading category ${category}:`, error);
      throw error;
    }
  }

  /**
   * Validate prompt structure
   */
  private validatePrompt(prompt: any): asserts prompt is PromptData {
    const required = ["id", "title", "prompt", "version"] as const;
    for (const field of required) {
      if (!prompt[field]) {
        throw new Error(
          `Missing required field '${field}' in prompt: ${JSON.stringify(
            prompt
          )}`
        );
      }
    }
  }

  /**
   * Get prompts by category (or all if no category specified)
   */
  async getPrompts(category?: string): Promise<PromptData[]> {
    const allPrompts = Array.from(this.prompts.values());

    if (category) {
      return allPrompts.filter((prompt) => prompt.category === category);
    }

    return allPrompts;
  }

  /**
   * Get specific prompt by ID
   */
  async getPrompt(id: string): Promise<PromptData | undefined> {
    return this.prompts.get(id);
  }

  searchPromptByProfile(agent_name: string) {
    const lowercaseQuery = agent_name.toLowerCase();
    const results: PromptWithScore[] = [];

    for (const prompt of this.prompts.values()) {
      let score = 0;

      // Check title
      if (prompt.id.toLowerCase() == lowercaseQuery) {
        score += 5;
      }

      // Check title
      if (prompt.title.toLowerCase().includes(lowercaseQuery)) {
        score += 3;
      }

      if (score > 0) {
        results.push({ ...prompt, searchScore: score });
      }
    }

    // Sort by score (descending)
    return results;
  }

  /**
   * Search prompts by query (title, description, tags)
   */
  async searchPrompts(query: string): Promise<PromptWithScore[]> {
    const lowercaseQuery = query.toLowerCase();
    const results: PromptWithScore[] = [];

    for (const prompt of this.prompts.values()) {
      let score = 0;

      // Check title
      if (prompt.title.toLowerCase().includes(lowercaseQuery)) {
        score += 3;
      }

      // Check description
      if (
        prompt.description &&
        prompt.description.toLowerCase().includes(lowercaseQuery)
      ) {
        score += 2;
      }

      // Check tags
      if (
        prompt.tags &&
        prompt.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
      ) {
        score += 1;
      }

      // Check category
      if (prompt.category.toLowerCase().includes(lowercaseQuery)) {
        score += 1;
      }

      if (score > 0) {
        results.push({ ...prompt, searchScore: score });
      }
    }

    // Sort by score (descending)
    return results.sort((a, b) => b.searchScore - a.searchScore);
  }

  /**
   * Search prompts by tag (tags)
   */
  async searchPromptsByTag(tag: string): Promise<PromptWithScore[]> {
    const lowercaseQuery = tag.toLowerCase();
    const results: PromptWithScore[] = [];

    for (const prompt of this.prompts.values()) {
      let score = 0;

      // Check tags
      if (
        prompt.tags &&
        prompt.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
      ) {
        score += 1;
      }

      if (score > 0) {
        results.push({ ...prompt, searchScore: score });
      }
    }

    // Sort by score (descending)
    return results;
  }

  searchPromptsByCategory(category: string) {
    const lowercaseQuery = category.toLowerCase();
    const results: PromptWithScore[] = [];

    for (const prompt of this.prompts.values()) {
      let score = 0;

      // Check tags
      // Check category
      if (prompt.category.toLowerCase().includes(lowercaseQuery)) {
        score += 1;
      }

      if (score > 0) {
        results.push({ ...prompt, searchScore: score });
      }
    }

    // Sort by score (descending)
    return results;
  }

  /**
   * Get all available categories
   */
  getCategories(): string[] {
    return Array.from(this.categories);
  }

  /**
   * Get prompt statistics
   */
  getStats(): PromptStats {
    const stats: PromptStats = {
      totalPrompts: this.prompts.size,
      categories: this.categories.size,
      categoryBreakdown: {},
    };

    for (const category of this.categories) {
      stats.categoryBreakdown[category] = Array.from(
        this.prompts.values()
      ).filter((prompt) => prompt.category === category).length;
    }

    return stats;
  }
}
