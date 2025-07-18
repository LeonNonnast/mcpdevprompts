import { LogEntry } from "../prompt-types.js";

/**
 * Simple logger utility for the MCP server
 */
export class Logger {
  private component: string;

  constructor(component: string) {
    this.component = component;
  }

  info(message: string, data?: any): void {
    this.log("INFO", message, data);
  }

  error(message: string, error?: any): void {
    this.log("ERROR", message, error);
  }

  warn(message: string, data?: any): void {
    this.log("WARN", message, data);
  }

  debug(message: string, data?: any): void {
    if (process.env.DEBUG) {
      this.log("DEBUG", message, data);
    }
  }

  private log(level: string, message: string, data?: any): void {
    const timestamp = new Date().toISOString();
    const logEntry: LogEntry = {
      timestamp,
      level,
      component: this.component,
      message,
      ...(data && { data }),
    };

    // In production, you might want to use a proper logging library
    console.error(JSON.stringify(logEntry));
  }
}
