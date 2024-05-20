import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Main } from '@/screens/main';
import { AboutLazy } from '@/screens/about';

import { ComponentLoader } from '@/components/component-loader';

const routes = [
  {
    path: '/admin',
    element: <Main />,
    children: [
      {
        path: '/admin/about',
        element: (
          <ComponentLoader>
            <AboutLazy />
          </ComponentLoader>
        ),
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export const AppRouter = () => <RouterProvider router={router} />;

export default routes;
