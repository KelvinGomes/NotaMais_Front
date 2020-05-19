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
        contractor: true,
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

    if(this.state.user.contractor == true){
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
                              placeholder={this.state.user.name}
                              type="text"
                              require 
                            />
                          </FormGroup>
                        </Col>
                        <Col className="pr-1" md="6">
                          <FormGroup>
                            <label>Apelido</label>
                            <Input
                              placeholder={this.state.user.nickname}
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col className="pr-1" md="6">
                          <FormGroup>
                            <label>Telefone</label>
                            <Input
                              placeholder={this.state.user.phone}
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col className="pr-1" md="12">
                          <FormGroup>
                            <label htmlFor="exampleInputEmail1">
                              Email address
                            </label>
                            <Input placeholder={this.state.user.email} type="email" />
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
                            <Input type="select" name="select" placehold={this.state.user.education_level} id="exampleSelect" >
                              <option value="1">Ensino médio</option>
                              <option value="2">Técnico</option>
                              <option value="3">Ensino superior</option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col className="pr-1" md="6">
                          <FormGroup>
                            <label>Área de Interesse</label>
                            <br />
                            <Input type="select" name="select" placehold={this.state.user.area_interest} id="exampleSelect">
                                <option value="1">Ciências Exatas</option>
                                <option value="2">Ciencias Humanas</option>
                                <option value="3">Ciências Biológicas</option>
                                <option value="4">Linguagens e Códigos</option>
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
    if (this.state.user.contractor == false){
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
                              placeholder={this.state.user.name}
                              type="text"
                              require 
                            />
                          </FormGroup>
                        </Col>
                        <Col className="pr-1" md="6">
                          <FormGroup>
                            <label>Apelido</label>
                            <Input
                              placeholder={this.state.user.nickname}
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col className="pr-1" md="6">
                          <FormGroup>
                            <label>Telefone</label>
                            <Input
                              placeholder={this.state.user.phone}
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col className="pr-1" md="12">
                          <FormGroup>
                            <label htmlFor="exampleInputEmail1">
                              Email address
                            </label>
                            <Input placeholder={this.state.user.email} type="email" />
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
}

export default User;
