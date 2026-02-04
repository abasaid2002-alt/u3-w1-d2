import { Component } from "react"
import Card from "react-bootstrap/Card"

class SingleBook extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: props.selected ?? false,
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selected !== this.props.selected) {
      this.setState({ selected: this.props.selected })
    }
  }

  render() {
    const { book, onSelect } = this.props
    const { selected } = this.state

    return (
      <Card
        className="h-100 w-100"
        style={{
          border: selected ? "3px solid red" : "1px solid #dee2e6",
          cursor: "pointer",
        }}
      >
        <Card.Img
          variant="top"
          src={book.img}
          alt={book.title}
          onClick={onSelect} // click sulla copertina (punto 5)
          style={{ height: "350px", width: "100%", objectFit: "cover" }}
        />

        <Card.Body className="d-flex flex-column">
          <Card.Title style={{ minHeight: "3rem" }}>{book.title}</Card.Title>
          <Card.Text className="mt-auto mb-0">Prezzo: {book.price}€</Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default SingleBook
