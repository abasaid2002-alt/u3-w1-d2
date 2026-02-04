import "bootstrap/dist/css/bootstrap.min.css"

import Container from "react-bootstrap/Container"
import MyNav from "./components/MyNav"
import Welcome from "./components/Welcome"
import MyFooter from "./components/MyFooter"
import BookList from "./components/BookList"

import fantasyBooks from "./data/fantasy.json"

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <MyNav
        title="EpiBooks"
        links={[
          { text: "Home", href: "#home" },
          { text: "About", href: "#about" },
          { text: "Browse", href: "#browse" },
        ]}
      />

      <Welcome subtitle="Qui trovi i tuoi libri fantasy preferiti." />

      <Container className="my-4">
        {/* Passo l'array di libri a BookList */}
        <BookList books={fantasyBooks} />
      </Container>

      <MyFooter />
    </div>
  )
}

export default App
