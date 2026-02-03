import "bootstrap/dist/css/bootstrap.min.css"
import Container from "react-bootstrap/Container"
import MyNav from "./components/MyNav"
import Welcome from "./components/Welcome"
import AllTheBooks from "./components/AllTheBooks"
import MyFooter from "./components/MyFooter"

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
      <Welcome subtitle="Benvenuto su EpiBooks! Qui trovi i tuoi libri fanstasy preferiti." />

      <Container className="my-4">
        <AllTheBooks />
      </Container>

      <MyFooter />
    </div>
  )
}

export default App
