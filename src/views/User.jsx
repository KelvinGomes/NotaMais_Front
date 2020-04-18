import React from "react";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardLink,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

class User extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="4" style={{ marginBottom: "30px" }}>
              <Card style={{ height: "100%", maxHeight: "615px" }} className="card-user">
                <div className="image">
                  <img
                    alt="..."
                    src={require("assets/img/damir-bosnjak.jpg")}
                  />
                </div>
                <CardBody>
                  <div className="author">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar border-gray"
                        src={require("assets/img/mike.jpg")}
                      />
                      <h5 className="title">Chet Faker</h5>
                    </a>
                    <p className="description">@chetfaker</p>
                  </div>
                  <p style={{ height: "100%", maxHeight: "500px" }} className="description text-center">
                    "Apaixonado por disceminar conhecimento"<br />
                  </p>
                </CardBody>
                <CardFooter style={{ backgroundColor: "rgb(58, 132, 177)", height: "80px", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px" }}>
                  <div style={{ textAlign: "center", marginTop: "30px" }}>
                    <CardLink href="">Definir Perfil Estudantil</CardLink>
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col md="8">
              <Card className="card-user">
                <CardHeader>
                  <CardTitle tag="h5">Editar Perfil</CardTitle>
                </CardHeader>
                <CardBody style = {{marginRight: "10px"}}>
                  <Form >
                    <Row>
                      <Col className="pr-1" md="12">
                        <FormGroup>
                          <label>Nome</label>
                          <Input
                            placeholder="Nome"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>Apelido</label>
                          <Input
                            placeholder="Apelido"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>Telefone</label>
                          <Input
                            placeholder="telefone"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pr-1" md="12">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <Input placeholder="Email" type="email" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>Senha</label>
                          <Input
                            placeholder="Senha"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>Confirmar Senha</label>
                          <Input
                            placeholder="Confirmar Senha"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>Grau de intrução</label>
                          <br />
                          <select name="dropdown" style={{ height: "40px", width: "100%", borderRadius: "5px" }} >
                            <option value="" disabled selected>Grau de intrução</option>
                            <option value="Java">Java</option>
                            <option value="Discrete Mathematics">Discrete Mathematics</option>
                          </select>
                        </FormGroup>
                      </Col>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>Área de Interesse</label>
                          <br />
                          <select name="dropdown" style={{ height: "40px", width: "100%", borderRadius: "5px" }}>
                            <option value="" disabled selected>Área de Interesse</option>
                            <option value="Java">Java</option>
                            <option value="Discrete Mathematics">Discrete Mathematics</option>
                          </select>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <div className="update ml-auto mr-auto">
                        <Button
                          className="btn_registre"
                          color="primary"
                          type="submit"
                        >
                          Salvar
                        </Button>
                      </div>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default User;
