import { readdir, readFile } from "fs/promises";
import { join } from "path";
import { Logger } from "./utils/logger.js";
import { ToolData, ToolsStats } from "./tool-types.js";

const logger = new Logger("tool-manager");

/**
 * Manages tool loading, caching, and retrieval
 */
export class ToolManager {
  private toolsDir: string;
  private tools: Map<string, ToolData>;

  constructor(toolsDir: string) {
    this.toolsDir = toolsDir;
    this.tools = new Map();
  }

  /**
   * Load all tools from the tools directory
   */
  async loadTools(): Promise<void> {
    logger.info(`Loading tools...`);
    const toolPath = this.toolsDir;

    try {
      const files = await readdir(toolPath);

      for (const file of files) {
        if (file.endsWith(".json")) {
          const filePath = join(toolPath, file);
          const content = await readFile(filePath, "utf8");
          const toolData = JSON.parse(content);

          // Handle both single tool and array of tools
          const tools: ToolData[] = (
            Array.isArray(toolData) ? toolData : [toolData]
          ).map((item) => {
            return {
              id: item.id,
              name: item.name,
              description: item.description,
              inputSchema: item.input_schema,
            };
          });

          for (const tool of tools) {
            try {
              this.validateTools(tool);
              this.tools.set(tool.id, tool);
            } catch (error) {
              logger.error(`Error validating:`, {
                id: tool.id,
                name: tool.name,
              });
              throw error;
            }
          }
        }
      }
    } catch (error) {
      logger.error(`Error loading:`, toolPath);
      throw error;
    }

    logger.info(`Loaded tools`);
  }

  /**
   * Validate tool structure
   */
  private validateTools(tool: any): asserts tool is ToolData {
    const required = ["id", "name", "description", "inputSchema"] as const;
    for (const field of required) {
      if (!tool[field]) {
        throw new Error(
          `Missing required field '${field}' in tool: ${JSON.stringify(tool)}`
        );
      }
    }
  }

  /**
   * Get tools
   */
  async getTools(): Promise<ToolData[]> {
    const allTools = Array.from(this.tools.values());

    return allTools;
  }

  /**
   * Get specific tool by ID
   */
  async getTool(id: string): Promise<ToolData | undefined> {
    return this.tools.get(id);
  }

  /**
   * Get tool statistics
   */
  getStats(): ToolsStats {
    const stats: ToolsStats = {
      totalTools: this.tools.size,
    };

    return stats;
  }
}
