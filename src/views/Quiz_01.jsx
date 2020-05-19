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
  Label,
  Input,
  Row,
  Col,
  CardText
} from "reactstrap";

class Quiz_01 extends React.Component {
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
                    <CardLink href="/admin/perfil">Voltar ao seu Perfil </CardLink>
                  </div>
                </CardFooter>
              </Card>
            </Col>


            <Col md="8">
              <Card className="card-user">
                <CardHeader>
                  <CardTitle tag="h5">Questão 01</CardTitle>
                </CardHeader>
                <CardBody style={{ marginRight: "10px" }}>

                  <Row>

                    <Col className = "definicao_perfil_desc">
                          <CardText>
                            Você é o aluno que senta em qual lugar da sala?
                          </CardText>

                          <Col>
                            <img
                              alt="..."
                              src={require("assets/img/quiz01.png")}
                            />
                          </Col>

                        
                          <div>
                              <Form>
                                <FormGroup check>
                                  <Label check>
                                    <Input type="radio" />{'Frente'}
                                    
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                  <Label check>
                                    <Input type="radio" />{' '}
                                    Meio
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                  <Label check>
                                    <Input type="radio" />{' '}
                                    Fundo
                                    </Label>
                                </FormGroup>

                              </Form>
                          </div>
                     
                    </Col>

                    <Col>
                    </Col>

                  </Row>
                  <Row>
                    <Col md="12">
                      <Button className="btn_iniciar_quiz"> Próximo </Button>
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

export default Quiz_01;