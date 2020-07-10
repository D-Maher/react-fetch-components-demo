import { applyMiddleware, createStore, Middleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './ducks';

const configureStore = (initialData = {}) => {
  const middlewares: Middleware[] = [];

  const enhancers = [applyMiddleware(...middlewares)];

  return createStore(rootReducer, initialData, composeWithDevTools(...enhancers));
};

export default configureStore;
