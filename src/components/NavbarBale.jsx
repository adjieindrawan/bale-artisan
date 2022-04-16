import React, { useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import AnchorLink from "react-anchor-link-smooth-scroll";

import { FiMenu, FiX } from "react-icons/fi";

// images
import logoWhite from "../assets/images/logo-bale-white.png";

function NavbarBale(props) {
  const [menuActive, setMenuState] = useState(false);
  return (
    <>
      <Navbar className={props.bg + " nav fixed-top mob-nav"} expand="lg">
        <div
          id="myNav"
          className={props.bg + ` overlay ${menuActive ? "w-100" : ""}`}
        >
          <FiX className="closebtn" onClick={() => setMenuState(!menuActive)} />

          <div className="overlay-content">
            <img src={logoWhite} alt="logo" />
            <AnchorLink
              offset={() => 75}
              onClick={() => setMenuState(!menuActive)}
              href="#intro"
            >
              Intro
            </AnchorLink>
            <AnchorLink
              offset={() => 75}
              onClick={() => setMenuState(!menuActive)}
              href="#menu"
            >
              Menu
            </AnchorLink>
            <AnchorLink
              offset={() => 75}
              onClick={() => setMenuState(!menuActive)}
              href="#layanan"
            >
              Layanan
            </AnchorLink>
            <AnchorLink
              offset={() => 75}
              onClick={() => setMenuState(!menuActive)}
              href="#estimasi"
            >
              Estimasi
            </AnchorLink>
            <AnchorLink
              offset={() => 75}
              onClick={() => setMenuState(!menuActive)}
              href="#keunggulan"
            >
              Keunggulan
            </AnchorLink>

            <Button size="lg" className={props.btn + " btn-alt px-5 py-2 mt-5"}>
              Tanya<b>Bale</b>
            </Button>
          </div>
        </div>
        <Container>
          <Navbar.Text className="fw-bold text-white">
            {props.title}
          </Navbar.Text>
          <FiMenu
            className="open-btn d-md-none"
            onClick={() => setMenuState(!menuActive)}
          />
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
