import React, { useState, useEffect } from 'react';
import { getAuthorBooks } from './Api';

function ListBooks() {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchDataFromAPI() {
      const result = await getAuthorBooks('');
      setData(result);
      console.log("-----------------")
      console.log(result)
      console.log(result.data)
    }
    fetchDataFromAPI();
  }, []);

  return (
    <div>
    <ul>

    </ul>
    </div>
  );
}

export default ListBooks;