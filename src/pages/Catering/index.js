import React from "react";
import { Col, Container, Row, Button, Card, Nav, Tab } from "react-bootstrap";
import NavbarBale from "../../components/NavbarBale";
import FooterBale from "../../components/FooterBale";
import SubCal from "./components/SubCal";
import CustomCal from "./components/CustomCal";

// images
import logoHalf from "../../assets/images/logo-half.png";

// static
import { _menuHealthy } from "../../static/menu";
import { _BenefitsY, _PackageCatering } from "../../static/package";

function Catering() {
  return (
    <>
      <NavbarBale bg="bg-yellow" btn="btn-green" title="Catering" />
      <Container className="text-center py-5">
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            <img src={logoHalf} alt="Bale Artisan" className="logo" />
            <img
              src="https://via.placeholder.com/1040x480"
              alt=""
              className="img-fluid"
            />
            <h2 className="fw-bold mt-4">
              Bale Artisan bikin menu makan lebih
              <br />
              menyenangkan!
            </h2>
            <p className="mt-4">
              Buat kamu yang sedang diet atau suka menu sehat atau yang
              pensaran, Bale Artisan bisa buat menu sehat tapi tetep nikmat!
            </p>
            <Button
              variant="secondary"
              className="btn-green btn-alt px-5 py-2 mt-4"
            >
              Tanya<b>Bale</b>
            </Button>
            <h5 className="mt-5 mb-3 fw-light">
              kamu bisa bebas pilih menu yang kamu suka
            </h5>

            <Tab.Container defaultActiveKey="first">
              <Row>
                <Col md={{ span: 6, offset: 3 }}>
                  <Nav className="tab-menu" fill defaultActiveKey="first">
                    <Nav.Item>
                      <Nav.Link eventKey="first" className="text-success">
                        Standart
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second" className="text-success">
                        Premium
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>

                <Tab.Content className="mt-3">
                  <Tab.Pane eventKey="first">
                    <Row className="justify-content-md-center">
                      {_menuHealthy.slice(0, 5).map((data, i) => (
                        <Col md={2} className="my-2" key={i}>
                          <Card className="menu-sm h-100">
                            <Card.Img src={data.img} />
                            <Card.Body className="menu-title">
                              {data.title}
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row className="justify-content-md-center">
                      {_menuHealthy.slice(5, 10).map((data, i) => (
                        <Col md={2} className="my-2" key={i}>
                          <Card className="menu-sm h-100">
                            <Card.Img src={data.img} />
                            <Card.Body className="menu-title">
                              {data.title}
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Row>
            </Tab.Container>

            <h5 className="fw-bold mt-5">
              Banyak layanan yang sesuai kebutuhan kamu
            </h5>
            <Row>
              <Col md={{ span: 8, offset: 2 }}>
                <Row className="mt-3 text-start">
                  {_PackageCatering.map((data, i) => (
                    <Col md={6} key={i} className="my-2">
                      <Card className="h-100">
                        <Card.Body>
                          <img src={data.img} alt="" className="ms--2" />
                          <h5 className="fw-bold fw-bold mt-1">{data.title}</h5>
                          <p className="mt-3">{data.desc}</p>
                          <ul className="list-package">
                            {data.point.map((data, i) => (
                              <li key={i}>{data}</li>
                            ))}
                          </ul>
                        </Card.Body>
                        <Card.Footer className="clean mb-3">
                          <div className="d-grid">
                            <Button
                              variant="secondary"
                              className="btn-green btn-alt py-2"
                            >
                              Tanya<b>Bale</b>
                            </Button>
                          </div>
                        </Card.Footer>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Tab.Container defaultActiveKey="first">
        <Container>
          <Row>
            <Col md={{ span: 4, offset: 4 }}>
              <h5 className="mt-5 text-center mb-4">
                Coba estimasikan pengeluaran Healthy Food kamu
              </h5>
              <Nav className="tab-menu" fill defaultActiveKey="first">
                <Nav.Item>
                  <Nav.Link eventKey="first" className="text-success">
                    Berlangganan
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" className="text-success">
                    Custom
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
        </Container>
        <section className="bg-yellow py-5 mt-3">
          <Container>
            <Row>
              <Col md={{ span: 10, offset: 1 }}>
                <Tab.Content className="mt-3">
                  <Tab.Pane eventKey="first">
                    <SubCal />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <CustomCal />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Container>
        </section>
      </Tab.Container>
      <Container className="py-5">
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <h5 className="fw-bold mt-5 text-center mb-4">
              Ada beberapa keunggulan yang kamu dapat dari Bale Artisan
            </h5>
            <Row className="mt-3 text-start">
              {_BenefitsY.map((data, i) => (
                <Col md={4} key={i} className="my-2">
                  <Card className="h-100">
                    <Card.Body>
                      <img src={data.img} alt="" className="ms--2" />
                      <h5 className="fw-bold fw-bold mt-1">{data.title}</h5>
                      <p className="mt-3">{data.desc}</p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            <div className="text-center">
              <h5 className="fw-bold mt-5 text-center mb-4">
                Kamu bisa tanya semuanya pakai TanyaBale!
              </h5>
              <Button
                variant="secondary"
                className="btn-green btn-alt px-5 py-2 mt-4"
              >
                Tanya<b>Bale</b>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <FooterBale />
    </>
  );
}

export default Catering;
