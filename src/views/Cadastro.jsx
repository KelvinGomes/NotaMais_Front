import React from "react";
import axios from 'axios';
import api from '../api';

import {
    Button, Card, CardHeader, CardBody, FormGroup,
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
                contractor: 'false',
                area_interest: null,
                education_level: null
            },
            btnInstrutor: {
                disable: true,
                color: '#21335b'
            },
            btnAluno: {
                disable: false,
                hidden: false,
                color: ''
            },
            confirm_password: '',
            invalid_password: '',

        };
        this.atribuirValor = this.atribuirValor.bind(this);
        this.confirmarSenha = this.confirmarSenha.bind(this);
        this.atribuirConfirmacao = this.atribuirConfirmacao.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.submeter = this.submeter.bind(this);
        this.tipoUsuario = this.tipoUsuario.bind(this);
        this.limparUsuario = this.limparUsuario.bind(this);
    }

    handleChange(event) {
        this.atribuirConfirmacao(event);
        this.confirmarSenha();
    }

    async submeter(event) {
        event.preventDefault();
        let user = this.state.user;
        await axios.post(`https://notamais-backend01.herokuapp.com/users`, user)
            .then(res => {
                window.alert("Usuário cadastrado com sucesso!");
                window.location.href = "/general/login";
            })
            .catch((error) => {
                window.alert("Erro ao cadastrar usuário!");
            });
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

    confirmarSenha() {
        let invalid_password = this.state.invalid_password;
        if (this.state.user.password != this.state.confirm_password) {
            invalid_password = 'confirmação inválida';
        } else {
            invalid_password = '';
        }
        this.setState({ invalid_password: invalid_password });
    }

    tipoUsuario(event) {
        let btnAluno;
        let btnInstrutor;
        let user;
        this.limparUsuario();
        
        if (event.target.name == 'btn_aluno') {

            btnAluno = this.state.btnAluno;
            btnAluno.disable = true;
            btnAluno.hidden = true;
            btnAluno.color = '#21335b';
            this.setState({ btnAluno: btnAluno })

            btnInstrutor = this.state.btnInstrutor;
            btnInstrutor.disable = false;
            btnInstrutor.color = '';
            this.setState({ btnInstrutor: btnInstrutor })
 
            user = this.state.user;
            user.contractor = true;
            this.setState({user : user});
        }
        if (event.target.name == 'btn_instrutor'){
            btnAluno = this.state.btnAluno;
            btnAluno.disable = false;
            btnAluno.hidden = false;
            btnAluno.color = '';
            this.setState({ btnAluno: btnAluno })

            btnInstrutor = this.state.btnInstrutor;
            btnInstrutor.disable = true;
            btnInstrutor.color = '#21335b';
            this.setState({ btnInstrutor: btnInstrutor})

            user = this.state.user;
            user.contractor = false;
            this.setState({user : user});
        }
    }

    limparUsuario(){
        let user = this.state.user;
        user.name = '';
        user.nickname = '';
        user.phone = '';
        user.email = '';
        user.password = '';
        user.area_interest = null;
        user.education_level = null;
    
        this.setState({user: user});
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
                                            <img name="btn_instrutor" src={require("assets/img/nota+/Instrutor.png")} alt="Nota+"
                                                className="img_type_user" disabled={this.state.btnInstrutor.disable} onClick={this.tipoUsuario} 
                                                style = {{backgroundColor: this.state.btnInstrutor.color}}/>
                                        </Col>
                                        <Col>
                                            <img name="btn_aluno" src={require("assets/img/nota+/Aluno.png")} alt="Nota+"
                                                className="img_type_user" disabled={this.state.btnAluno.disable} onClick={this.tipoUsuario}
                                                style = {{backgroundColor: this.state.btnAluno.color}} />
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
                                                        placeholder="Nome*"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="pr-1" md="6">
                                                <FormGroup>
                                                    <Input maxLength="50" name="nickname" value={this.state.user.nickname} onChange={this.atribuirValor}
                                                        placeholder="Apelido*"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pr-1" md="6">
                                                <FormGroup>
                                                    <Input maxLength="11" name="phone" value={this.state.user.phone} onChange={this.atribuirValor}
                                                        placeholder="Telefone*"
                                                        type="number"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="pr-1" md="12">
                                                <FormGroup>
                                                    <Input maxLength="50" name="email" value={this.state.user.email} onChange={this.atribuirValor}
                                                        placeholder="E-mail*"
                                                        type="email"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="pr-1" md="6">
                                                <FormGroup>
                                                    <Input minLength="6" maxLength="10" name="password" value={this.state.user.password} onChange={this.atribuirValor}
                                                        placeholder="Senha*"
                                                        type="password"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pr-1" md="6">
                                                <FormGroup>
                                                    <Input minLength="6" maxLength="10" name="confirm_password" value={this.state.confirm_password} onChange={this.handleChange}
                                                        placeholder="Confirmar senha*"
                                                        type="password"
                                                    />
                                                    <p className="text-danger">{this.state.invalid_password}</p>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="pr-1" md="6">
                                                <FormGroup>
                                                    <Input hidden={this.state.btnAluno.hidden} type="select" name="education_level" value={this.state.user.education_level} onChange={this.atribuirValor}>
                                                        <option value="">Grau atendido</option>
                                                        <option value="1">Ensino médio</option>
                                                        <option value="2">Ensino Técnico</option>
                                                        <option value="3">Ensino superior</option>
                                                    </Input>
                                                </FormGroup>
                                            </Col>
                                            <Col className="pr-1" md="6">
                                                <FormGroup>
                                                    <Input hidden={this.state.btnAluno.hidden} type="select" name="area_interest" value={this.state.user.area_interest} onChange={this.atribuirValor}>
                                                        <option value="">Área de interesse</option>
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
                                                    onClick={this.submeter}
                                                    className="btn_padrao"
                                                    color="primary"
                                                    type="submit"
                                                >
                                                    Registre-se!
                                                </Button>
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className="update ml-auto mr-auto">
                                                <label><a href="/login">Fazer Login</a></label>
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
