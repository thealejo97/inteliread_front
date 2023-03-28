import React, { useState, useEffect } from 'react';
import { getAuthorBooks } from './Api';
import { Carousel } from "react-bootstrap";
import Read from "./Read";

function ListBooks() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchDataFromAPI() {
      try{
          const result = await getAuthorBooks('');
          setData(result);
          setData(result.docs)
        }catch (error) {
          console.error("API error: ", error);
        }
    }
    fetchDataFromAPI();
  }, []);

  return (
    <Carousel>
      {data.map((item, index) => (
        <Carousel.Item key={index}>
            <div className="d-flex justify-content-center align-items-center" style={{backgroundColor: '#E6E6E6'}}>
            <div className="text-center mb-5 mt-3" >

              <h4>{item.title}</h4>
              {item.author_name ?
              <p>Author: {item.author_name}</p>:
              <p>Author: NA</p>
              }
              {item.first_sentence ?
              <p>{item.first_sentence}</p>:
              <p>No hay descripción</p>
              }
              {item.publish_place ?
              <p>Lugar de publicación: {item.publish_place[0]}</p>:
              <p>Lugar de publicación: NA</p>
              }
              {item.isbn ?
              <p>ISBN: {item.isbn[0]}</p>:
              <p>ISBN: NA</p>
              }
              {item.isbn ?
              <img src={`https://covers.openlibrary.org/b/isbn/${item.isbn[0]}-M.jpg`} alt={`Portada del libro ${item.title}`} style={{width: '100px', height: '150px',backgroundColor:'white'}}/> :
              <img src={""} style={{minWidth: '100px', minHeight: '150px',backgroundColor:'white'}}/>
              }
              <div className='col-12 mt-3'>
              <Read />
              </div>
            </div>
          </div>
          
        </Carousel.Item> 
      ))}
    </Carousel>
  );
}

export default ListBooks;