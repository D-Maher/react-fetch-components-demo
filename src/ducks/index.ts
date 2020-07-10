import { combineReducers } from 'redux';
import dogs, { DogsStore } from './dogs';

export interface ReduxStore {
  dogs: DogsStore;
}

const rootReducer = combineReducers<ReduxStore>({ dogs });

export default rootReducer;
