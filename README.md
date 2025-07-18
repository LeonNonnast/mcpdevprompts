# Dev MCP Prompt Server

A lightweight MCP (Model Context Protocol) server that provides curated, high-quality prompts for AI-powered development workflows.

## 🎯 Purpose

Instead of crafting prompts from scratch every time, developers can access proven, community-tested prompts for common development tasks like UI/UX design, project setup, debugging, and more.

## 🚀 Quick Start

### Installation

```bash
# Install globally via npm
npm install -g @dev-mcp/prompt-server

# Or run directly with npx
npx @dev-mcp/prompt-server
```

### Usage with Claude

```bash
# Add to Claude MCP servers
claude mcp add dev-mcp

# Use prompts directly
claude prompt ui-responsive-component "Create a responsive card component"
claude prompt project-setup-guide "Set up a new React TypeScript project"
claude prompt debug-systematic-approach "Debug slow API responses"
```

## 📋 Available Prompts

### UI/UX Design
- **ui-responsive-component**: Create responsive UI components with modern CSS
- **ui-design-system**: Generate comprehensive design systems
- **ui-accessibility-audit**: Conduct accessibility audits and improvements

### Project Onboarding
- **project-setup-guide**: Comprehensive project setup with best practices
- **team-onboarding-guide**: Structured onboarding for new team members

### Development & Debugging
- **debug-systematic-approach**: Systematic debugging methodology
- **performance-optimization**: Performance analysis and optimization strategies

## 🏗️ Architecture

```
src/
├── server.js              # Main MCP server
├── prompt-manager.js      # Prompt loading and management
└── utils/
    └── logger.js          # Logging utility

prompts/
├── ui-design/             # UI/UX related prompts
├── onboarding/            # Project and team onboarding
└── development/           # Development and debugging
```

## 🔧 Development

### Prerequisites
- Node.js 18.0.0 or higher
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/dev-mcp/prompt-server.git
cd prompt-server

# Install dependencies
npm install

# Run in development mode
npm run dev
```

### Adding New Prompts

1. Create a new JSON file in the appropriate category directory
2. Follow the prompt schema (see `schema/prompt-schema.json`)
3. Test the prompt with various inputs
4. Submit a pull request

Example prompt structure:
```json
{
  "id": "unique-prompt-id",
  "title": "Human-readable title",
  "description": "What this prompt does",
  "category": "ui-design",
  "tags": ["responsive", "component"],
  "prompt": "Your detailed prompt text here...",
  "effectiveness": 4.8,
  "author": "your-name",
  "version": "1.0.0"
}
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Types of Contributions
- **New Prompts**: Add high-quality prompts for common development tasks
- **Prompt Improvements**: Enhance existing prompts based on user feedback
- **Documentation**: Improve setup guides and usage examples
- **Bug Fixes**: Report and fix issues with the server

## 📊 Quality Standards

All prompts must meet these criteria:
- **Effectiveness**: Average rating of 4.0+ from community testing
- **Clarity**: Clear, actionable instructions
- **Completeness**: Comprehensive coverage of the task
- **Best Practices**: Follow current industry standards
- **Accessibility**: Consider accessibility requirements where applicable

## 🔒 Security

- No sensitive data in prompts
- Input validation for all user inputs
- Rate limiting on API endpoints
- Regular security audits

## 📈 Roadmap

- [ ] **Phase 1**: MVP with core prompts and MCP integration
- [ ] **Phase 2**: Advanced search and context-aware recommendations
- [ ] **Phase 3**: Community contributions and rating system
- [ ] **Phase 4**: IDE integrations and advanced analytics

## 📝 License

MIT License - see [LICENSE](LICENSE) for details.

## 🙏 Acknowledgments

- Inspired by the [Context7 MCP Server](https://github.com/upstash/context7)
- Built on the [Model Context Protocol](https://modelcontextprotocol.io/)
- Community prompt contributors

## 📞 Support

- [GitHub Issues](https://github.com/dev-mcp/prompt-server/issues)
- [Discord Community](https://discord.gg/dev-mcp)
- [Documentation](https://docs.dev-mcp.com)

---

**Made with ❤️ by the dev-mcp community**