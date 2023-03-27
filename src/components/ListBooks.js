import React, { useState, useEffect } from 'react';
import { getAuthorBooks } from './Api';
import { Carousel } from "react-bootstrap";

function ListBooks() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchDataFromAPI() {
      try{
          const result = await getAuthorBooks('');
          setData(result);
          console.log("-----------------")
          console.log(result)
          console.log(result.docs)
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
            <div className="text-center my-3" >

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
              <img src={`https://covers.openlibrary.org/b/isbn/${item.isbn[0]}-M.jpg`} alt={`Portada del libro ${item.title}`} style={{width: '200px', height: '300px'}}/> :
              <img src='../images/no_image_book.jpg' alt='No book' style={{width: '200px', height: '300px'}} /> 
              }
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ListBooks;