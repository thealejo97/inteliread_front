import React, { useEffect,useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getTitleBook } from './Api';
import Read from "./Read";

function SearchBook() {

  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault();
    try{
      const result = await getTitleBook(searchTerm);
      setData(result.docs);
    }catch (error) {
      console.error("API error: ", error);
    }
  }

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  }

  return (
    <div className="col-lg-12 text-center">
      <h4>Encuentra tus libros</h4>
      <Form onSubmit={handleSearch}>
        <Form.Group className="mb-3">
          <Form.Label>Busca tu libro</Form.Label>
          <Form.Control type="text" placeholder="Titulo" value={searchTerm} onChange={handleInputChange} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Buscar
        </Button>
      </Form>
      
      {data.length === 0 ? 
        <div class="alert alert-warning mt-3" role="alert">
          No se ha encontrado libro
        </div>
      
      
      : null}
      <div className='mt-3'>
        <ul>
          {data.map((book, index) => (
                <li className='row mx-0 my-1'>
                <p className='col-9'>{book.title} - {book.author_name} - {book.number_of_pages_median ? book.number_of_pages_median : 'N'}</p> <div className='col-3'><Read /></div>
                </li>              
          ))}
        </ul> 
      </div>
    </div>
  );
}

export default SearchBook;
