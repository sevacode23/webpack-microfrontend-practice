import { Outlet } from 'react-router-dom';
import { calculateSum } from '@mono-practice/shared';

export const Main = () => {
  return (
    <div>
      <p>{calculateSum(11, 3)}</p>

      <p>ADMIN</p>

      <Outlet />
    </div>
  );
};
