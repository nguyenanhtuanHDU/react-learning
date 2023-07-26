import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNumber, deleteNumber } from '../../redux/actions';

const Couters = () => {
  const [couter, setCouter] = useState(0);
  //   const [indexDelete, setIndexDelete] = useState(-1)
  const couterData = useSelector((state) => state.couters);
  const dispath = useDispatch();

  const handleSetCouter = (number) => {
    setCouter(number);
  };

  const handleAddCouter = () => {
    dispath(addNumber(couter));
  };

  const handleDeleteCouter = (index) => {
    // setCouter(index)
    dispath(deleteNumber(index));
  };

  return (
    <>
      <h1>Couters by Redux</h1>
      <input
        type='number'
        value={couter}
        onChange={(e) => handleSetCouter(e.target.value)}
      />
      <button onClick={handleAddCouter}>Add</button>
      <ul>
        {couterData.map((data, index) => (
          <li key={index}>
            {data}
            <button onClick={() => handleDeleteCouter(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Couters;
