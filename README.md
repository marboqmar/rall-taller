# Starter

This is a starter template designed to serve as a solid foundation for web projects. It provides a
library of essential, accessible, easily customizable components while maintaining a minimal
dependency footprint. It also provides live showcases of these components.

The goal is to provide all the core building blocks needed for modern web development without the
overhead of unnecessary third-party packages.

You can find this project deployed here https://starter-gilt-six.vercel.app

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
├── showcases           # Live showcases of the available components
├── utils               # Helper utilities
├── App.jsx             # Main app component
├── routes.jsx          # React Router configuration
└── main.jsx            # Application entry point
```

## Showcases

This project includes live showcases to demonstrate how components behave and interact. To view
them, run `pnpm run dev`. Then, navigate the local URL in your browser to explore the available
components.

### Cleaning up the showcases

When you are ready to start building your actual site, you can remove the showcases' files and references to keep your project clean:

- Files: delete the `src/showcases` folder and all files within `src/pages`.
- Routes: in `src/routes.jsx`, remove the showcase imports and their corresponding route objects.

## Customisation

The top priority of this project is to provide components that are accessible and can be customised quickly and easily.

### Variables

To adapt the components of this project to your designs, modify the variables found in the following
files:

- `src/css/global/color-variables.css`
- `src/css/global/site.css`
- `src/css/global/spacing.css`
- `src/css/global/typography-variables.css`
- `src/css/global/variables.css`

All variables use CSS custom properties, so you can override them in your own CSS files or modify
them directly in these files.

Also, modify the container and grid classes as needed. These can be found in `src/css/global/layout.css` and `src/css/global/grid-utils.css`.

### Typography

To modify the typography, update the font families in `src/css/global/typography-variables.css`,
and then adjust the font link in `index.html`.

The `code` tag styling is located in `src/css/global/site.css`.

The `--icon-alignment-height` variable (located in `src/css/global/typography-variables.css`) is a
'first-line anchor', used to align the icon to the first line of text. It uses the variables
`--line-height-base` and `--font-size-base` to calculate the height the first line of text has and
align the icon accordingly. If the line height or font sizes used are different, update this
variable accordingly.

### Breakpoints

The breakpoints used for this project are:

- Mobile: `< 768px`, this is the default.
- Tablet: `>= 768px`.
- Desktop: `>= 1024px`.
- Desktop-lg: `>= 1280px`.

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

## Create new pages

To create a new page, follow these steps:

1. Create the new page adding a new `.jsx` file in `src/pages/`.
2. Style (optional): create a corresponding `.css` file in `src/css/pages/` and import it in the
   new page.
3. Register the route: define the path for the new page in `src/routes.jsx`.
4. Build the page's content: import and use the design system components (atoms, molecules, etc.)
   within your page to maintain consistency.
