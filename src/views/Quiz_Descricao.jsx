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
  Col,
  CardText
} from "reactstrap";

class Quiz_Descricao extends React.Component {
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
              <Row>
                <Card className="card_user">
                  <CardHeader>
                    <CardTitle style={{textAlign: "center", marginTop:"7%", fontWeight:"bold"}} tag="h5">Qual é seu perfil como aluno?</CardTitle>
                  </CardHeader>
                  <CardBody>

                    <Row>

                      <Col className = "definicao_perfil_desc">
                        <CardText>
                          Esse quizz tem a finalidade de traçar seu perfil como aluno 
                          para que o prestador consiga realizar seu trabalho de forma mais precisa.
                        </CardText>
                        <CardText>
                          Por favor responda as perguntas seguintes de forma sincera.
                        </CardText>
                        <CardText>
                          As informações coletadas poderão 
                          ser acessadas a qualquer momento, mas não poderão ser refeitas, 
                          por isso preste bastante atenção e divirta-se!
                        </CardText>
                      </Col>

                

                    </Row>
                    <Row>
                      <Col className="btn_coluna">
                        <Button className="btn_iniciar_quiz"><a href="/admin/not_found" style={{textDecoration:"none", color:"white"}}>Iniciar</a></Button>{''}
                      </Col>
                      
                    </Row>
                    
                  </CardBody>
                </Card>
              </Row>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Quiz_Descricao;
