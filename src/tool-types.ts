export type ToolData = {
  id: string;
  name: string;
  description: string;
  inputSchema: { [key: string]: { type: string; description: string } };
};

export interface ToolsStats {
  totalTools: number;
}
