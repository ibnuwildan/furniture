import { Form, Button, } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaShoppingBag } from "react-icons/fa";
import { AiOutlineUserAdd, AiOutlineSearch } from "react-icons/ai";

const NavigationBar = () => {
  return (
    <Navbar className="navbar" expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">
          <h3 className="text-brand fw-bold">
            <span style={{ color: "orange", fontSize: "40px" }}>p</span>anto
          </h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto ms-5">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Furniture" id="basic-nav-dropdown">
              <NavDropdown.Item href="/bed">Bed</NavDropdown.Item>
              <NavDropdown.Item href="/chair">Chair</NavDropdown.Item>
              <NavDropdown.Item href="/sofa">Sofa</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about">About</Nav.Link>
            {/* <Nav.Link href="/admin">Admin</Nav.Link> */}
          </Nav>
          <Nav className="ms-auto ">
            <Form className="d-flex">
              <Form.Control type="search" placeholder="Search" className="me-3" aria-label="Search" />
              <Button variant="outline-warning" style={{ borderRadius: "50%", borderColor: "transparent" }}>
                <AiOutlineSearch />
              </Button>
            </Form>
            <Nav.Link href="/">
              <FaShoppingBag className="mx-3" />
            </Nav.Link>
              <Button variant="outline-warning" style={{ borderColor: "transparent", borderRadius: "50%" }} >
                <a href="/login" style={{color: "white"}}><AiOutlineUserAdd /></a>
              </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
