Boise Gun Club Website

**Fonts:**

This site uses "refrigerator-deluxe" for headings and titles, and "museo-sans" for body text and UI elements, both served via Adobe Fonts. DM Sans is included as a fallback.

Adobe Fonts integration is configured in `src/app/layout.tsx` using this CSS link:

```html
<link rel="stylesheet" href="https://use.typekit.net/gly5pnr.css">
```

**Font Usage:**

For consistent styling, use these utility classes:

```jsx
// For headings and titles
<h1 className="font-heading">Heading Text</h1>

// For body text
<p className="font-body">Body content</p>
```

Alternatively, directly reference the fonts in Tailwind classes:

```jsx
<h1 className="font-['refrigerator-deluxe']">Heading Text</h1>
<p className="font-['museo-sans']">Body content</p>
```

**Getting Started:**

1. Run the development server: `npm run dev`, `yarn dev`, `pnpm dev`, or `bun dev`.
2. Open [http://localhost:3000](http://localhost:3000) in your browser.
3. Edit `app/page.tsx` to modify the page.

This project leverages [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) for automatic optimization and loading of [Geist](https://vercel.com/font).

**Learn More:**

*   [Next.js Documentation](https://nextjs.org/docs)
*   [Learn Next.js](https://nextjs.org/learn)
*   [Next.js GitHub Repository](https://github.com/vercel/next.js)

**Deploy on Vercel:**

The easiest way to deploy is with the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme). See the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for details.
