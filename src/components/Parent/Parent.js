import { useCallback, useState } from 'react';
import Child from '../Child/Child';

const Parent = () => {
  console.log('parent re render');
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((count) => count + 1);
  };

  const handleReset = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <>
      {count}
      <button onClick={() => handleClick()}>Add</button>
      <Child onReset={handleReset} />
    </>
  );
};

export default Parent;
