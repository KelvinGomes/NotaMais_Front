import React from "react";

// reactstrap components
import {
  Card, CardHeader, CardBody, Row, Col, FormGroup, Input, Button
}
  from "reactstrap";


class Pedidos extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardBody>
                  <Row style={{ margin: "4px"}}>
                    <Col className="pr-1" md="1">
                      <label>Data:</label>
                    </Col>
                    <Col className="pr-1" md="3">
                      <FormGroup>
                        <Input
                          placeholder="Telefone"
                          type="date"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="1">
                      <label>Aréa:</label>
                    </Col>
                    <Col className="pr-1" md="3">
                      <FormGroup>
                        <Input type="select" name="select" id="exampleSelect">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="1">
                      <label>Grau de instrução:</label>
                    </Col>
                    <Col className="pr-1" md="3">
                      <FormGroup>
                        <Input type="select" name="select" id="exampleSelect">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row xs="4" style={{ margin: "4px"}}>
                    <Col className="pr-1" md="1">
                      <label>Nº pedido:</label>
                    </Col>
                    <Col className="pr-1" md="3">
                      <FormGroup>
                        <Input type="select" name="select" id="exampleSelect">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="1">
                      <label>Status:</label>
                    </Col>
                    <Col className="pr-1" md="3">
                      <FormGroup>
                        <Input type="select" name="select" id="exampleSelect">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="2">
                      <Button style = {{width: "140px"}} color="primary" size="sm">buscar</Button>{' '}
                    </Col>
                    <Col className="pr-1" md="2">
                      <Button style = {{width: "140px"}}  color="danger" size="sm">Limpar</Button>{' '}
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Pedidos;
