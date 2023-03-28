import React from 'react';
import { setReadingBook } from './Api';

function Read() {

  async function setReadingApiBook() {
    try {
      const result = await setReadingBook('');
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
            <button className='btn btn-primary' onClick={handleButtonClick}>Añadir a mis libros</button>
        </div>
  );
}

export default Read;