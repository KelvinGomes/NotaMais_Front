import React from "react";

// reactstrap components
import {
  Card, CardHeader, CardBody, Row, Col, Form, FormGroup, Input, Button, CardFooter
}
  from "reactstrap";


class Adicionar_Pedido extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Card>
            <CardHeader style={{
              backgroundColor: "rgb(58, 132, 177)", borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px", textAlign: "center"
            }}>
              <h6>Para gerar seu pedido preencha o questionário</h6>
            </CardHeader>
            <CardBody>
              <Form>
                <Row>
                  <Col className="pr-1" md="4">
                    <p>Qual o grau de instrução necessário?</p>
                    <FormGroup>
                      <Input type="select" name="select" id="exampleSelect">
                        <option>Todos</option>
                        <option>Ensino Médio</option>
                        <option>Técnico</option>
                        <option>Encino Superior</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col className="pr-1" md="3">
                    <p>Em qual área se enquadra?</p>
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
                  <Col className="pr-1" md="2">
                    <p>Para quando?</p>
                    <FormGroup>
                      <Input
                        type="date"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pr-1" md="3">
                    <p>Qual o assunto da atividade?</p>
                    <FormGroup>
                      <Input
                        type="texto"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="12">
                    <p>Descrição</p>
                    <FormGroup>
                      <Input
                        type="textarea"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Button style={{ backgroundColor: " rgb(58, 132, 177)" }} className="update ml-auto mr-auto" color="primary">buscar</Button>{' '}
                </Row>
              </Form>
            </CardBody>
            <CardFooter>

            </CardFooter>
          </Card>
        </div>
      </>
    );
  }
}

export default Adicionar_Pedido;
