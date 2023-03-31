import React from 'react';
import { setReadingBook } from './Api';

function AddReadingSessionButton(props) {

  async function setReadingApiBook() {
    try {
      const userId = localStorage.getItem('userId');
      const bookId = props.bookKey.split('/').pop();
      const result = await setReadingBook(bookId,props.bookTotalPages,'0','0',userId,'Initial');
    } catch (error) {
      console.error("API error: ", error);
    }
  }

  function handleButtonClick() {
    setReadingApiBook();
  }

  return (
        <div>
            <button id={props.bookKey} className='btn btn-primary' onClick={handleButtonClick}>Añadir sesión de lectura</button>
        </div>
  );
}

export default AddReadingSessionButton;