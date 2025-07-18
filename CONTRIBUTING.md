# Contributing to Dev MCP Prompt Server

Thank you for your interest in contributing to the Dev MCP Prompt Server! We welcome contributions from the community to help make this project better.

## How to Contribute

### 1. Adding New Prompts

We're always looking for high-quality prompts that can help developers in their workflows.

#### Prompt Quality Standards
- **Effectiveness**: Prompts should be tested and produce consistent, high-quality results
- **Clarity**: Clear, actionable instructions that are easy to follow
- **Completeness**: Comprehensive coverage of the task at hand
- **Best Practices**: Follow current industry standards and best practices

#### Prompt Structure
All prompts must follow our schema defined in `public/schema/prompt-schema.json`:

```json
{
  "id": "unique-prompt-id",
  "title": "Human-readable title",
  "description": "What this prompt does",
  "category": "ui-design|onboarding|development|debugging|documentation",
  "tags": ["relevant", "tags", "for", "search"],
  "prompt": "Your detailed prompt text here...",
  "examples": [
    {
      "input": "Example input",
      "output": "Expected output description"
    }
  ],
  "effectiveness": 4.5,
  "author": "your-name",
  "version": "1.0.0",
  "created_at": "2024-01-01T00:00:00Z",
  "updated_at": "2024-01-01T00:00:00Z"
}
```

#### Categories
- **profiles**: AI assistant personalities and roles
- **skills**: General development skills and techniques
- **onboarding**: Project setup and team integration
- **ui-design**: User interface and user experience
- **development**: General programming and development
- **debugging**: Troubleshooting and problem-solving

### 2. Adding New Tools

Tools extend the functionality of the MCP server. Follow the schema in `public/schema/tool-schema.json`:

```json
{
  "id": "unique-tool-id",
  "name": "tool_name",
  "description": "What this tool does",
  "input_schema": {
    "type": "object",
    "properties": {
      "parameter": {
        "type": "string",
        "description": "Parameter description"
      }
    },
    "required": ["parameter"]
  }
}
```

### 3. Code Contributions

#### Development Setup
```bash
# Clone the repository
git clone https://github.com/dev-mcp/prompt-server.git
cd prompt-server

# Install dependencies
npm install

# Build the project
npm run build

# Run tests
npm test

# Start development server
npm run dev
```

#### Code Style
- Use TypeScript for all code
- Follow existing code patterns and conventions
- Add proper type definitions
- Include comprehensive error handling
- Write clear, self-documenting code

### 4. Testing Your Contributions

#### For Prompts
1. Test the prompt with various inputs
2. Verify it produces consistent, high-quality results
3. Check that it follows best practices
4. Ensure it's properly categorized and tagged

#### For Code
1. Run the build: `npm run build`
2. Run tests: `npm test`
3. Test with MCP Inspector: `npm run inspector`
4. Verify all functionality works as expected

### 5. Submitting Your Contribution

1. **Fork the repository** on GitHub
2. **Create a feature branch** from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes** following the guidelines above
4. **Test thoroughly** to ensure everything works
5. **Commit your changes** with a clear, descriptive message:
   ```bash
   git commit -m "Add: New UI component generation prompt"
   ```
6. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request** on GitHub with:
   - Clear title and description
   - Explanation of what you've added/changed
   - Testing instructions
   - Screenshots if applicable

### 6. Pull Request Guidelines

- **One feature per PR**: Keep pull requests focused on a single feature or fix
- **Clear descriptions**: Explain what you've changed and why
- **Testing evidence**: Show that you've tested your changes
- **Follow the template**: Use the PR template when creating your request

### 7. Community Guidelines

- Be respectful and constructive in discussions
- Help review other contributions
- Share knowledge and best practices
- Report issues and bugs you encounter

### 8. Recognition

Contributors will be:
- Listed in the README
- Credited in prompt/tool metadata
- Invited to join the maintainer team for significant contributions

## Questions?

If you have questions about contributing, please:
- Open an issue for discussion
- Join our Discord community
- Check existing documentation

Thank you for helping make Dev MCP Prompt Server better for everyone! 🚀