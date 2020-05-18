import React from "react";
import axios from 'axios';
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Row,
    CardGroup,
    Col
} from "reactstrap";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: '',
                password: '',
            },
            resposta: {
            }
        };
        this.atribuirValor = this.atribuirValor.bind(this);
        this.submeter = this.submeter.bind(this);
    }

    atribuirValor(event) {
        let user = this.state.user;
        user[event.target.name] = event.target.value;
        this.setState({ user: user });
    }

    async submeter(event) {
        event.preventDefault();
        let res;
        let user = this.state.user;
        await axios.post(`https://notamais-backend01.herokuapp.com/sessions`, user)
            .then(response => {
                let res = response.data;
                this.setState({ resposta: res })
                window.location.href = "/admin/dashboard";
            })
            .catch((error) => {
                console.log(error);
                window.alert("Erro ao logar!");
            });

            console.log(this.state.resposta);
            let token = this.state.resposta.token;
            console.log(token);
            await localStorage.setItem('token', token);  
    }

    render() {
        return (
            <>
                <div className="content_login">
                    <Row >
                        <CardGroup>
                            <Card className="card_logo">
                                <CardHeader>
                                </CardHeader>
                                <CardBody>
                                    <div className="img_logo">
                                        <img src={require("assets/img/nota+/Logo.png")} alt="Nota+" />
                                    </div>
                                </CardBody>
                            </Card>
                            <Card className="card_login">
                                <CardHeader>
                                    <img className="img_user" src={require("assets/img/nota+/User.png")} alt="Nota+" />
                                </CardHeader>
                                <CardBody>
                                    <div style={{ height: 250 }}>
                                        <Form>
                                            <Row>
                                                <Col className="update ml-auto mr-auto" md="20">
                                                    <FormGroup>
                                                        <Input maxLength="50" name="email" value={this.state.user.email} onChange={this.atribuirValor}
                                                            placeholder="Email..."
                                                            type="email"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col className="update ml-auto mr-auto" md="20">
                                                    <FormGroup>
                                                        <Input minLength="6" maxLength="10" name="password" value={this.state.user.password} onChange={this.atribuirValor}
                                                            placeholder="Senha..."
                                                            type="password"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <div className="update ml-auto mr-auto">
                                                    <Button onClick={this.submeter}
                                                        className="btn_padrao"
                                                        color="primary"
                                                        type="submit"
                                                    >
                                                        Fazer login
                                                    </Button>
                                                </div>
                                            </Row>
                                            <Row>
                                                <div className="update ml-auto mr-auto">
                                                    <label>Registre-se</label>
                                                </div>
                                            </Row>
                                        </Form>
                                    </div>
                                </CardBody>
                            </Card>
                        </CardGroup>

                    </Row>
                </div>
            </>
        );
    }
}

export default Login;
