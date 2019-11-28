import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import budiiFilter from './budiiFilter';

const middlewares = [thunk];
const store = createStore(
  combineReducers({
    budiiFilter: budiiFilter,
  }),
  applyMiddleware(...middlewares)
);

export default store;