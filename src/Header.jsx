import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { IoHomeOutline } from "react-icons/io5";
import { FaTv } from "react-icons/fa6";
import { MdOutlineLocalMovies } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { FaAndroid } from "react-icons/fa";

function Header() {
  return (
    <>
        <style type="text/css">
        {`
    .btn-flat {
      background-color: #FFA310;
      color: white;
    }
      .form-control {
      border-color: #FFA310
      }
    `}
      </style>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#" style={{ fontWeight: "bold" }}>
            DIGI<span style={{ color: "#FFA310" }}>M</span>OVIE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link>
                اپلیکیشن <FaAndroid color="#30DC80" size="25px" />
              </Nav.Link>
              <Nav.Link>
                هنرمندان <IoPerson color="#FFA310" size="25px" />
              </Nav.Link>
              <Nav.Link>
                دانلود فیلم <MdOutlineLocalMovies color="#FFA310" size="25px" />
              </Nav.Link>
              <Nav.Link>
                دانلود سریال <FaTv color="#FFA310" size="25px" />
              </Nav.Link>
              <Nav.Link>
                خانه <IoHomeOutline color="#FFA310" size="25px" />
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="flat">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
