import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import AnchorLink from "react-anchor-link-smooth-scroll";

function NavbarBale(props) {
  return (
    <>
      <Navbar className={props.bg + " nav fixed-top"} expand="lg">
        <Container>
          <Navbar.Text className="fw-bold text-white">
            {props.title}
          </Navbar.Text>
          <Navbar.Toggle aria-controls="nav-bale" />
          <Navbar.Collapse id="nav-bale">
            <Nav className="m-auto">
              <AnchorLink className="nav-link" href="#intro">
                Intro
              </AnchorLink>
              <AnchorLink className="nav-link" href="#menu">
                Menu
              </AnchorLink>
              <AnchorLink className="nav-link" href="#layanan">
                Layanan
              </AnchorLink>
              <AnchorLink className="nav-link" href="#estimasi">
                Estimasi
              </AnchorLink>
              <AnchorLink className="nav-link" href="#keunggulan">
                Keunggulan
              </AnchorLink>
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
