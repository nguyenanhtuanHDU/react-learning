import { ADD_NUMBER, DELETE_NUMBER } from './actions';

const initState = {
  couters: [2, 6, 74, 5, 6],
};

const couterReducer = (state = initState, action) => {
  console.log(`🚀 ~ action:`, action);

  switch (action.type) {
    case ADD_NUMBER:
      return {
        ...state.couters,
        couters: [...state.couters, action.payload],
      };

    case DELETE_NUMBER:
      return {
        ...state.couters,
        couters: state.couters.filter((item, i) => i !== action.payload),
      };
    default:
      return state;
  }
};

export { couterReducer };
