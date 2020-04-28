import React from "react";
import axios from 'axios'; 
import api from '../api';

import {
    Button,Card, CardHeader, CardBody, FormGroup,
    Form, Input, Row, CardGroup, Col
} from "reactstrap";

class Cadastro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: '',
                nickname: '',
                phone: '',
                email: '',
                password: '',
                contractor: 'true'
            },
            confirm_password: '',
            invalid_password: ''

        };
        this.atribuirValor = this.atribuirValor.bind(this);
        this.confirmarSenha = this.confirmarSenha.bind(this);
        this.atribuirConfirmacao = this.atribuirConfirmacao.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.submeter = this.submeter.bind(this);
    }

    handleChange(event){
        this.atribuirConfirmacao(event);
        this.confirmarSenha();
    }

    submeter(event) {
        event.preventDefault();
        let user = this.state.user;
        axios.post(`https://notamais-backend01.herokuapp.com/users`, user)
      .then(res => {
        console.log(res);
        console.log(res.data);
        window.alert("Usuário cadastrado com sucesso!");
      })
    }

    atribuirValor(event) {
        let user = this.state.user;
        user[event.target.name] = event.target.value;
        this.setState({ user: user });
    }

    atribuirConfirmacao(event) {
        let state = this.state;
        state[event.target.name] = event.target.value;
        this.setState({ state: state });
    }

    confirmarSenha(){
        let invalid_password = this.state.invalid_password;
        console.log(this.state.confirm_password)
        console.log(this.state.user.password)
        if(this.state.user.password != this.state.confirm_password){
            invalid_password = 'confirmação inválida';
        }else{
            invalid_password = '';
        }
        this.setState({ invalid_password: invalid_password });
    }

    render() {
        return (
            <>
                <div className="content_registro">
                    <Row >
                        <CardGroup>
                            <Card className="card_info">
                                <Col>
                                    <CardHeader>
                                        <img className="img_logo_info" src={require("assets/img/nota+/Logo.png")} alt="Nota+" />
                                    </CardHeader>
                                    <CardBody>
                                        <div className="div_info">
                                            <h4>REGISTRE-SE!</h4>
                                            <p>Aqui no Nota+ você tem duas opções de atuação</p>
                                            <h6>Instrutor</h6>
                                            <p>
                                                Para quem deseja ofertar mentorias, aulas, correções e desenvolvimento
                                                de projetos. Como intrutor você poderá oferecer serviços aos alunos.
                                            </p>
                                            <h6>Aluno</h6>
                                            <p>
                                                Para quem precisa de ajuda com alguma aula, tarefa ou projeto.
                                                Como aluno você poderá realizar pedidos e receber propostas dos instrutores.
                                            </p>
                                        </div>
                                    </CardBody>
                                </Col>
                            </Card>
                            <Card className="card_cadastro">
                                <CardHeader>
                                    <Row>
                                        <Col>
                                            <img src={require("assets/img/nota+/Instrutor.png")} alt="Nota+" className="img_type_user" />
                                        </Col>
                                        <Col>
                                            <img src={require("assets/img/nota+/Aluno.png")} alt="Nota+" className="img_type_user" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h6 className="user_type_text">INSTRUTOR</h6>
                                        </Col>
                                        <Col>
                                            <h6 className="user_type_text">ALUNO</h6>
                                        </Col>
                                    </Row>
                                </CardHeader>
                                <CardBody>
                                    <Form>
                                        <Row>
                                            <Col className="pr-1" md="12">
                                                <FormGroup>
                                                    <Input maxLength="50" name="name" value={this.state.user.name} onChange={this.atribuirValor}
                                                        placeholder="Nome"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="pr-1" md="6">
                                                <FormGroup>
                                                    <Input maxLength="50" name="nickname" value={this.state.user.nickname} onChange={this.atribuirValor}
                                                        placeholder="Apelido"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pr-1" md="6">
                                                <FormGroup>
                                                    <Input maxLength="11" name="phone" value={this.state.user.phone} onChange={this.atribuirValor}
                                                        placeholder="Telefone"
                                                        type="number"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="pr-1" md="12">
                                                <FormGroup>
                                                    <Input maxLength="50" name="email" value={this.state.user.email} onChange={this.atribuirValor}
                                                        placeholder="E-mail"
                                                        type="email"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="pr-1" md="6">
                                                <FormGroup>
                                                    <Input maxLength="10" name="password" value={this.state.user.password} onChange={this.atribuirValor}
                                                        placeholder="Senha"
                                                        type="password"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pr-1" md="6">
                                                <FormGroup>
                                                    <Input maxLength="10" name="confirm_password" value={this.state.confirm_password} onChange={this.handleChange}
                                                        placeholder="Confirmar senha"
                                                        type="password"
                                                    />
                                                    <p className="text-danger">{this.state.invalid_password}</p>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="pr-1" md="6">
                                                <FormGroup>
                                                    <Input type="select" name="select" id="exampleSelect">
                                                        <option>Ensino médio</option>
                                                        <option>Técnico</option>
                                                        <option>Ensino superior</option>
                                                    </Input>
                                                </FormGroup>
                                            </Col>
                                            <Col className="pr-1" md="6">
                                                <FormGroup>
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
                                                    onClick={this.submeter}
                                                    className="btn_padrao"
                                                    color="primary"
                                                    type="submit"
                                                >
                                                    Registre-se!
                                                </Button>
                                            </div>
                                        </Row>
                                    </Form>
                                </CardBody>
                            </Card>
                        </CardGroup>
                    </Row>
                </div>
            </>
        );
    }
}

export default Cadastro;
