# MCP DevPrompts

[![npm version](https://badge.fury.io/js/@mcpdevprompts%2Fserver.svg)](https://badge.fury.io/js/@mcpdevprompts%2Fserver)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Model Context Protocol](https://img.shields.io/badge/MCP-Compatible-blue)](https://modelcontextprotocol.io/)

> **Curated AI prompts for developers, delivered through the Model Context Protocol**

<a href="https://glama.ai/mcp/servers/@LeonNonnast/mcpdevprompts">
  <img width="380" height="200" src="https://glama.ai/mcp/servers/@LeonNonnast/mcpdevprompts/badge" alt="Dev Prompt Server MCP server" />
</a>

A lightweight MCP server providing battle-tested prompts for AI-powered development workflows. Create specialized agents by combining modular skills, or use expert AI profiles for debugging, SQL optimization, and more.

## 🚀 Quick Start

### Installation

```bash
# Install globally
npm install -g @mcpdevprompts

# Or run directly
npx @mcpdevprompts
```

### Usage with Claude

```bash
# Add to Claude MCP servers
claude mcp add mcpdevprompts

# Use prompts directly
claude prompt debug-andy "My API returns 500 errors randomly"
claude prompt sql-expert "Optimize this slow query"
claude prompt clean-code-clarity-readability "Create a user service with clean code"
```

### Quick Workflow Examples

#### 🔍 Discover Available Profiles & Skills

```bash
# See all available AI profiles
claude search_profiles
# Returns: debug-andy, sql-expert, performance-kai, lovable-ai-editor-base, etc.

# List all development skills
claude list_skills
# Returns: clean-code-clarity-readability, testing-strategies, error-handling-best-practices, etc.
```

#### 👥 Work with AI Profiles

```bash
# Use a specialized debugging expert
claude prompt debug-andy "My React app crashes randomly on mobile devices"

# Get SQL optimization help
claude prompt sql-expert "This query takes 30 seconds, how can I optimize it?"

# Performance analysis
claude prompt performance-kai "My Node.js API response time increased by 200%"
```

#### 🧠 Load Skills into Your Agent

```bash
# Load clean code skills
claude load_skills '{
  "skill_ids": ["clean-code-clarity-readability", "clean-code-small-functions"],
  "agent_name": "Clean Code Assistant"
}'

# Load testing expertise
claude load_skills '{
  "skill_ids": ["testing-strategies", "error-handling-best-practices"],
  "agent_name": "Testing Expert"
}'

# Create a full-stack quality agent
claude load_skills '{
  "skill_ids": ["clean-code-clarity-readability", "clean-code-small-functions", "testing-strategies"],
  "agent_name": "Full-Stack Expert"
}'
```

#### 🎯 Real-World Scenarios

**Scenario 1: Debugging Session**

```bash
# 1. Start with debugging expert
claude prompt debug-andy "API endpoint returns 500 error intermittently"

# 2. Load additional skills for comprehensive solution
claude load_skills '{
  "skill_ids": ["error-handling-best-practices", "testing-strategies"],
  "agent_name": "Debug & Test Expert"
}'

# 3. Now ask for complete solution
"Create robust error handling and tests for this API endpoint"
```

**Scenario 2: Code Quality Review**

```bash
# 1. Load clean code skills
claude load_skills '{
  "skill_ids": ["clean-code-clarity-readability", "clean-code-small-functions", "clean-code-commenting"],
  "agent_name": "Code Quality Reviewer"
}'

# 2. Review and improve code
"Review this function and suggest improvements following clean code principles"
```

**Scenario 3: Onboard New AI Agent**

```bash
# 1. Onboard a specialized editor
claude prompt project-onboarding "Introduce lovable-ai-editor-base for code refactoring tasks"

# 2. Combine with additional skills
claude load_skills '{
  "skill_ids": ["clean-code-clarity-readability", "testing-strategies"],
  "agent_name": "Enhanced Code Editor"
}'
```

### Local Development Testing

```bash
# Clone and test locally
git clone https://github.com/mcpdevprompts.git
cd server
npm install
npm run build
npm run inspector  # Opens MCP Inspector for testing
```

## 📚 Available Prompts

### 👥 AI Profiles

Expert AI assistants for specialized tasks:

- **debug-andy**: Systematic debugging with root cause analysis
- **sql-expert**: Advanced SQL query optimization and database design
- **performance-kai**: Performance analysis and optimization strategies
- **lovable-ai-editor-base**: AI-powered code editing and refactoring
- **perplexity-search-assistant**: Research and information gathering
- **replit-expert-software-developer-editor**: Full-stack development guidance

### 🛠️ Skills & Techniques

Development skills and methodologies:

- **project-onboarding**: Introduce specialized AI agents to your workflow
- **clean-code-clarity-readability**: Generate clear, self-explanatory code
- **clean-code-small-functions**: Write focused, single-purpose functions
- **clean-code-commenting**: Add meaningful comments and documentation
- **error-handling-best-practices**: Implement robust error handling
- **testing-strategies**: Create comprehensive test suites

### 🎯 Specialized Tools

Built-in tools for enhanced functionality:

- **search_prompts**: Find prompts by keyword or category
- **search_profiles**: Find AI profiles by specialization
- **get_prompt_stats**: View prompt collection statistics
- **get_tool_stats**: View available tools and usage
- **list_skills**: List all available development skills
- **load_skills**: Load multiple skills into an agent's knowledge base

**Tool Examples:**

```bash
# Search for profiles
claude search_profiles
# Returns: debug-andy, sql-expert, performance-kai, etc.

# List all available skills
claude list_skills
# Returns: clean-code-clarity-readability, testing-strategies, etc.

# Load multiple skills into an agent
claude load_skills '{"skill_ids": ["clean-code-clarity-readability", "testing-strategies"], "agent_name": "Clean Code Expert"}'
# Returns: Agent loaded with specified skills and ready to use them

# Get collection statistics
claude get_prompt_stats
# Returns: total prompts, categories, effectiveness ratings
```

## 💡 Use Cases

### For Frontend Developers

```bash
# Get clean code generation
claude prompt clean-code-clarity-readability "Create a React component for user profile"

# Small, focused functions
claude prompt clean-code-small-functions "Refactor this large function into smaller parts"

# Add proper documentation
claude prompt clean-code-commenting "Add documentation to this API endpoint"
```

### For Backend Developers

```bash
# Database optimization
claude prompt sql-expert "Optimize this N+1 query problem"

# Performance debugging
claude prompt performance-kai "My Node.js API is slow under load"

# Systematic debugging
claude prompt debug-andy "Random 500 errors in production"
```

### For Team Leads

```bash
# Agent onboarding
claude prompt project-onboarding "Introduce lovable-ai-editor profile for code review"

# Error handling standards
claude prompt error-handling-best-practices "Establish error handling guidelines"

# Testing strategies
claude prompt testing-strategies "Create testing plan for new microservice"
```

### For Code Quality & Skill Management

```bash
# Clean code generation
claude prompt clean-code-clarity-readability "Create a user authentication service"

# Create a specialized agent with multiple skills
claude list_skills  # First see all available skills
claude load_skills '{"skill_ids": ["clean-code-clarity-readability", "clean-code-small-functions", "testing-strategies"], "agent_name": "Code Quality Expert"}'
# Now the agent has all three skills loaded and ready to use
```

## 🎪 Skill Management System

### Available Skills

Our skill system provides modular development expertise that can be combined into specialized agents:

**Clean Code Skills:**

- `clean-code-clarity-readability`: Generate self-explanatory code with meaningful names
- `clean-code-small-functions`: Write focused, single-responsibility functions
- `clean-code-commenting`: Add meaningful comments and documentation

**Development Skills:**

- `testing-strategies`: Create comprehensive test suites and testing plans
- `error-handling-best-practices`: Implement robust error handling patterns
- `project-onboarding`: Guide specialized AI agents into workflow integration

### Skill Workflow

#### 1. Discover Available Skills

```bash
claude list_skills
```

**Returns:**

```json
[
  {
    "id": "clean-code-clarity-readability",
    "title": "Generate Clear and Readable Code",
    "description": "Generate self-explanatory code with meaningful names",
    "tags": ["clean code", "readability", "maintainability"],
    "effectiveness": 5
  },
  {
    "id": "clean-code-small-functions",
    "title": "Generate Small, Single-Responsibility Functions",
    "description": "Write focused, single-purpose functions under 20 lines",
    "tags": ["clean code", "functions", "modularity"],
    "effectiveness": 5
  }
]
```

#### 2. Load Skills into Agent

```bash
claude load_skills '{
  "skill_ids": ["clean-code-clarity-readability", "clean-code-small-functions", "testing-strategies"],
  "agent_name": "Clean Code Expert"
}'
```

**Returns:**

```
You are now a Clean Code Expert with the following specialized skills:

[Combined skill prompts...]

You have been equipped with these 3 specialized skills:
- Generate Clear and Readable Code: Generate self-explanatory code with meaningful names
- Generate Small, Single-Responsibility Functions: Write focused, single-purpose functions
- Create Comprehensive Test Suites: Design testing strategies and test plans

Please acknowledge that you have integrated these skills and are ready to apply them.
```

#### 3. Use Your Specialized Agent

After loading skills, your agent automatically applies them to relevant requests:

```bash
# Agent now combines all loaded skills
"Create a user authentication service with clean code and tests"
# → Uses clean code + testing skills together
```

### Pre-Built Skill Combinations

**🧹 Clean Code Expert**

```bash
claude load_skills '{
  "skill_ids": ["clean-code-clarity-readability", "clean-code-small-functions", "clean-code-commenting"],
  "agent_name": "Clean Code Expert"
}'
```

**🧪 Testing Specialist**

```bash
claude load_skills '{
  "skill_ids": ["testing-strategies", "error-handling-best-practices"],
  "agent_name": "Testing Specialist"
}'
```

**🎯 Full-Stack Quality Agent**

```bash
claude load_skills '{
  "skill_ids": ["clean-code-clarity-readability", "clean-code-small-functions", "testing-strategies", "error-handling-best-practices"],
  "agent_name": "Full-Stack Quality Agent"
}'
```

### Benefits of Skill Management

- **🔧 Modular**: Mix and match skills for specific needs
- **📈 Scalable**: New skills integrate seamlessly
- **👥 Collaborative**: Share skill combinations with your team
- **🎯 Focused**: Create highly specialized agents for specific tasks
- **💡 Intelligent**: Skills work together contextually

## 🏗️ Architecture

```
mcpdevprompts/
├── src/                    # TypeScript source code
│   ├── server.ts          # Main MCP server
│   ├── prompt-manager.ts  # Prompt loading and management
│   ├── tool-manager.ts    # Tool management system
│   └── utils/
├── public/
│   ├── prompts/
│   │   ├── profiles/      # AI assistant profiles
│   │   ├── skills/        # Development skills & techniques
│   │   └── onboarding/    # Project & team setup
│   ├── tools/             # MCP tools definitions
│   └── schema/            # JSON schemas for validation
├── build/                 # Compiled JavaScript
└── docs/                  # Documentation
```

## 🔧 Development

### Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/mcpdevprompts/server.git
cd server

# Install dependencies
npm install

# Build the project
npm run build

# Run in development mode
npm run dev

# Test with MCP Inspector
npm run inspector
```

### Adding New Prompts

1. **Choose the right category**:

   - `profiles/` - AI assistant personalities
   - `skills/` - Development techniques
   - `onboarding/` - Setup and integration

2. **Follow the schema** (see `public/schema/prompt-schema.json`):

   ```json
   {
     "id": "unique-prompt-id",
     "title": "Human-readable title",
     "description": "What this prompt does",
     "category": "profiles|skills|onboarding",
     "tags": ["relevant", "searchable", "tags"],
     "prompt": "Your detailed prompt text here...",
     "examples": [
       {
         "input": "Example input",
         "output": "Expected output description"
       }
     ],
     "effectiveness": 4.5,
     "author": "Your Name",
     "version": "1.0.0",
     "created_at": "2024-01-01T00:00:00Z",
     "updated_at": "2024-01-01T00:00:00Z"
   }
   ```

3. **Test thoroughly** with various inputs
4. **Submit a pull request** with clear description

### Adding New Tools

Tools extend the MCP server functionality with custom operations. Follow these steps:

1. **Choose a meaningful tool name** (e.g., `analyze_code`, `generate_tests`, `check_dependencies`)

2. **Create the tool definition** in `public/tools/your-tool.json`:

   ```json
   {
     "id": "analyze_code_complexity",
     "name": "analyze_code_complexity",
     "description": "Analyze code complexity and suggest improvements",
     "input_schema": {
       "type": "object",
       "properties": {
         "code": {
           "type": "string",
           "description": "The code to analyze"
         },
         "language": {
           "type": "string",
           "description": "Programming language (js, ts, py, etc.)"
         },
         "metrics": {
           "type": "array",
           "items": { "type": "string" },
           "description": "Metrics to calculate (cyclomatic, cognitive, etc.)"
         }
       },
       "required": ["code", "language"]
     }
   }
   ```

3. **Implement the tool logic** in `src/server.ts` CallToolRequestSchema handler:

   ```typescript
   case "analyze_code_complexity":
     if (!args || typeof args.code !== "string") {
       throw new McpError(ErrorCode.InvalidRequest, "Code parameter is required");
     }

     const analysis = await this.analyzeCodeComplexity(args.code, args.language);
     return {
       content: [
         {
           type: "text",
           text: JSON.stringify(analysis, null, 2)
         }
       ]
     };
   ```

4. **Test the tool** with MCP Inspector and various inputs

**Tool Ideas:**

- `validate_env_vars`: Check environment variable completeness
- `generate_tests`: Create unit tests for given code
- `check_dependencies`: Analyze package.json for vulnerabilities
- `format_sql`: Format and validate SQL queries
- `analyze_performance`: Detect performance bottlenecks
- `generate_docs`: Create documentation from code comments

## 📊 Quality Standards

All prompts must meet these criteria:

- **Effectiveness**: Average rating of 4.0+ from community testing
- **Clarity**: Clear, actionable instructions
- **Completeness**: Comprehensive coverage of the task
- **Best Practices**: Follow current industry standards
- **Accessibility**: Consider accessibility requirements where applicable

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Types of Contributions

- **New Prompts**: Add high-quality prompts for common development tasks
- **Prompt Improvements**: Enhance existing prompts based on user feedback
- **Documentation**: Improve setup guides and usage examples
- **Bug Fixes**: Report and fix issues with the server
- **Tools**: Add new MCP tools for enhanced functionality

## 🔒 Security

- No sensitive data in prompts
- Input validation for all user inputs
- Rate limiting on API endpoints
- Regular security audits
- Schema validation for all prompts and tools

## 🎯 Roadmap

- [x] **Phase 1**: TypeScript MCP server with core prompts
- [x] **Phase 2**: AI profiles and specialized tools
- [x] **Phase 3**: Skill management system with combinable expertise
- [x] **Phase 4**: Community contributions and rating system
- [x] **Phase 5**: IDE integrations and advanced analytics
- [x] **Phase 6**: Custom prompt collections and enterprise features

## 📝 License

MIT License - see [LICENSE](LICENSE) for details.

## 🙏 Acknowledgments

- Inspired by the [Context7 MCP Server](https://github.com/upstash/context7)
- Built on the [Model Context Protocol](https://modelcontextprotocol.io/)
- Community prompt contributors

## 📞 Support

- [GitHub Issues](https://github.com/mcpdevprompts/server/issues)
- [Discord Community](https://discord.gg/mcpdevprompts)
- [Documentation](https://docs.mcpdevprompts.com)

---

**Made with ❤️ by the MCP DevPrompts community**