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
      

      <div className='mt-3'>
          {data.map((book, index) => (
           <div className='row mx-0 my-1'>
              <div className='col-9 '>
                <li>
                {book.title}
                </li>
              </div>
              <div className='col-3'>
               <Read />
              </div>
            </div>
          ))}
        
      </div>
    </div>
  );
}

export default SearchBook;
