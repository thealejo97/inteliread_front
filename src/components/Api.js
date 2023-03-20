

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
  const response = await fetch(`http://localhost:9000/api/booksApi/searchBookAuthor`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ author:"Gabriel garcia"})
  });
  const data = await response.json();
  return data;

  }