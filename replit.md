# replit.md

## Overview

This project is a static website for CoderDojo Kitakata (CoderDojo喜多方), a Japanese programming club for children. The site is built using Astro framework and focuses on showcasing event reports and announcements for the programming education community. The website serves as an information hub for parents, children, and volunteers interested in participating in CoderDojo activities in the Kitakata region.

## System Architecture

### Frontend Architecture
- **Framework**: Astro 5.10.1 - A modern static site generator optimized for performance
- **Styling**: Custom CSS with CSS variables for theming and responsive design
- **Content Management**: Astro's built-in content collections for structured content handling
- **TypeScript**: Strict TypeScript configuration for type safety and better development experience

### Static Site Generation
- **Build Process**: Astro generates static HTML files for optimal performance and SEO
- **Deployment Target**: Node.js adapter configured for server-side rendering capabilities when needed
- **Path Aliases**: Organized import structure with @ aliases for cleaner code organization

## Key Components

### Content Management System
- **Content Collections**: Zod schema-validated content collection for event reports
- **Markdown Processing**: Built-in Astro markdown processing with frontmatter support
- **Schema Definition**: Structured content with title, description, date, author, tags, and optional images

### Styling System
- **CSS Variables**: Consistent color system with primary, secondary, and semantic colors
- **Typography**: Noto Sans JP font for Japanese text with fallback system fonts
- **Component Styling**: Modular CSS approach with hero sections and gradient backgrounds

### File Organization
- **src/content/**: Content collections and configuration
- **src/styles/**: Global CSS styles and variables
- **public/**: Static assets including robots.txt for SEO
- **Path Mapping**: TypeScript path aliases for components, layouts, pages, and styles

## Data Flow

### Content Pipeline
1. **Content Creation**: Markdown files with YAML frontmatter in `src/content/reports/`
2. **Schema Validation**: Zod schemas ensure content structure consistency
3. **Static Generation**: Astro processes markdown into HTML during build
4. **Output**: Static HTML files served to users

### Content Structure
- **Reports Collection**: Event reports with metadata (title, description, date, author, tags)
- **Frontmatter Validation**: Ensures consistent data structure across all content
- **Type Safety**: TypeScript integration provides compile-time validation

## External Dependencies

### Core Framework
- **Astro**: Static site generator and web framework
- **@astrojs/node**: Node.js adapter for deployment flexibility
- **@astrojs/markdown-remark**: Enhanced markdown processing capabilities

### Development Tools
- **TypeScript**: Type checking and enhanced developer experience
- **Zod**: Runtime schema validation for content collections

## Deployment Strategy

### Static Site Deployment
- **Build Output**: Static HTML, CSS, and JavaScript files
- **Node.js Adapter**: Configured for potential server-side rendering needs
- **SEO Optimization**: Robots.txt and sitemap configuration for search engines
- **Performance**: Optimized static assets with Astro's build optimizations

### Configuration
- **TypeScript**: Strict configuration extending Astro's recommended settings
- **Path Resolution**: Clean import paths using TypeScript path mapping
- **Build Scripts**: Standard npm scripts for development and deployment

## Changelog

```
Changelog:
- June 28, 2025. Initial setup
- June 28, 2025. Added reports listing page with pagination (10 items per page)
- June 28, 2025. Fixed Vite configuration for Replit hosting compatibility
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```