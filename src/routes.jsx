import { createBrowserRouter } from 'react-router-dom';
import { App } from './App.jsx';
import { Homepage } from './pages/Homepage.jsx';
import { Grid } from './pages/Grid.jsx';
import { Atoms } from './pages/Atoms.jsx';
import { Molecules } from './pages/Molecules.jsx';
import { Organisms } from './pages/Organisms.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: '/grid',
        element: <Grid />,
      },
      {
        path: '/atoms',
        element: <Atoms />,
      },
      {
        path: '/molecules',
        element: <Molecules />,
      },
      {
        path: '/organisms',
        element: <Organisms />,
      },
    ],
  },
]);
