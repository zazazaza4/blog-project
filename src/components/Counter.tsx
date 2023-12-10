import { useState } from 'react';

import classes from './Counter.module.scss';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className={classes.counter}>
      <h2 className={classes.title}>Counter {count}</h2>
      <button onClick={increment}>Click</button>
    </div>
  );
};
export default Counter;
