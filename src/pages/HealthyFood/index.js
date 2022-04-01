import React from "react";
import {
  Col,
  Container,
  Row,
  Button,
  Card,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import NavbarBale from "../../components/NavbarBale";
import FooterBale from "../../components/FooterBale";

// images
import logoHalf from "../../assets/images/logo-half.png";
import iconDate from "../../assets/images/icon-date.svg";
import iconCal from "../../assets/images/icon-cal.svg";
import iconMin from "../../assets/images/icon-min.svg";
import iconPlus from "../../assets/images/icon-plus.svg";

// static
import { _menuHealthy } from "../../static/menu";
import { _Benefits, _Package } from "../../static/package";
import ModalCal from "../../components/ModalCal";
import ModalMenu from "../../components/ModalMenu";

function HealthyFood() {
  return (
    <>
      <NavbarBale bg="bg-green" title="Healthy Food" />
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
              Bale Artisan ubah makanan sehat
              <br />
              jadi nikmat!
            </h2>
            <p className="mt-4">
              Buat kamu yang sedang diet atau suka menu sehat atau yang
              pensaran, Bale Artisan bisa buat menu sehat tapi tetep nikmat!
            </p>
            <Button className="btn-yellow btn-alt px-5 py-2 mt-4">
              Tanya<b>Bale</b>
            </Button>
            <h5 className="fw-bold mt-4">
              10 menu sehat yang akan dipilih buat kamu
            </h5>
            <Row className="justify-content-md-center">
              {_menuHealthy.slice(0, 5).map((data, i) => (
                <Col md={2} className="my-2" key={i}>
                  <ModalMenu
                    data={{ ...data }}
                    variant="secondary"
                    btn="btn-green"
                  />
                </Col>
              ))}
            </Row>
            <Row className="justify-content-md-center mt-3">
              {_menuHealthy.slice(5, 10).map((data, i) => (
                <Col md={2} className="my-2" key={i}>
                  <ModalMenu
                    data={{ ...data }}
                    variant="secondary"
                    btn="btn-green"
                  />
                </Col>
              ))}
            </Row>
            <h5 className="fw-bold mt-5">
              Banyak layanan yang sesuai kebutuhan kamu
            </h5>
            <Row className="mt-3 text-start">
              {_Package.map((data, i) => (
                <Col md={4} key={i} className="my-2">
                  <Card className="h-100">
                    <Card.Body>
                      <img src={iconDate} alt="" className="ms--2" />
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
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      <h5 className="fw-bold mt-5 text-center mb-4">
        Coba estimasikan pengeluaran Healthy Food kamu
      </h5>
      <section className="bg-green py-5">
        <Container>
          <Row>
            <Col md={{ span: 10, offset: 1 }}>
              <Card className="p-5">
                <Card.Body>
                  <img src={iconCal} alt="" className="ms--2" />
                  <Row>
                    <Col md={8} className="my-3">
                      <h4 className="fw-bold">Paket Langganan</h4>
                      <Row className="my-4">
                        <Col className="align-self-center d-grid">
                          <Button className="btn-yellow-outline active px-5 py-2">
                            Daily
                          </Button>
                        </Col>
                        <Col className="align-self-center block-text">
                          Paket Daily silahkan pilih 1 - 3 hari
                        </Col>
                      </Row>
                      <Row className="my-4">
                        <Col className="align-self-center d-grid">
                          <Button className="btn-yellow-outline px-5 py-2">
                            Weekly
                          </Button>
                        </Col>
                        <Col className="align-self-center block-text">
                          Paket Weekly silahkan pilih 4 - 7 hari
                        </Col>
                      </Row>
                      <Row className="my-4">
                        <Col className="align-self-center d-grid">
                          <Button className="btn-yellow-outline px-5 py-2">
                            Monthly
                          </Button>
                        </Col>
                        <Col className="align-self-center block-text">
                          Paket Monthly silahkan pilih 16 - 30 hari
                        </Col>
                      </Row>
                    </Col>
                    <Col md={{ span: 3, offset: 1 }} className="my-3">
                      <div>
                        <h4 className="fw-bold">Jumlah Hari</h4>
                        <InputGroup className="mb-3 ms--2 mt-3">
                          <img src={iconMin} alt="" className="pointer" />
                          <FormControl
                            placeholder="1 - 3"
                            className="form-cstm m-2"
                            disabled
                          />
                          <span className="txt-form">Hari</span>
                          <img src={iconPlus} alt="" className="pointer" />
                        </InputGroup>
                      </div>
                      <div className="mt-4">
                        <h4 className="fw-bold">Jumlah Paket</h4>
                        <InputGroup className="mb-3 ms--2 mt-3">
                          <img src={iconMin} alt="" className="pointer" />
                          <FormControl
                            placeholder="0"
                            className="form-cstm m-2"
                            disabled
                          />
                          <span className="txt-form">Paket</span>
                          <img src={iconPlus} alt="" className="pointer" />
                        </InputGroup>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col md={{ span: 3, offset: 9 }} className="d-grid">
                      <ModalCal
                        variant="secondary"
                        bg="bg-green"
                        btn="btn-yellow"
                        tc="text-secondary"
                      />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <Container className="py-5">
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <h5 className="fw-bold mt-5 text-center mb-4">
              Ada beberapa keunggulan yang kamu dapat dari Bale Artisan
            </h5>
            <Row className="mt-3 text-start">
              {_Benefits.map((data, i) => (
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
              <Button className="btn-yellow btn-alt px-5 py-2 mt-4">
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

export default HealthyFood;
