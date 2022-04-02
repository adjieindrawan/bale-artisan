import React, { useState } from "react";
import {
  Card,
  Row,
  Col,
  Button,
  InputGroup,
  FormControl,
  Form
} from "react-bootstrap";

// img
import iconCal from "../../../assets/images/icon-cal.svg";
import iconMin from "../../../assets/images/i-min-g.svg";
import iconPlus from "../../../assets/images/i-plus-g.svg";
import ModalCal from "../../../components/ModalCal";

// data
import customPackageList from "../data/custom.package.data.json";
import util from "../../../helper/util";

const CustomCal = () => {
  const [type, setType] = useState("Standart");
  const [amount, setAmount] = useState(1);
  const [selected, setSelected] = useState([]);
  const packageList = customPackageList.map((item, index) => ({
    ...item,
    key: index
  }));

  const onChangeSelected = (data) => {
    const checkSelected = selected.find((item) => item.key === data.key);
    if (checkSelected) {
      const newSelected = selected.filter((item) => item.key !== data.key);
      setSelected([...newSelected]);
    } else {
      setSelected([...selected, data]);
    }
  };

  const isChecked = (key) => {
    const checked = selected.find((item) => item.key === key);
    return checked;
  };

  const onChangeAmount = (value) => {
    const amount = util.number(value);
    if (amount >= 1) setAmount(amount);
  };

  return (
    <>
      <Card className="p-5">
        <Card.Body>
          <img src={iconCal} alt="" className="ms--2" />
          <Row>
            <Col md={4} className="my-3">
              <h5 className="fw-bold">Jenis Menu</h5>
              <div className="my-3">
                <Button
                  variant="secondary"
                  className="btn-green-outline"
                  active={type === "Standart"}
                  onClick={() => {
                    setType("Standart");
                    setSelected([]);
                  }}
                >
                  Standart
                </Button>
                <Button
                  variant="secondary"
                  className="btn-green-outline ms-2"
                  active={type === "Premium"}
                  onClick={() => {
                    setType("Premium");
                    setSelected([]);
                  }}
                >
                  Premium
                </Button>
              </div>
              <h5 className="fw-bold mt-4">Lauk Utama</h5>
              <Row className="my-3">
                {packageList.map(
                  (item, index) =>
                    item.type === type &&
                    item.category === "Lauk Utama" && (
                      <Col xs={6} key={index}>
                        <Form.Group className="mb-3">
                          <Form.Check
                            type="checkbox"
                            label={item.name}
                            checked={isChecked(item.key)}
                            onChange={(e) => onChangeSelected(item)}
                          />
                        </Form.Group>
                      </Col>
                    )
                )}
                <Col xs={12} className="block-text">
                  Sudah termasuk nasi
                </Col>
              </Row>
            </Col>
            <Col md={4} className="my-3">
              <h5 className="fw-bold">Lauk Pendamping</h5>
              <Row className="my-3">
                {packageList.map(
                  (item, index) =>
                    item.type === type &&
                    item.category === "Lauk Pendamping" && (
                      <Col xs={6} key={index}>
                        <Form.Group className="mb-3">
                          <Form.Check
                            type="checkbox"
                            label={item.name}
                            checked={isChecked(item.key)}
                            onChange={(e) => onChangeSelected(item)}
                          />
                        </Form.Group>
                      </Col>
                    )
                )}
              </Row>
              <h5 className="fw-bold mt-4">Tambahan</h5>
              <Row className="my-3">
                {packageList.map(
                  (item, index) =>
                    item.type === type &&
                    item.category === "Tambahan" && (
                      <Col xs={6} key={index}>
                        <Form.Group className="mb-3">
                          <Form.Check
                            type="checkbox"
                            label={item.name}
                            checked={isChecked(item.key)}
                            onChange={(e) => onChangeSelected(item)}
                          />
                        </Form.Group>
                      </Col>
                    )
                )}
                <Col xs={12} className="block-text">
                  Sudah termasuk nasi
                </Col>
              </Row>
            </Col>
            <Col md={4} className="my-3">
              <div>
                <h5 className="fw-bold">Jumlah Pesanan</h5>
                <InputGroup className="mb-3 ms--2 mt-3">
                  <img
                    src={iconMin}
                    alt=""
                    className="pointer"
                    onClick={() => onChangeAmount(amount - 1)}
                  />
                  <FormControl
                    placeholder="20 - 100"
                    className="form-cstm m-2"
                    min={1}
                    value={amount}
                    onChange={(e) => onChangeAmount(e.target.value)}
                  />
                  <img
                    src={iconPlus}
                    alt=""
                    className="pointer"
                    onClick={() => onChangeAmount(amount + 1)}
                  />
                </InputGroup>
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col md={{ span: 3, offset: 9 }} className="d-grid">
              <ModalCal
                variant="secondary"
                bg="bg-yellow"
                btn="btn-green"
                tc="text-primary"
                disabled={selected.length === 0}
                totalPrice={parseFloat(
                  selected.reduce((a, b) => a + b.price, 0) * amount
                )}
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default CustomCal;
