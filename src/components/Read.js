import React from 'react';
import { setReadingBook } from './Api';

function Read(props) {

  async function setReadingApiBook() {
    try {
      const userId = localStorage.getItem('userId');
      console.log(props.bookKey)
      const bookId = props.bookKey.split('/').pop();
      console.log(bookId)
      const result = await setReadingBook(bookId,props.bookTotalPages,'0','0',userId);
      console.log("-----------------")
      console.log(result)
    } catch (error) {
      console.error("API error: ", error);
    }
  }

  function handleButtonClick() {
    setReadingApiBook();
  }

  return (
        <div>
            <button id={props.bookKey} className='btn btn-primary' onClick={handleButtonClick}>Añadir a mis libros</button>
        </div>
  );
}

export default Read;