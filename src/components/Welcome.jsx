import Alert from "react-bootstrap/Alert"

function Welcome(props) {
  return <Alert variant="dark">{props.subtitle}</Alert>
}

export default Welcome
