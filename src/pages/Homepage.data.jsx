import { Button } from '../components/atoms/Button/Button';
import { Link } from 'react-router-dom';

export const TECH_STACK = [
  {
    id: 'react',
    value: (
      <>
        <strong>React:</strong>&nbsp;frontend library.
      </>
    ),
  },
  {
    id: 'router',
    value: (
      <>
        <strong>React Router 7:</strong>&nbsp;routing.
      </>
    ),
  },
  {
    id: 'vite',
    value: (
      <>
        <strong>Vite:</strong>&nbsp;build tool and dev server.
      </>
    ),
  },
  {
    id: 'eslint',
    value: (
      <>
        <strong>ESLint</strong>&nbsp;and <strong>Prettier:</strong>&nbsp;code quality and
        formatting.
      </>
    ),
  },
  {
    id: 'css',
    value: (
      <>
        <strong>CSS:</strong>&nbsp;styling (no preprocessors).
      </>
    ),
  },
];

export const GETTING_STARTED = [
  {
    id: 'clone',
    value: (
      <>
        Clone this repository from{' '}
        <Button component={Link} isExternalLink to="https://github.com/marboqmar/starter">
          GitHub
        </Button>
        .
      </>
    ),
  },
  {
    id: 'install',
    value: (
      <>
        Access the project's root folder and run&nbsp;<code>pnpm install</code>.
      </>
    ),
  },
  {
    id: 'development',
    value: (
      <>
        Every time you want to work on the project, access the project and run from the project's
        root folder&nbsp;<code>pnpm run dev</code>&nbsp;to start the development server.
      </>
    ),
  },
];

export const AVAILABLE_SCRIPTS = [
  {
    id: 'dev',
    value: (
      <>
        <code>pnpm run dev</code>: to start the development server.
      </>
    ),
  },
  {
    id: 'build',
    value: (
      <>
        <code>pnpm run build</code>: to build for production.
      </>
    ),
  },
  {
    id: 'preview',
    value: (
      <>
        <code>pnpm run preview</code>: to preview production build.
      </>
    ),
  },
  {
    id: 'lint',
    value: (
      <>
        <code>pnpm run lint</code>: to run ESLint.
      </>
    ),
  },
];

export const PROJECT_STRUCTURE = `src/
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
`;

export const SHOWCASES_CLEAN_UP = [
  {
    id: 'files',
    value: (
      <>
        Files: delete the&nbsp;<code>src/showcases</code>&nbsp;folder and all files within&nbsp;
        <code>src/pages</code>.
      </>
    ),
  },
  {
    id: 'routes',
    value: (
      <>
        Routes: in&nbsp;<code>src/routes.jsx</code>, remove the showcase imports and their
        corresponding route objects.
      </>
    ),
  },
];

export const VARIABLES = [
  {
    id: 'color-variables',
    value: <code>src/css/global/color-variables.css</code>,
  },
  {
    id: 'site',
    value: <code>src/css/global/site.css</code>,
  },
  {
    id: 'spacing',
    value: <code>src/css/global/spacing.css</code>,
  },
  {
    id: 'typography-variables',
    value: <code>src/css/global/typography-variables.css</code>,
  },
  {
    id: 'variables',
    value: <code>src/css/global/variables.css</code>,
  },
];

export const BREAKPOINTS = [
  {
    id: 'mobile',
    value: (
      <>
        Mobile: <code>&lt;768px</code>, this is the default.
      </>
    ),
  },
  {
    id: 'tablet',
    value: (
      <>
        Tablet: <code>&gt;= 768px</code>.
      </>
    ),
  },
  {
    id: 'desktop',
    value: (
      <>
        Desktop: <code>&gt;= 1024px</code>.
      </>
    ),
  },
  {
    id: 'desktop-lg',
    value: (
      <>
        Desktop-lg: <code>&gt;= 1280px</code>.
      </>
    ),
  },
];

export const BREAKPOINTS_USAGE = `/* Tablet */
@media (min-width: 768px) {
  /* styles */
}

/* Desktop */
@media (min-width: 1024px) {
  /* styles */
}
`;

export const NEW_PAGE_STEPS = [
  {
    id: 'new-page',
    value: (
      <>
        Create the new page adding a new&nbsp;<code>.jsx</code>&nbsp;file in&nbsp;
        <code>src/pages/</code>&nbsp;.
      </>
    ),
  },
  {
    id: 'style',
    value: (
      <>
        Style (optional): create a corresponding&nbsp;<code>.css</code>&nbsp;file in&nbsp;
        <code>src/css/pages/</code>&nbsp;and import it in the new page.
      </>
    ),
  },
  {
    id: 'route',
    value: (
      <>
        Register the route: define the path for the new page in&nbsp;<code>src/routes.jsx</code>
        &nbsp;.
      </>
    ),
  },
  {
    id: 'content',
    value:
      "Build the page's content: import and use the design system components (atoms, molecules, etc.) within your page to maintain consistency.",
  },
];
