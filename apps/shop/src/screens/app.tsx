import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Main } from './main';
import { ShopLazy } from './shop';

import { ComponentLoader } from '@/components/component-loader';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/shop',
        element: (
          <ComponentLoader>
            <ShopLazy />
          </ComponentLoader>
        ),
      },
    ],
  },
]);

export const App = () => <RouterProvider router={router} />;
