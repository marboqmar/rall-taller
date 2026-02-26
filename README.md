# Rall taller

Single page application (SPA)

TODO - complete this section

## Tech stack

- **React 19**: frontend library.
- **React Router 7**: routing.
- **Vite**: build tool and dev server.
- **ESLint** and **Prettier**: code quality and formatting.
- **Vanilla CSS**: styling (no preprocessors).

## Why CSS rather than SCSS?

The author prefers CSS over SCSS, as nesting is not found easier to read, especially in very large
files. Apart from nesting, the author sees no real advantage in using SCSS, since CSS now supports
variables (custom properties) and does not require compilation, which is a significant benefit.

While CSS lacks mixins, the author does not consider using multiple classes instead of mixins a
major drawback.

Another limitation is that CSS variables cannot be used in `@media` queries, which requires writing
breakpoints manually. However, the author still considers the fact that CSS does not need to be
compiled a major benefit.

## Why React Router if this is a SPA?

Despite this being a SPA, React Router is still used to prevent the user from accidentally leaving the site when they press the back browser button after they have opened a container, and also to manage URL parameters to allow the user to share a URL that renders the site with certain container open.

React Router also improves how the site structure is perceived by crawlers and screen readers, improving both accessibility and SEO.

## Getting Started

To set up this project:

1. Clone this repository from GitHub.
2. Access the project's root folder and run `pnpm install`.
3. Every time you want to work on the project, access the project and run from the project's root
   folder `pnpm run dev` to start the development server.

### Available Scripts

- `pnpm run dev`: to start the development server.
- `pnpm run build`: to build for production.
- `pnpm run preview`: to preview production build.
- `pnpm run lint`: to run ESLint.

## Project Structure

TODO - review this section once project is finished

The structure of this project is as follows:

```
src/
├── components/         # Component library (atomic design)
│   ├── atoms/
│   ├── molecules/
│   └── organisms/
├── constants           # Non-changing variables
├── contexts            # App contexts
├── css/
│   ├── global/         # Global styles
│   ├── pages/          # Page-specific styles
│   └── style.css       # Main stylesheet entry point
├── hooks               # Custom hooks
├── pages/              # Page components
├── utils               # Helper utilities
├── App.jsx             # Main app component
├── routes.jsx          # React Router configuration
└── main.jsx            # Application entry point
```

### Breakpoints

The breakpoints used for this project are:

- Mobile: `< 768px`, this is the default.
- Tablet: `>= 768px`.
- Desktop: `>= 1024px`.
- Desktop-lg: `>= 1280px`.
- Desktop-xl: `>=1440px`.

Usage in CSS:

```css
/* Tablet */
@media (min-width: 768px) {
  /* styles */
}

/* Desktop */
@media (min-width: 1024px) {
  /* styles */
}
```

As previously discussed, CSS variables cannot be used in `@media` queries, so breakpoint values
must be written manually. Consequently, in order to modify these breakpoints, do a global search
and replace all instances manually across your CSS files.
