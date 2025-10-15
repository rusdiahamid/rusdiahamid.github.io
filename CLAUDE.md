# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 portfolio website using React 19, TypeScript, and Tailwind CSS v4. The project uses the App Router architecture and is configured for deployment on GitHub Pages (rusdiahamid.github.io).

## Development Commands

```bash
# Start development server
bun run dev

# Build for production
bun run build

# Start production server
bun run start

# Run ESLint
bun run lint
```

## Project Structure

- `src/app/` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with Geist fonts configuration
  - `page.tsx` - Homepage component with Next.js starter content
  - `globals.css` - Global styles with Tailwind CSS v4 and CSS custom properties
- `public/` - Static assets (SVG icons for Next.js branding)
- `next.config.ts` - Next.js configuration (minimal setup)
- `tailwind.config.*` - Tailwind CSS configuration files
- `eslint.config.mjs` - ESLint configuration for Next.js
- `tsconfig.json` - TypeScript configuration with path aliases (`@/*` → `./src/*`)

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **UI**: React 19
- **Styling**: Tailwind CSS v4 with PostCSS
- **Language**: TypeScript with strict mode
- **Fonts**: Geist Sans and Geist Mono from Google Fonts
- **Linting**: ESLint with Next.js recommended rules

## Key Configuration Details

### Tailwind CSS v4

- Uses new `@import "tailwindcss"` syntax
- CSS custom properties for theming with light/dark mode support
- Inline theme configuration in `globals.css`

### TypeScript

- Path alias: `@/*` maps to `./src/*`
- Strict mode enabled
- Next.js plugin integrated

### ESLint

- Extends Next.js core-web-vitals and TypeScript configurations
- Ignores build outputs and dependencies

## Current State

This is a fresh Next.js project with starter content. The homepage contains default Next.js branding and placeholder content. The project appears to be set up as a personal portfolio website for GitHub Pages deployment.
