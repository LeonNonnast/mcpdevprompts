# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains the development workspace for an MCP (Modular Command Provider) server concept designed to serve curated prompts for AI development tools. The main idea is documented in `docs/idea.md` and involves creating a lightweight service that returns proven prompts for various development tasks.

## Claude Code Configuration

The repository uses Claude Code's profile system with a specialized "Ideen-Analystin" (Ideas Analyst) role:

### Custom Profile: Mira (Product Strategy Analyst)
- **Profile File**: `.claude/profiles/ia-profile.md`
- **Onboarding Command**: `/ia-onboarding` (defined in `.claude/commands/ia-onboarding.md`)
- **Purpose**: Systematically analyzes creative product ideas with unconventional thinking
- **Analysis Format**: Structured analysis including problem space exploration, solution strengthening, and strategic questions

### Key Profile Behaviors
- Explores problem spaces beyond surface assumptions
- Strengthens ideas through "steelmanning" approach
- Provides concrete improvement suggestions
- Generates 3-5 strategic questions for further development
- Focuses on user needs, market logic, and systemic thinking

## Repository Structure

```
mcpdevprompts/
├── .claude/
│   ├── commands/ia-onboarding.md    # Custom slash command for IA onboarding
│   ├── profiles/ia-profile.md       # Complete IA profile definition
│   └── settings.local.json          # Local permissions and settings
├── docs/
│   └── idea.md                      # Core project concept documentation
└── CLAUDE.md                        # This file
```

## Expected Input Format for Ideas Analysis

When using the IA profile, provide ideas in this format:

```markdown
# Pitch Name

## Problem
[Problem description]

## Lösung
[Solution description]

## Rabbit Holes
[Potential complexities or side considerations]
```

## Development Context

This is an early-stage project focused on:
- MCP server development for prompt curation
- Community-driven prompt collection
- Integration with Claude and other AI development tools
- Lightweight service architecture (local/remote options)

The project emphasizes systematic ideation and strategic product analysis rather than immediate implementation.