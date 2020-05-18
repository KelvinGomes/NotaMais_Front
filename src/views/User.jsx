import React from "react";
import axios from 'axios';
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

  constructor(props) {
    super(props);
    this.state = {
      user: {
      }
    };
  }

  async componentDidMount() {
    let token = await localStorage.getItem('token');
    axios.defaults.headers.common = { 'Authorization': `bearer ${token}` }
    await axios.get(`https://notamais-backend01.herokuapp.com/users`)
      .then(res => {
        let user = res.data.user;
        this.setState({ user: user});
        console.log(res.data.user);
      })
    
   /* let url = `https://nota-mais.herokuapp.com/api/usuario/${id}`;
    await fetch(url)
      .then((r) => r.json())
      .then((json) => {
        this.setState({ usuario: json });
        console.log(json);
      })*/
  }

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
                      <h5 className="title">{this.state.user.name}</h5>
                    </a>
                    <p className="description">@chetfaker</p>
                  </div>
                  <p style={{ height: "100%", maxHeight: "500px" }} className="description text-center">
                    "Apaixonado por disceminar conhecimento"<br />
                  </p>
                </CardBody>
                <CardFooter style={{ backgroundColor: "rgb(58, 132, 177)", height: "80px", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px" }}>
                  <div style={{ textAlign: "center", marginTop: "30px" }}>
                    <CardLink href="/admin/quiz_descricao">Definir Perfil Estudantil</CardLink>
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col md="8">
              <Card className="card-user">
                <CardHeader>
                  <CardTitle tag="h5">Editar Perfil</CardTitle>
                </CardHeader>
                <CardBody style={{ marginRight: "10px" }}>
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
                          <Input type="select" name="select" id="exampleSelect">
                            <option>Ensino médio</option>
                            <option>Técnico</option>
                            <option>Ensino superior</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>Área de Interesse</label>
                          <br />
                          <Input type="select" name="select" id="exampleSelect">
                            <option>Ciências Exatas</option>
                            <option>Ciencias Humanas</option>
                            <option>Ciências Biológicas</option>
                            <option>Linguagens e Códigos</option>
                          </Input>
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
