

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


export const setReadingBook = async (bookData,total_p,end_p,time_r,user_i) => {
  const bookID = bookData;
  const total_pages = total_p;
  const end_page = end_p;
  const time = time_r;
  const user_id = user_i;


  const response = await fetch(`http://localhost:9000/api/readingSession/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
      book:bookData,
      total_pages:total_pages,
      end_page:end_page,
      time:time,
      comment_session:'Initial',
      user:user_id
    })
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

  export const getMyBooks = async (userId) => {
    const response = await fetch(`http://localhost:9000/api/readingSession/getReadingSessionByUser/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    return data;
  }