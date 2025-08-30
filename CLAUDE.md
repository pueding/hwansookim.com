# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Hwansoo Kim's personal blog website built with:
- **Next.js 15.5.2** - React framework
- **Nextra 3.3.1** - Static site generator with nextra-theme-blog
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework with DaisyUI components
- **MDX** - Markdown with JSX components

The site is currently transitioning from Docusaurus to Nextra (note: README.md still references Docusaurus commands but they are outdated).

## Commands

### Development
- `npm run dev` - Start development server (uses Next.js)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run typecheck` - Run TypeScript type checking

### Important Notes
- The README.md contains outdated Docusaurus commands (yarn start, yarn build) - ignore these
- Use npm commands from package.json instead
- No testing framework is currently configured
- No linting is configured

## Architecture

### Site Structure
```
pages/
├── index.mdx                    # Home page (About section)
├── korean-blog.mdx             # Korean blog index with manual post list
├── blog-for-my-children/       # Korean blog posts organized by year
│   ├── _meta.tsx              # Navigation metadata
│   ├── index.mdx              # Blog intro page
│   ├── 2021/_meta.tsx         # Year-based organization
│   ├── 2022/_meta.tsx
│   └── YYYY/MM/DD/*.md        # Blog posts in date folders
└── posts/                      # English blog posts (MDX format)
    └── *.mdx                   # Individual post files
```

### Configuration Files
- `next.config.mjs` - Next.js + Nextra configuration with URL redirects for Korean posts
- `theme.config.tsx` - Nextra theme configuration (navigation, footer, meta tags)
- `tailwind.config.js` - Tailwind + DaisyUI styling (light theme only)
- `pages/_app.tsx` - Next.js app wrapper with global CSS

### Content Organization
- **Korean Blog**: Posts in `/blog-for-my-children/` organized chronologically by year/month/day
- **English Posts**: Individual MDX files in `/pages/posts/`
- **Navigation**: Managed through `_meta.tsx` files for hierarchical organization
- **Manual Index**: Korean blog index is manually maintained in `korean-blog.mdx`

### Key Features
- Bilingual content (Korean primary, some English)
- Year-based blog post organization with metadata navigation
- URL redirects for posts with Korean characters in filenames
- No dark mode (disabled in theme.config.tsx)
- External links to GitHub and LinkedIn in navigation

### Working with Blog Posts
- Korean posts: Create in appropriate year/month/day folder under `blog-for-my-children/`
- English posts: Create as individual MDX files in `pages/posts/`
- Update `korean-blog.mdx` manually when adding new Korean posts
- Update year `_meta.tsx` files when adding new months/posts
- Use frontmatter for post metadata (title, date, description, etc.)

### Styling
- Global styles: `styles/globals.css` (minimal - just Tailwind imports)
- Component styling: Uses Tailwind CSS utilities with DaisyUI components
- Theme: Light theme only, no dark mode support