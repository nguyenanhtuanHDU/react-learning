const Child = ({ onReset }) => {
  console.log('child re render');
  return (
    <div>
      <h2>Child component</h2>
      <button onClick={onReset}>reset</button>
    </div>
  );
};

export default Child;
