import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import fantasyBooks from "../data/fantasy.json"

function AllTheBooks() {
  return (
    <Row xs={1} sm={2} md={3} lg={5} className="g-2">
      {fantasyBooks.map((book) => (
        <Col key={book.asin} className="d-flex">
          <Card className="h-100 w-100">
            <Card.Img style={{ height: "350px", objectFit: "cover" }} variant="top" src={book.img} alt={book.title} />

            <Card.Body className="d-flex flex-column">
              <Card.Title>{book.title}</Card.Title>

              {/* mt-auto lo spinge in fondo */}
              <Card.Text className="mt-auto mb-0">Prezzo: {book.price}€</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default AllTheBooks
