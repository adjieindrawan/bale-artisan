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
          <Col lg={{ span: 8, offset: 2 }} xs={{ span: 10, offset: 1 }}>
            <img src={logo} alt="" style={{ width: "150px" }} />
            <img
              src="https://via.placeholder.com/500x200"
              className="d-block m-auto img-fluid d-none d-md-block"
              alt=""
            />
            <img
              src="https://via.placeholder.com/250x300"
              className="d-block m-auto img-fluid rounded d-md-none"
              alt=""
            />
            <h2 className="fw-bold mt-5">
              Duduk tenang, Makan kenyang, Hati senang!
            </h2>
            <p className="my-3">
              Bale Artisan ada yang baru nih! <b>Healthy Food</b> &amp;{" "}
              <b>Catering</b>
            </p>
            <Row className="mt-5">
              <Col
                // sm={{ span: 10, offset: 1 }}
                lg={6}
                className="my-3 parent-cn"
              >
                <Link to="/healthy-food" className="t-decor-0">
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
              <Col
                // sm={{ span: 10, offset: 1 }}
                lg={6}
                className="my-3 parent-cn"
              >
                <Link to="/catering" className="t-decor-0">
                  <Card
                    className="card-nav"
                    style={{
                      background:
                        "url(https://i0.wp.com/bisniskulinerku.com/wp-content/uploads/2021/08/nasi-box.jpg?fit=1024%2C576&ssl=1)",
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
