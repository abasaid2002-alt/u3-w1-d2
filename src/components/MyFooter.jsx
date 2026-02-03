import Container from "react-bootstrap/Container"

const MyFooter = function () {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container className="d-flex flex-column align-items-center gap-3">
        <button className="btn btn-outline-secondary">Contattaci</button>

        <div className="small text-center">© {new Date().getFullYear()} EpiBooks • Tutti i diritti riservati</div>
      </Container>
    </footer>
  )
}

export default MyFooter
