import { useCallback, useState } from 'react';
import Child from '../Child/Child';

const Parent = () => {
  console.log('parent re render');
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  return (
    <>
      {count}
      <button onClick={() => handleClick()}>Add</button>
      <Child />
    </>
  );
};

export default Parent;
