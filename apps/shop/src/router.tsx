import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Main } from '@/screens/main';
import { ShopLazy } from '@/screens/shop';

import { ComponentLoader } from '@/components/component-loader';

const routes = [
  {
    path: '/shop',
    element: <Main />,
    children: [
      {
        path: '/shop/shop',
        element: (
          <ComponentLoader>
            <ShopLazy />
          </ComponentLoader>
        ),
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export const AppRouter = () => <RouterProvider router={router} />;

export default routes;
