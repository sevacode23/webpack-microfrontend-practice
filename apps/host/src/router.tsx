import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//@ts-ignore
import shopRoutes from 'shop/router';
//@ts-ignore
import adminRoutes from 'admin/router';

import { Main } from '@/screens/main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [...shopRoutes, ...adminRoutes],
  },
]);

export const App = () => <RouterProvider router={router} />;
