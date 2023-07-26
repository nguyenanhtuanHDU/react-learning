import { createStore } from 'redux';
import { couterReducer } from './reducer';

export const store = createStore(couterReducer);
