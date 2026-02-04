import { useState } from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Alert from "react-bootstrap/Alert"
import SingleBook from "./SingleBook"

function BookList({ books }) {
  const [search, setSearch] = useState("")
  const [selectedAsin, setSelectedAsin] = useState(null)

  const filteredBooks = books.filter((b) => b.title.toLowerCase().includes(search.toLowerCase()))

  const showNoResults = search.trim() !== "" && filteredBooks.length === 0

  const selectBook = (asin) => {
    setSelectedAsin(selectedAsin === asin ? null : asin)
  }

  return (
    <>
      <Form className="mb-3">
        <Form.Control value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Cerca un libro..." />
      </Form>

      {showNoResults && (
        <Alert variant="warning" className="text-center">
          Nessun risultato trovato
        </Alert>
      )}

      <Row xs={1} sm={2} md={3} lg={5} className="g-2">
        {filteredBooks.map((book) => (
          <Col key={book.asin}>
            <SingleBook book={book} selected={selectedAsin === book.asin} onSelect={() => selectBook(book.asin)} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default BookList
