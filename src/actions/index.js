export function selectBook(book) {
  console.log("book: " + book);
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
