export default function selectBook(state = null, action) {
  switch(action.type) {
  case 'BOOK_SELECTED':
    console.log(action);
    return action.payload;
  }
  return state;
}
