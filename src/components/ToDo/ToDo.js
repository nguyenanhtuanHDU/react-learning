import { useState } from 'react';

const ToDo = () => {
  const [works, setWorks] = useState([]);
  const [newWork, setNewWork] = useState('');

  const handleAddWork = () => {
    setWorks((works) => [...works, { text: newWork, completed: false }]);
    setNewWork('');
  };

  const handleDoneWork = (index) => {
    works[index].completed = true;
    const newWorks = works;
    setWorks(() => [...newWorks]);
  };

  const handleDeleleWork = (index) => {
    const newWorks = works.filter((work, i) => index !== i);
    setWorks(newWorks);
  };

  return (
    <div>
      <input
        type='text'
        value={newWork}
        onChange={(e) => setNewWork(e.target.value)}
      />
      <button onClick={() => handleAddWork()}>Add</button>
      {/* () => {handle()} -> hàm chỉ chạy khi bấm -> nên dùng*/}
      {/* {handle()} -> hàm chỉ chạy ngay khi load trang*/}
      <ul>
        {works && works.length > 0 ? (
          works.map((work, index) => (
            <li key={index}>
              <span
                style={{
                  textDecoration: work.completed ? 'line-through' : 'none',
                }}
              >
                {work.text}
              </span>
              <button onClick={() => handleDoneWork(index)}>Done</button>
              <button onClick={() => handleDeleleWork(index)}>Delete</button>
            </li>
          ))
        ) : (
          <strong>empty works</strong>
        )}
      </ul>
    </div>
  );
};

export default ToDo;
