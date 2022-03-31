import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

function NavbarBale(props) {
  return (
    <>
      <Navbar className={props.bg + " nav fixed-top"} expand="lg">
        <Container>
          <Navbar.Text className="fw-bold text-white">Healthy Food</Navbar.Text>
          <Navbar.Toggle aria-controls="nav-bale" />
          <Navbar.Collapse id="nav-bale">
            <Nav className="m-auto">
              <Nav.Link href="#home">Intro</Nav.Link>
              <Nav.Link href="#link">Menu</Nav.Link>
              <Nav.Link href="#link">Layanan</Nav.Link>
              <Nav.Link href="#link">Estimasi</Nav.Link>
              <Nav.Link href="#link">Keunggulan</Nav.Link>
            </Nav>
            <Nav className="mr-auto">
              <Button className={props.btn + " btn-alt px-4 py-2"} size="sm">
                Tanya<b>Bale</b>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarBale;
