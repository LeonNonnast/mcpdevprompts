#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  ListPromptsRequestSchema,
  GetPromptRequestSchema,
  ListToolsRequestSchema,
  CallToolRequestSchema,
  McpError,
  ErrorCode,
} from "@modelcontextprotocol/sdk/types.js";
import { PromptManager } from "./prompt-manager.js";
import { Logger } from "./utils/logger.js";
import { ToolManager } from "./tool-manager.js";

const logger = new Logger("dev-mcp-server");

/**
 * Dev MCP Prompt Server
 * Provides curated prompts for AI-powered development workflows
 */
class DevMCPServer {
  private server: Server;
  private promptManager: PromptManager;
  private toolManager: ToolManager;

  constructor() {
    this.server = new Server({
      name: "dev-mcp-prompt-server",
      version: "1.0.0",
    });

    this.promptManager = new PromptManager("./public/prompts");
    this.toolManager = new ToolManager("./public/tools");

    this.setupHandlers();
  }

  private setupHandlers(): void {
    // List all available prompts
    this.server.setRequestHandler(ListPromptsRequestSchema, async (request) => {
      try {
        const category = request.params?.category as string | undefined;
        const prompts = await this.promptManager.getPrompts(category);

        logger.info(`Listed ${prompts.length} prompts`, { category });

        return {
          prompts: prompts.map((prompt) => ({
            name: prompt.id,
            description: prompt.description,
            arguments: [
              {
                name: "task",
                description: "The specific task you want help with",
                required: false,
              },
            ],
          })),
        };
      } catch (error) {
        logger.error("Error listing prompts:", error);
        throw new McpError(ErrorCode.InternalError, "Failed to list prompts");
      }
    });

    // Get specific prompt
    this.server.setRequestHandler(GetPromptRequestSchema, async (request) => {
      try {
        const { name } = request.params;
        const args = request.params.arguments || {};

        const prompt = await this.promptManager.getPrompt(name);
        if (!prompt) {
          throw new McpError(
            ErrorCode.InvalidRequest,
            `Prompt '${name}' not found`
          );
        }

        // Customize prompt based on task if provided
        let customizedPrompt = prompt.prompt;
        if (args.task) {
          customizedPrompt = `${prompt.prompt}\n\nSpecific task: ${args.task}`;
        }

        logger.info(`Retrieved prompt: ${name}`, { task: args.task });

        return {
          messages: [
            {
              role: "user",
              content: {
                type: "text",
                text: customizedPrompt,
              },
            },
          ],
        };
      } catch (error) {
        logger.error("Error getting prompt:", error);
        if (error instanceof McpError) {
          throw error;
        }
        throw new McpError(ErrorCode.InternalError, "Failed to get prompt");
      }
    });

    // List available tools
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      const tools = await this.toolManager.getTools();

      logger.info(`Listed ${tools.length} prompts`);

      return { tools };

      // return {
      //   tools: [
      //     {
      //       name: "search_prompts",
      //       description: "Search for prompts by keyword or tag",
      //       inputSchema: {
      //         type: "object",
      //         properties: {
      //           query: {
      //             type: "string",
      //             description: "Search query",
      //           },
      //         },
      //         required: ["query"],
      //       },
      //     },
      //     {
      //       name: "search_profiles",
      //       description: "Search for prompts with tag 'profile'",
      //       inputSchema: {
      //         type: "object",
      //         properties: {},
      //         required: [],
      //       },
      //     },
      //     {
      //       name: "get_prompt_stats",
      //       description: "Get statistics about available prompts",
      //       inputSchema: {
      //         type: "object",
      //         properties: {},
      //         required: [],
      //       },
      //     },
      //   ],
      // };
    });

    // Handle tool calls
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      try {
        switch (name) {
          case "search_profiles":
            const profilePrompts = await this.promptManager.searchPromptsByTag(
              "profile"
            );
            logger.info(
              `Search results for "profile" in tags: ${profilePrompts.length} prompts`
            );

            return {
              content: [
                {
                  type: "text",
                  text: JSON.stringify(profilePrompts, null, 2),
                },
              ],
            };
          case "search_prompts":
            if (!args || typeof args.query !== "string") {
              throw new McpError(
                ErrorCode.InvalidRequest,
                "Query parameter is required"
              );
            }
            const results = await this.promptManager.searchPrompts(args.query);
            logger.info(
              `Search results for "${args.query}": ${results.length} prompts`
            );

            return {
              content: [
                {
                  type: "text",
                  text: JSON.stringify(results, null, 2),
                },
              ],
            };
          case "get_prompt_stats":
            const promptStats = this.promptManager.getStats();
            logger.info("Retrieved prompt statistics");

            return {
              content: [
                {
                  type: "text",
                  text: JSON.stringify(promptStats, null, 2),
                },
              ],
            };
          case "get_tool_stats":
            const toolStats = this.toolManager.getStats();
            logger.info("Retrieved prompt statistics");

            return {
              content: [
                {
                  type: "text",
                  text: JSON.stringify(toolStats, null, 2),
                },
              ],
            };

          default:
            throw new McpError(
              ErrorCode.MethodNotFound,
              `Unknown tool: ${name}`
            );
        }
      } catch (error) {
        logger.error("Error calling tool:", error);
        if (error instanceof McpError) {
          throw error;
        }
        throw new McpError(
          ErrorCode.InternalError,
          `Failed to call tool: ${name}`
        );
      }
    });
  }

  async start(): Promise<void> {
    logger.info("Starting Dev MCP Prompt Server...");

    try {
      await this.promptManager.loadPrompts();
      logger.info("Prompts loaded successfully");

      await this.toolManager.loadTools();
      logger.info("Tools loaded successfully");

      const transport = new StdioServerTransport();
      await this.server.connect(transport);

      logger.info("Server started and ready to accept connections");
    } catch (error) {
      logger.error("Failed to start server:", error);
      process.exit(1);
    }
  }
}

// Start server if run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const server = new DevMCPServer();
  server.start().catch(console.error);
}

export default DevMCPServer;
