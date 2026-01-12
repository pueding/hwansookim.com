# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Hwansoo Kim's personal blog website built with:
- **Next.js 15.5.2** - React framework with App Router
- **Nextra 4.6.1** - Static site generator with nextra-theme-blog
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework with DaisyUI components
- **MDX** - Markdown with JSX components

## Commands

### Development
- `npm run dev` - Start development server (uses Next.js)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run typecheck` - Run TypeScript type checking

### Important Notes
- No testing framework is currently configured
- No linting is configured

## Architecture

### Site Structure (Nextra 4 App Router)
```
app/
├── layout.tsx                           # Root layout with Nextra theme components
├── page.mdx                             # Home page (About section)
├── _meta.js                             # Navigation metadata for app root
├── korean-blog/
│   └── page.mdx                         # Korean blog index with manual post list
├── blog-for-my-children/                # Korean blog posts organized by year
│   ├── page.mdx                         # Blog intro page
│   ├── _meta.js                         # Navigation metadata
│   └── YYYY/MM/DD/[post-name]/
│       └── page.mdx                     # Individual blog posts
└── posts/                               # English posts (appears on home feed)
    └── [post-name]/
        └── page.mdx                     # Individual post files

mdx-components.tsx                       # MDX component configuration (project root)
```

### Configuration Files
- `next.config.mjs` - Next.js + Nextra configuration with URL redirects
- `mdx-components.tsx` - MDX component configuration for Nextra 4
- `tailwind.config.js` - Tailwind + DaisyUI styling
- `tsconfig.json` - TypeScript config (moduleResolution: "bundler" for Nextra 4)

### Content Organization
- **Korean Blog**: Posts in `/blog-for-my-children/YYYY/MM/DD/[post-name]/page.mdx`
- **English Posts**: Posts in `/posts/[post-name]/page.mdx`
- **Navigation**: Managed through `_meta.js` files
- **Manual Index**: Korean blog index is manually maintained in `korean-blog/page.mdx`

### Key Features
- Bilingual content (Korean primary, some English)
- Year-based blog post organization with metadata navigation
- URL redirects for posts with Korean characters in filenames
- External links to GitHub and LinkedIn in navigation (auto-open in new tabs)

### Working with Blog Posts

#### Creating Korean Posts
1. Create folder: `app/blog-for-my-children/YYYY/MM/DD/[post-name]/`
2. Create `page.mdx` with frontmatter:
   ```yaml
   ---
   title: Post Title
   date: YYYY/MM/DD
   author: Hwansoo Kim
   ---
   ```
3. Copy any images to the same folder
4. Update `korean-blog/page.mdx` manually with new post link

#### Creating English Posts
1. Create folder: `app/posts/[post-name]/`
2. Create `page.mdx` with frontmatter:
   ```yaml
   ---
   title: Post Title
   date: YYYY/MM/DD
   description: Short description
   tag: tag1, tag2
   author: Hwansoo Kim
   ---
   ```

### Nextra 4 Notes
- Uses App Router exclusively (no Pages Router)
- `_meta.js` files use ESM exports (not `_meta.tsx`)
- `newWindow` property removed from external links - they auto-open in new tabs
- Date format: `YYYY/MM/DD` or `YYYY-MM-DD`
- tsconfig.json moduleResolution must be "bundler"

### Styling
- Global styles: `styles/globals.css`
- Theme styles: `nextra-theme-blog/style.css` (imported in layout.tsx)
- Component styling: Uses Tailwind CSS utilities with DaisyUI components
