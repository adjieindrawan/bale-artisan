import React from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";

// images
import logo from "../assets/images/logo.png";

function Homepage() {
  return (
    <>
      <Container>
        <Row className="text-center">
          <Col lg={{ span: 8, offset: 2 }}>
            <img src={logo} alt="" style={{ width: "150px" }} />
            <img
              src="https://via.placeholder.com/500x200"
              className="d-block m-auto img-fluid"
              alt=""
            />
            <h2 className="fw-bold mt-4">
              Duduk tenang, Makan kenyang,
              <br /> Hati senang!
            </h2>
            <p className="my-4">
              Bale Artisan ada yang baru nih! <b>Healthy Food</b> &amp;{" "}
              <b>Catering</b>
            </p>
            <Row className="mt-5">
              <Col md={6} className="my-2 parent-cn">
                <Card
                  className="card-nav"
                  style={{
                    background:
                      "url(https://whatsnewindonesia.com/jakarta/wp-content/uploads/sites/2/2018/09/3skinnyminnies-catering-1.jpg)",
                  }}
                >
                  <Card.Body>
                    <h3 className="fw-bold mb-0">Healthy Food</h3>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="my-2 parent-cn">
                <Card
                  className="card-nav"
                  style={{
                    background:
                      "url(https://whatsnewindonesia.com/jakarta/wp-content/uploads/sites/2/2020/04/Pokinometry-768x768.jpg)",
                  }}
                >
                  <Card.Body>
                    <h3 className="fw-bold mb-0">Catering</h3>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <h4 className="mt-5">Kamu bisa tanya semuanya pakai TanyaBale!</h4>
            <Button className="btn-yellow px-5 py-2 mt-4">
              Tanya<b>Bale</b>
            </Button>
          </Col>
        </Row>
      </Container>
      <footer className="text-center text-muted mt-5 mb-3">
        <small>Copyright Bale Artisan 2022</small>
      </footer>
    </>
  );
}

export default Homepage;
