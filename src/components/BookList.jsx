import { Component } from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Alert from "react-bootstrap/Alert"
import SingleBook from "./SingleBook"

class BookList extends Component {
  state = {
    search: "", // testo della ricerca
    selectedAsin: null, // asin del libro selezionato (null = nessuno)
  }

  selectBook = (asin) => {
    // se clicco lo stesso libro lo deseleziono, altrimenti lo seleziono
    this.setState((prev) => ({
      selectedAsin: prev.selectedAsin === asin ? null : asin,
    }))
  }

  render() {
    const { books } = this.props // lista libri passata dal padre
    const { search, selectedAsin } = this.state // prendo i valori dallo state

    // filtro i libri in base a quello che scrivo nella search (case-insensitive)
    const filteredBooks = books.filter((b) => b.title.toLowerCase().includes(search.toLowerCase()))

    // mostro "nessun risultato" solo se ho scritto qualcosa e non trovo nulla
    const showNoResults = search.trim() !== "" && filteredBooks.length === 0

    return (
      <>
        {/* input di ricerca controllato dallo state */}
        <Form className="mb-3">
          <Form.Control
            value={search} // valore preso dallo state
            onChange={(e) => this.setState({ search: e.target.value })} // aggiorno state mentre scrivo
            placeholder="Cerca un libro..."
          />
        </Form>

        {/* alert quando non ci sono risultati */}
        {showNoResults && (
          <Alert variant="warning" className="text-center">
            Nessun risultato trovato
          </Alert>
        )}

        {/* griglia responsive dei libri filtrati */}
        <Row xs={1} sm={2} md={3} lg={4} className="g-2 align-items-start">
          {filteredBooks.map((book) => (
            // colonna singola nella griglia, key serve a React per le liste
            <Col key={book.asin} className="d-flex flex-column">
              <SingleBook
                book={book} // passo il libro al componente figlio
                selected={selectedAsin === book.asin} // true se è selezionato
                onSelect={() => this.selectBook(book.asin)} // al click seleziono/deseleziono
              />
            </Col>
          ))}
        </Row>
      </>
    )
  }
}

export default BookList
