import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Homepage() {
  // Declare a new state variable, which we'll call "count"

  return (
    <>
      <Row>
        <Col lg={{ span: 8, offset: 2 }}>
          <Container className="text-center">
            <h1 className="fw-bold">
              Duduk tenang, Makan kenyang,
              <br /> Hati senang!
            </h1>
            <p>
              Bale Artisan ada yang baru nih! <b>Healthy Food</b> &amp;{" "}
              <b>Catering</b>
            </p>
          </Container>
        </Col>
      </Row>
    </>
  );
}

export default Homepage;
