import { useEffect, useState } from 'react';
import './Feature.scss';

const Feature = ({ children, heading, title, className }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log('userEffect');
  }); // ko có tham số thứ 2: useEffect sẽ chạy sau mỗi lần re render

  useEffect(() => {
    console.log('userEffect 2');
    return () => {
      // code chạy vào clean up function trước sau đó mới đến userEffect 2
      console.log('cleaup function');
    };
  }, [count2]); // useEffect chỉ chạy khi count2 thay đổi

  // => dùng để call api

  return (
    <div className='feature'>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Count</button>
      <button onClick={() => setCount2(count + 1)}>Count 2</button>
      <strong>{children}</strong>
      {/* children: giá trị ở giữa thẻ đóng và mở component */}
      <h2 className={className}>{heading}</h2>
      <p className='feature-title'>{title}</p>
    </div>
  );
};

export default Feature;
