import { useMemo, useState } from 'react';
import './Feature.scss';

const Feature = ({ children, heading, title, className }) => {
  const [count, setCount] = useState(0);

  const handleNumber = (num) => {
    console.log(`🚀 ~ num:`, num);
    return num * num;
  };

  // const numberTest = handleNumber(20);
  // handleNumber sẽ chạy lại mỗi khi re render

  const numberTest = useMemo(() => handleNumber(20), []);
  // thêm [] là tham số thú 2 để handleNumber ko chạy lại mỗi khi re render
  // nếu ko có tham số thứ 2 thì ko có tác dụng

  return (
    <div className='feature'>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Count</button>
      <strong>{children}</strong>
      {/* children: giá trị ở giữa thẻ đóng và mở component */}
      <h2 className={className}>{heading}</h2>
      <p className='feature-title'>{title}</p>
    </div>
  );
};

export default Feature;
