import React, { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import { getMyBooks } from './Api';
import AddReadingSession from './AddReadingSession';
import AddReadingSessionButton from "./AddReadingSessionButton";

function MyBooks() {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [reloadData, setReloadData] = useState(false);

  const handleAddSession = (numPaginas, comentario) => {
    setReloadData(true); // actualizar la variable reloadData cuando se agrega una sesión de lectura
  };

  useEffect(() => {
    async function fetchDataFromAPI() {
      setIsLoading(true);
      const userId = localStorage.getItem('userId');
      try {
        const result = await getMyBooks(userId);
        setData(result.data);
      } catch (error) {
        console.error("API error: ", error);
      }
      setIsLoading(false);
    }
    fetchDataFromAPI();
  }, [reloadData]);

  return (
    <div className="col-lg-12 text-center">
      <h4>Mis libros</h4>
      {isLoading ? (
        <div className="d-flex justify-content-center mt-3">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : data && data.length === 0 ? (
        <Alert variant="warning" className="mt-3">
          No tienes libros
        </Alert>
      ) : (
        <div className='mt-3'>
          <ul>
            {data.map((book, index) => (
              <li className='row mx-0 my-1'>
                <p className='col-9'>{book.book_info.title}, {book.book_info.first_publish_date} - de {book.total_pages} llevas leido <strong>{book.progress_user_end}%</strong></p> 
                <div className='col-3'>
                  <button className='btn btn-primary' onClick={() => setSelectedBook(book.book_info.key)}>Leer libro</button>
                  <AddReadingSession
                    bookId={selectedBook}
                    bookPages={book.total_pages}
                    show={selectedBook === book.book_info.key}
                    onClose={() => setSelectedBook(null)}
                    onAddSession={handleAddSession}
                  />
                </div>
              </li>              
            ))}
          </ul> 
        </div>
      )}
    </div>
  );
}

export default MyBooks;
