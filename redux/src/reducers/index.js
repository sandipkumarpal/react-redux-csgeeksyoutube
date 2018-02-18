import { combineReducers } from 'redux';
import BooksReducers from './reducers_books';

const rootReducer = combineReducers({
  books: BooksReducers
});

export default rootReducer;
