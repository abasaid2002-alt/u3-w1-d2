import Card from "react-bootstrap/Card"

function SingleBook({ book, selected, onSelect }) {
  return (
    <Card
      style={{
        border: selected ? "3px solid red" : "1px solid #dee2e6",
        cursor: "pointer",
      }}
    >
      <Card.Img variant="top" src={book.img} alt={book.title} onClick={onSelect} style={{ height: "350px", objectFit: "cover" }} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <p>Prezzo: {book.price}€</p>
      </Card.Body>
    </Card>
  )
}

export default SingleBook
