import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { setReadingBook } from './Api';

function AddReadingSession(props) {
  const [numPaginas, setNumPaginas] = useState(0);
  const [readingTime, setreadingTime] = useState(0);
  const [comentario, setComentario] = useState('');
  console.log("Añadiendo sesion")
  console.log(props.bookId)
  console.log(props.bookPages)
  console.log(numPaginas)
  console.log(readingTime)

  const handleNumPaginasChange = (e) => {
    setNumPaginas(e.target.value);
  };

  const handlereadingTimeChange = (e) => {
    setreadingTime(e.target.value);
  };

  const handleComentarioChange = (e) => {
    setComentario(e.target.value);
  };

  async function setReadingApiBook() {
/*    console.log("Añadiendo sesion")
    console.log(props.bookId)
    console.log(props.bookPages)
    console.log(numPaginas)
    console.log(readingTime)
    */
    try {
      const userId = localStorage.getItem('userId');
      const bookId = props.bookId.split('/').pop();
      const result = await setReadingBook(bookId,props.bookPages ,numPaginas,readingTime,userId,comentario);
    } catch (error) {
      console.error("API error: ", error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onClose(numPaginas, comentario);
    setReadingApiBook();
  };

  return (
    <Modal show={props.show} onHide={props.onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Ingrese la información sesión de lectura {props.bookId}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="numPaginas">
            <Form.Label>Número de páginas leídas</Form.Label>
            <Form.Control type="number" value={numPaginas} onChange={handleNumPaginasChange} />
          </Form.Group>
          <Form.Group controlId="readingTime">
            <Form.Label>Tiempo de lectura(min)</Form.Label>
            <Form.Control type="number" value={readingTime} onChange={handlereadingTimeChange} />
          </Form.Group>
          <Form.Group controlId="comentario">
            <Form.Label>Comentario</Form.Label>
            <Form.Control as="textarea" rows={3} value={comentario} onChange={handleComentarioChange} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onClose}>Cancelar</Button>
        <Button variant="primary" onClick={handleSubmit}>Guardar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddReadingSession;
