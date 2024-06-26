import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { calculateSum } from '@mono-practice/shared';

import mountainImage from '@/assets/images/mountain.webp';
import shineImage from '@/assets/images/shine.jpg';

import classes from './main.module.scss';

export const Main = () => {
  const [counter, setCounter] = useState(1);

  const increment = () => setCounter((prev) => prev + 1);

  useEffect(() => {
    console.log(process.env, APP_COUNTER_MAX);
  }, []);

  return (
    <div>
      <p>{calculateSum(11, 17)}</p>

      <div>
        <Link to="/about">About</Link>
        <br />
        <Link to="/shop">Shop</Link>
      </div>

      <div>
        <img
          className={classes.logo}
          src={shineImage}
          data-testid="testId.shine"
        />
        <img className={classes.logo} src={mountainImage} />
      </div>

      <p>{counter}</p>

      <button className={classes.myClass} onClick={increment}>
        Increment
      </button>

      <Outlet />
    </div>
  );
};
