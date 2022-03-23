import React from "react";
import { Col, Container, Row, Button, Card } from "react-bootstrap";
import NavbarBale from "../../components/NavbarBale";

// images
import logoHalf from "../../assets/images/logo-half.png";
import { _menuHealthy } from "../../static/menu";

function HealthyFood() {
  return (
    <>
      <NavbarBale />
      <Container className="text-center">
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            <img src={logoHalf} alt="Bale Artisan" className="logo" />
            <img
              src="https://via.placeholder.com/1040x480"
              alt=""
              className="img-fluid"
            />
            <h2 className="fw-bold mt-4">
              Bale Artisan ubah makanan sehat
              <br />
              jadi nikmat!
            </h2>
            <p className="mt-4">
              Buat kamu yang sedang diet atau suka menu sehat atau yang
              pensaran, Bale Artisan bisa buat menu sehat tapi tetep nikmat!
            </p>
            <Button className="btn-yellow px-5 py-2 mt-4">
              Tanya<b>Bale</b>
            </Button>
            <h5 className="mt-4">10 menu sehat yang akan dipilih buat kamu</h5>
            <Row className="justify-content-md-center">
              {_menuHealthy.slice(0, 5).map((data, i) => (
                <Col md={2} className="my-2" key={i}>
                  <Card className="menu-sm h-100">
                    <Card.Img src={data.img} />
                    <Card.Body className="menu-title">{data.title}</Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            <Row className="justify-content-md-center mt-3">
              {_menuHealthy.slice(5, 10).map((data, i) => (
                <Col md={2} className="my-2" key={i}>
                  <Card className="menu-sm h-100">
                    <Card.Img src={data.img} />
                    <Card.Body className="menu-title">{data.title}</Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            <h5 className="mt-4">Banyak layanan yang sesuai kebutuhan kamu</h5>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HealthyFood;
