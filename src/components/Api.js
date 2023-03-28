

export const getAllBooks = async (bookData) => {
  const response = await fetch(`http://localhost:9000/api/booksApi/getBookInfo`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ workId: "OL274574W" })
  });
  const data = await response.json();
  return data;

  }


export const getAuthorBooks = async (bookData) => {
  const response = await fetch(`http://localhost:9000/api/booksApi/getAllBooks/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ limit:10})
  });
  const data = await response.json();
  return data;

  }


export const setReadingBook = async (bookData) => {
  const response = await fetch(`http://localhost:9000/api/booksApi/setReadingBook/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ limit:10})
  });
  const data = await response.json();
  return data;

  }


export const getTitleBook = async (bookData) => {
  const response = await fetch(`http://localhost:9000/api/booksApi/searchBookTitle/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title:bookData})
  });
  const data = await response.json();
  return data;

  }