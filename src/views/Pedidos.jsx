import React from "react";

// reactstrap components
import {
  Card, CardHeader, CardBody, Row, Col, FormGroup, Input, Button, CardGroup, CardFooter
}
  from "reactstrap";


class Pedidos extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <div className="div_filtros">
            <Row>
              <Col md="12">
                <Card>
                  <CardBody>
                    <Row style={{ margin: "4px" }}>
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
                            <option>Todos</option>
                            <option>Ciências Exatas</option>
                            <option>Ciências Humanas</option>
                            <option>Ciencias Biológicas</option>
                            <option>Linguagens e Códigos</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col className="pr-1" md="1">
                        <label>Grau de instrução:</label>
                      </Col>
                      <Col className="pr-1" md="3">
                        <FormGroup>
                          <Input type="select" name="select" id="exampleSelect">
                            <option>Todos</option>
                            <option>Ensino Médio</option>
                            <option>Técnico</option>
                            <option>Encino Superior</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row xs="4" style={{ margin: "4px" }}>
                      <Col className="pr-1" md="1">
                        <label>Nº pedido:</label>
                      </Col>
                      <Col className="pr-1" md="3">
                        <FormGroup>
                          <Input
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pr-1" md="1">
                        <label>Status:</label>
                      </Col>
                      <Col className="pr-1" md="3">
                        <FormGroup>
                          <Input type="select" name="select" id="exampleSelect">
                            <option>Todos</option>
                            <option>Requisitado</option>
                            <option>Em andamento</option>
                            <option>Concluído</option>
                            <option>Cancelado</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col className="pr-1" md="4" style={{ textAlign: "center" }}>
                        <Button className="btn_padrao" color="primary" size="sm">buscar</Button>{' '}
                        <Button className="btn_padrao" color="primary" size="sm">Limpar</Button>{' '}
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
          <div className="div_solicitar_pedido">
            <Row>
              <i className="nc-icon nc-simple-add" />
              <a href = "/admin/adicionar_pedido">Novo pedido</a>
            </Row>
          </div>
          <p>Resultados:</p>
          <div className="div_resultado_pedidos">
            <Row>
              <Col md="12">
                <Card>
                  <CardBody className="card_status_em_andamento">
                    <Row>
                      <Col className="pr-1" md="12"><h6>0001 - Atividades de cálculo</h6></Col>
                    </Row>
                  </CardBody>
                  <CardFooter style={{ textAlign: "center", margin: "0px" }}>
                    <Row>
                      <Col className="pr-1" md="3">
                        <h7 style={{ fontWeight: "bold" }}>Requisitante: </h7>
                        <h7>Kelvin Gomes</h7>
                      </Col>
                      <Col className="pr-1" md="3">
                        <h7 style={{ fontWeight: "bold" }}>Área : </h7>
                        <h7>Ciências Exatas</h7>
                      </Col>
                      <Col className="pr-1" md="3">
                        <h7 style={{ fontWeight: "bold" }}>Status: </h7>
                        <h7>Em andamento</h7>
                      </Col>
                    </Row>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <Card>
                  <CardBody className="card_status_requisitado">
                    <Row>
                      <Col className="pr-1" md="12"><h6>0001 - Atividades de cálculo</h6></Col>
                    </Row>
                  </CardBody>
                  <CardFooter style={{ textAlign: "center", margin: "0px" }}>
                    <Row>
                      <Col className="pr-1" md="3">
                        <h7 style={{ fontWeight: "bold" }}>Requisitante: </h7>
                        <h7>Kelvin Gomes</h7>
                      </Col>
                      <Col className="pr-1" md="3">
                        <h7 style={{ fontWeight: "bold" }}>Área : </h7>
                        <h7>Ciências Exatas</h7>
                      </Col>
                      <Col className="pr-1" md="3">
                        <h7 style={{ fontWeight: "bold" }}>Status: </h7>
                        <h7>Em andamento</h7>
                      </Col>
                      <Col className="pr-1" md="3">
                        <p className="text-danger">3 dias restantes</p>
                      </Col>
                    </Row>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </>
    );
  }
}

export default Pedidos;
