import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

const MyNav = function (props) {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" data-bs-theme="dark">
      <Container fluid={true}>
        <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-2">
            {props.links.map((link) => (
              <Nav.Link key={link.text} href={link.href}>
                {link.text}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNav
