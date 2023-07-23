import { memo } from 'react';

const Child = memo(() => {
  // memo: tránh re render lại Child component khi Parent re render
  // chỉ re render lại khi props thay đổi
  console.log('child re render');
  return (
    <div>
      <h2>Child component</h2>
    </div>
  );
});

export default Child;
