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
        name: '',
        nickname: '',
        phone: '',
        password: '',
        area_interest: '',
        education_level: ''
      },
      confirm_password: '',
      invalid_password: ''
    };
    this.submeter = this.submeter.bind(this);
    this.atribuirValor = this.atribuirValor.bind(this);
    this.confirmarSenha = this.confirmarSenha.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.atribuirConfirmacao = this.atribuirConfirmacao.bind(this);
    this.tipoUsuario = this.tipoUsuario.bind(this);
  }

  atribuirValor(event) {
    let user = this.state.user;
    user[event.target.name] = event.target.value;
    this.setState({ user: user });
  }


  async submeter(event) {
    event.preventDefault();
    let user = this.state.user;
    await axios.put(`https://notamais-backend01.herokuapp.com/users`, user)
        .then(res => {
            window.alert("Atualização efetuada com sucesso!");
            //window.location.href = "/general/login";
        })
        .catch((error) => {
            window.alert("Erro ao atualizar perfil!");
        });
  }
  confirmarSenha() {
    let invalid_password = this.state.invalid_password;
    if (this.state.user.password != this.state.confirm_password) {
        invalid_password = 'confirmação inválida';
    } else {
        invalid_password = '';
    }
    this.setState({ invalid_password: invalid_password });
  }

  atribuirConfirmacao(event) {
    let state = this.state;
    state[event.target.name] = event.target.value;
    this.setState({ state: state });
  }

  handleChange(event) {
    this.atribuirConfirmacao(event);
    this.confirmarSenha();
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

  tipoUsuario() {
    var texto = '';
    if(this.state.user.contractor === true){
      return texto = "No momento seu usuário é do tipo Aluno!";
    }else{
      return texto = "No momento seu usuário é do tipo Instrutor!";
    }
  }

  render() {

    if(this.state.user.contractor == true){
      return (
        <>
          <div className="content">
            <Row>
              <Col md="4" style={{ marginBottom: "30px" }}>
                <Card className="card-user">
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
                          src={require("assets/img/nota+/Profile.png")}
                        />
                        <h5 className="title">{this.state.user.name}</h5>
                      </a>
                      <p className="description">@ {this.state.user.nickname}</p>
                    </div>
                    <p style={{ height: "100%"}} className="description text-center">
                      {this.tipoUsuario()}
                    </p>
                  </CardBody>
                  <CardFooter style={{ backgroundColor: "rgb(58, 132, 177)", height: "60px", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px" }}>
                    <div style={{ textAlign: "center", marginTop: "20px" }}>
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
                              name="name"
                              value={this.state.user.name} 
                              onChange={this.atribuirValor}
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
                              name="nickname"
                              value={this.state.user.nickname} 
                              onChange={this.atribuirValor}
                              placeholder={this.state.user.nickname}
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col className="pr-1" md="6">
                          <FormGroup>
                            <label>Telefone</label>
                            <Input
                              name="phone"
                              value={this.state.user.phone} 
                              onChange={this.atribuirValor}
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
                            <Input placeholder={this.state.user.email} type="email" disabled="true" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="pr-1" md="6">
                          <FormGroup>
                            <label>Senha</label>
                            <Input
                              minLength="6" maxLength="10"
                              name="password" 
                              value={this.state.password} 
                              onChange={this.handleChange}
                              value={this.state.user.password} 
                              onChange={this.atribuirValor}
                              placeholder="Senha"
                              type="password"
                            />
                          </FormGroup>
                        </Col>
                        <Col className="pr-1" md="6">
                          <FormGroup>
                            <label>Confirmar Senha</label>
                            <Input
                              minLength="6" maxLength="10"
                              name="confirm_password" 
                              value={this.state.confirm_password} 
                              onChange={this.handleChange}
                              placeholder="Confirmar Senha"
                              type="password"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="pr-1" md="6">
                          <FormGroup>
                            <label>Grau de intrução</label>
                            <br />
                            <Input type="select" name="select" 
                              placehold={this.state.user.education_level} 
                              id="exampleSelect"
                              name="education_level" 
                              value={this.state.user.education_level} 
                              onChange={this.atribuirValor}>
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
                            <Input type="select" name="select" 
                                placehold={this.state.user.area_interest}
                                name="area_interest" 
                                value={this.state.user.area_interest} 
                                onChange={this.atribuirValor} 
                                id="exampleSelect">
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
                            onClick={this.submeter}
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
                              name="name"
                              value={this.state.user.name} 
                              onChange={this.atribuirValor}
                              placeholder={this.state.user.name}
                              onChange={this.atribuirValor}
                              type="text"
                              require 
                            />
                          </FormGroup>
                        </Col>
                        <Col className="pr-1" md="6">
                          <FormGroup>
                            <label>Apelido</label>
                            <Input
                              name="nickname"
                              value={this.state.user.nickname} 
                              onChange={this.atribuirValor}
                              placeholder={this.state.user.nickname}
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col className="pr-1" md="6">
                          <FormGroup>
                            <label>Telefone</label>
                            <Input
                              name="phone"
                              value={this.state.user.phone} 
                              onChange={this.atribuirValor}
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
                            <Input placeholder={this.state.user.email} type="email" disabled="true" />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="pr-1" md="6">
                          <FormGroup>
                            <label>Senha</label>
                            <Input
                              minLength="6" maxLength="10" name="password" 
                              value={this.state.user.password} 
                              onChange={this.atribuirValor}
                              placeholder="Senha"
                              type="password"
                            />
                          </FormGroup>
                        </Col>
                        <Col className="pr-1" md="6">
                          <FormGroup>
                            <label>Confirmar Senha</label>
                            <Input
                              minLength="6" maxLength="10"
                              name="confirm_password" 
                              value={this.state.confirm_password} 
                              onChange={this.handleChange}
                              placeholder="Confirmar Senha"
                              type="password"
                            />
                          </FormGroup>
                        </Col>
                      </Row>  
  
                      <Row>
                        <div className="update ml-auto mr-auto">
                          <Button
                            className="btn_registre"
                            onClick={this.submeter}
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
