import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row, Button, Card, Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";

import NavbarBale from "../../components/NavbarBale";
import FooterBale from "../../components/FooterBale";
import SubCal from "./components/SubCal";
import CustomCal from "./components/CustomCal";

// images
import logoHalf from "../../assets/images/logo-half.png";

// static
import { _menuHealthy } from "../../static/menu";
import { _BenefitsY, _PackageCatering } from "../../static/package";
import ModalMenu from "../../components/ModalMenu";

const settings = {
  dots: false,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  speed: 500,
  dotsClass: "slick-dots dot-cstm",
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
        infinite: false,
        centerPadding: "20px",
      },
    },
  ],
};

function Catering() {
  return (
    <>
      <NavbarBale bg="bg-yellow" btn="btn-green" title="Catering" />
      <Container className="text-center mt-5">
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            <section id="intro" className="py-5">
              <Link to="/">
                <img src={logoHalf} alt="" style={{ width: "150px" }} />
              </Link>
              <img
                src="https://via.placeholder.com/1040x480"
                alt=""
                className="img-fluid rounded"
              />
              <Row>
                <Col md={{ span: 8, offset: 2 }}>
                  <h2 className="fw-bold mt-5">
                    Bale Artisan bikin menu makan lebih menyenangkan!
                  </h2>
                  <p className="mt-3">
                    Buat kamu yang pengen menu makannya selalu enak, Bale
                    Artisan bisa bikin menu makan kamu tidak pernah
                    mengecewakan!
                  </p>
                </Col>
              </Row>
              <Button
                variant="secondary"
                className="btn-green btn-alt px-5 py-2 mt-4"
              >
                Tanya<b>Bale</b>
              </Button>
            </section>

            <section id="menu" className="py-5">
              <h5 className="my-4 fw-bold">
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
                      <Row className="justify-content-center">
                        {_menuHealthy.slice(0, 5).map((data, i) => (
                          <Col xs={6} md={2} className="my-2" key={i}>
                            <ModalMenu
                              data={{ ...data }}
                              variant="secondary"
                              btn="btn-green"
                            />
                          </Col>
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row className="justify-content-center">
                        {_menuHealthy.slice(5, 10).map((data, i) => (
                          <Col xs={6} md={2} className="my-2" key={i}>
                            <ModalMenu
                              data={{ ...data }}
                              variant="secondary"
                              btn="btn-green"
                            />
                          </Col>
                        ))}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Row>
              </Tab.Container>
            </section>

            <section id="layanan" className="py-5">
              <h5 className="fw-bold my-4">
                Banyak layanan yang sesuai kebutuhan kamu
              </h5>

              <Row className="d-none d-lg-block">
                <Col md={{ span: 8, offset: 2 }}>
                  <Row className="mt-3 text-start">
                    {_PackageCatering.map((data, i) => (
                      <Col md={6} key={i} className="my-2">
                        <Card className="h-100">
                          <Card.Body>
                            <img src={data.img} alt="" className="ms--2" />
                            <h5 className="fw-bold fw-bold mt-1">
                              {data.title}
                            </h5>
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

              <Slider {...settings} className="mt-5 d-lg-none">
                {_PackageCatering.map((data, i) => (
                  <Card key={i} className="border-1">
                    <Card.Body className="package-card">
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
                        <Button className="btn-yellow btn-alt py-2">
                          Tanya<b>Bale</b>
                        </Button>
                      </div>
                    </Card.Footer>
                  </Card>
                ))}
              </Slider>
            </section>
          </Col>
        </Row>
      </Container>

      <section className="py-5" id="estimasi">
        <Tab.Container defaultActiveKey="first">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <h5 className="mt-5 text-center mb-3 fw-bold">
                  Coba estimasikan pengeluaran Healthy Food kamu
                </h5>
                <Nav
                  className="tab-menu mt-4 mt-lg-0"
                  fill
                  defaultActiveKey="first"
                >
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
      </section>

      <section id="keunggulan" className="py-5">
        <Container>
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <h5 className="fw-bold mt-5 text-center mb-4">
                Ada beberapa keunggulan yang kamu dapat dari Bale Artisan
              </h5>
              <Row className="mt-3 text-start">
                {_BenefitsY.map((data, i) => (
                  <Col md={4} key={i} className="my-2">
                    <Card className="h-100 border-1 mx-2 mx-md-0">
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
      </section>

      <FooterBale />
    </>
  );
}

export default Catering;
