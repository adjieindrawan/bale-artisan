import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Col,
  Container,
  Row,
  Button,
  Card,
  InputGroup,
  FormControl,
  Form,
} from "react-bootstrap";
import Slider from "react-slick";
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

//data
import packageList from "./data/package.data.json";

import util from "../../helper/util";

function HealthyFood() {
  const [dayAmount, setDayAmount] = useState(null);
  const [packageAmount, setPackageAmount] = useState(null);
  const [selected, setSelected] = useState(
    packageList.find((data) => data.name === "Daily")
  );

  const settings = {
    dots: false,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    dotsClass: "slick-dots dot-cstm",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
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

  return (
    <>
      <NavbarBale bg="bg-green" title="Healthy Food" />
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
                    Bale Artisan ubah makanan sehat jadi nikmat!
                  </h2>
                  <p className="mt-3">
                    Buat kamu yang sedang diet atau suka menu sehat atau yang
                    pensaran, Bale Artisan bisa buat menu sehat tapi tetep
                    nikmat!
                  </p>
                </Col>
              </Row>
              <Button className="btn-yellow btn-alt px-5 py-2 mt-4">
                Tanya<b>Bale</b>
              </Button>
            </section>

            <section className="py-md-5 pt-0" id="menu">
              <h5 className="fw-bold my-4">
                10 menu sehat yang akan dipilih buat kamu
              </h5>
              <Row className="justify-content-center d-md-none">
                {_menuHealthy.map((data, i) => (
                  <Col xs={6} className="my-2" key={i}>
                    <ModalMenu
                      data={{ ...data }}
                      variant="secondary"
                      btn="btn-green"
                    />
                  </Col>
                ))}
              </Row>
              <div className="d-none d-md-block">
                <Row className="justify-content-center">
                  {_menuHealthy.slice(0, 5).map((data, i) => (
                    <Col md={2} xs={6} className="my-2" key={i}>
                      <ModalMenu
                        data={{ ...data }}
                        variant="secondary"
                        btn="btn-green"
                      />
                    </Col>
                  ))}
                </Row>
                <Row className="justify-content-center mt-3">
                  {_menuHealthy.slice(5, 10).map((data, i) => (
                    <Col md={2} xs={6} className="my-2" key={i}>
                      <ModalMenu
                        data={{ ...data }}
                        variant="secondary"
                        btn="btn-green"
                      />
                    </Col>
                  ))}
                </Row>
              </div>
            </section>

            <section className="py-5" id="layanan">
              <h5 className="fw-bold mt-4">
                Banyak layanan yang sesuai kebutuhan kamu
              </h5>

              <Slider {...settings} className="mt-5">
                {_Package.map((data, i) => (
                  <Card key={i} className="border-1">
                    <Card.Body className="package-card">
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
                ))}
              </Slider>
            </section>
          </Col>
        </Row>
      </Container>
      <section className="py-5" id="estimasi">
        <h5 className="fw-bold my-4 text-center">
          Coba estimasikan pengeluaran Healthy Food kamu
        </h5>
        <div className="bg-green py-5">
          <Container>
            <Row>
              <Col md={{ span: 10, offset: 1 }}>
                <Card className="p-3 p-lg-5">
                  <Card.Body>
                    <img src={iconCal} alt="" className="ms--2" />
                    <Row>
                      <Col md={8} className="my-3">
                        <h4 className="fw-bold">Paket Langganan</h4>
                        {packageList.map((data, index) => (
                          <Row className="my-4" key={index}>
                            <Col
                              md={6}
                              xs={12}
                              className="align-self-center d-grid"
                            >
                              <Button
                                className="btn-yellow-outline"
                                active={selected.name === data.name}
                                onClick={() => {
                                  setSelected(data);
                                  setDayAmount(data.minDay);
                                }}
                              >
                                {data.name}
                              </Button>
                            </Col>
                            <Col
                              md={6}
                              xs={12}
                              className="align-self-center block-text"
                            >
                              Paket {data.name} silahkan pilih {data.minDay} -{" "}
                              {data.maxDay} hari
                            </Col>
                          </Row>
                        ))}
                      </Col>
                      <Col md={{ span: 3, offset: 1 }} className="my-3">
                        <div>
                          <h4 className="fw-bold">Jumlah Hari</h4>
                          <InputGroup className="mb-3 ms--2 mt-3">
                            <img
                              src={iconMin}
                              alt=""
                              className="pointer"
                              onClick={() => setDayAmount(dayAmount - 1)}
                            />
                            <FormControl
                              placeholder={`${selected.minDay} - ${selected.maxDay}`}
                              className="form-cstm m-2"
                              value={dayAmount}
                              onChange={(e) =>
                                setDayAmount(util.number(e.target.value))
                              }
                              isInvalid={
                                dayAmount !== null &&
                                (dayAmount < selected.minDay ||
                                  dayAmount > selected.maxDay)
                              }
                            />
                            <span className="txt-form">Hari</span>
                            <img
                              src={iconPlus}
                              alt=""
                              className="pointer"
                              onClick={() => setDayAmount(dayAmount + 1)}
                            />
                            <Form.Control.Feedback type="invalid">
                              {dayAmount > selected.maxDay
                                ? `Maks. ${selected.maxDay} hari, kurangi jumlah hari!`
                                : `Min. ${selected.minDay} hari, tambahkan jumlah hari!`}
                            </Form.Control.Feedback>
                          </InputGroup>
                        </div>
                        <div className="mt-4">
                          <h4 className="fw-bold">Jumlah Paket</h4>
                          <InputGroup className="mb-3 ms--2 mt-3">
                            <img
                              src={iconMin}
                              alt=""
                              className="pointer"
                              onClick={() =>
                                setPackageAmount(packageAmount - 1)
                              }
                            />
                            <FormControl
                              placeholder="0"
                              className="form-cstm m-2"
                              value={packageAmount}
                              onChange={(e) =>
                                setPackageAmount(util.number(e.target.value))
                              }
                              isInvalid={
                                packageAmount !== null && packageAmount < 1
                              }
                            />
                            <span className="txt-form">Paket</span>
                            <img
                              src={iconPlus}
                              alt=""
                              className="pointer"
                              onClick={() =>
                                setPackageAmount(packageAmount + 1)
                              }
                            />
                            <Form.Control.Feedback type="invalid">
                              Min. 1 paket, tambahkan jumlah paket!
                            </Form.Control.Feedback>
                          </InputGroup>
                        </div>
                      </Col>
                    </Row>
                    <Row className="mt-4">
                      <Col md={{ span: 3, offset: 9 }} className="d-grid">
                        <ModalCal
                          disabled={
                            dayAmount < selected.minDay ||
                            dayAmount > selected.maxDay ||
                            packageAmount < 1
                          }
                          variant="secondary"
                          bg="bg-green"
                          btn="btn-yellow"
                          tc="text-secondary"
                          totalPrice={parseFloat(
                            selected.price * dayAmount * packageAmount
                          )}
                          packageName={selected.name}
                          dayAmount={dayAmount}
                          packageAmount={packageAmount}
                        />
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section className="py-5" id="keunggulan">
        <Container>
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <h5 className="fw-bold mt-5 text-center mb-4">
                Ada beberapa keunggulan yang kamu dapat dari Bale Artisan
              </h5>
              <Row className="mt-3 text-start">
                {_Benefits.map((data, i) => (
                  <Col md={4} key={i} className="my-3">
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
                <Button className="btn-yellow btn-alt px-5 py-2 mt-4">
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

export default HealthyFood;
