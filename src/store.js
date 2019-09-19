import { createStore } from 'redux';
import acornReducer from './reducers/acorns-reducer';

const initialState = {
  acorns: 0,
};

const store = createStore(
  acornReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
