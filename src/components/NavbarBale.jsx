import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

function NavbarBale() {
  return (
    <>
      <Navbar className="nav-green" expand="lg">
        <Container>
          <Navbar.Text className="fw-bold text-white">Healty Food</Navbar.Text>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="#home">Intro</Nav.Link>
              <Nav.Link href="#link">Menu</Nav.Link>
              <Nav.Link href="#link">Layanan</Nav.Link>
              <Nav.Link href="#link">Estimasi</Nav.Link>
              <Nav.Link href="#link">Keunggulan</Nav.Link>
            </Nav>
            <Nav className="mr-auto">
              <Button className="btn-yellow px-4 py-2" size="sm">
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
