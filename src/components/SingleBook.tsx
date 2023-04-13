import ListGroup from 'react-bootstrap/ListGroup'
import { Book } from '../interfaces/Book'

// SingleBook riceve una prop chiamata "book"
// ogni "book" è un Book

interface SingleBookProps {
  book: Book
}

const SingleBook = (props: SingleBookProps) => (
  <ListGroup.Item>
    {props.book.title} - {props.book.price}€
  </ListGroup.Item>
)

export default SingleBook

// FORMA ALTERNATIVA, DESTRUTTURANDO BOOK DALLE PROPS:

// const SingleBook = ({ book }: SingleBookProps) => (
//   <ListGroup.Item>
//     {book.title} - {book.price}€
//   </ListGroup.Item>
// )
