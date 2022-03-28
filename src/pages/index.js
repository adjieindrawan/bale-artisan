import React from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
                <Link to="/healty-food" className="t-decor-0">
                  <Card
                    className="card-nav"
                    style={{
                      background:
                        "url(https://cdn.cnn.com/cnnnext/dam/assets/201222102438-healthyleadfactor-meals.jpg)",
                    }}
                  >
                    <Card.Body>
                      <h3 className="fw-bold mb-0 t-decor-0">Healthy Food</h3>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
              <Col md={6} className="my-2 parent-cn">
                <Link to="/catering" className="t-decor-0">
                  <Card
                    className="card-nav"
                    style={{
                      background:
                        "url(https://bisnisukm.com/uploads/2016/07/bisnis-katering-makanan-sehat-peminatnya-kian-meningkat-760x488.jpg)",
                    }}
                  >
                    <Card.Body>
                      <h3 className="fw-bold mb-0">Catering</h3>
                    </Card.Body>
                  </Card>
                </Link>
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
