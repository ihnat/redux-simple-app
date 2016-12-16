import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import SelectedBook from './reducer_selected-book';

const rootReducer = combineReducers({
  books: BooksReducer,
  selectedBook: SelectedBook
});

export default rootReducer;
