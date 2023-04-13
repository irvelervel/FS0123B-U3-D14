import ListGroup from 'react-bootstrap/ListGroup'
import { useState, useEffect } from 'react'
import SingleBook from './SingleBook'
import { Book } from '../interfaces/Book'

// https://striveschool-api.herokuapp.com/food-books

const FetchComponent = () => {
  // useState, se fornito di un valore iniziale [], assegnerà alla
  // variabile di stato automaticamente un tipo di never[]
  // "never" is never a good thing!
  // è quindi necessario fornire a books un tipo "custom", personalizzato
  // dobbiamo creare un'interfaccia ad es. Book e dichiararla come tipo
  // per books
  const [books, setBooks] = useState<Book[]>([])

  const fetchBooks = async () => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/food-books'
      )
      if (response.ok) {
        let data = await response.json()
        console.log(data)
        // data è l'array di libri
        setBooks(data)
      } else {
        alert('response NOT ok')
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <div>
      <h2>LIBRI DISPONIBILI:</h2>
      <ListGroup>
        {books.map((book) => (
          <SingleBook book={book} key={book.id} />
        ))}
      </ListGroup>
    </div>
  )
}

export default FetchComponent
