import { type } from '@testing-library/user-event/dist/type';

const ADD_NUMBER = 'ADD_NUMBER';
const DELETE_NUMBER = 'DELETE_NUMBER';

const addNumber = (number) => ({
  type: ADD_NUMBER,
  payload: number,
});

const deleteNumber = (index) => ({
  type: DELETE_NUMBER,
  payload: index,
});

export { ADD_NUMBER, DELETE_NUMBER, addNumber, deleteNumber };
