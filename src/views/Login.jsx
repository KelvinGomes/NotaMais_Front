import React from "react";
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
                                    <div className = "img_logo">
                                        <img  src={require("assets/img/nota+/Logo.png")}  alt = "Nota+"/>
                                    </div>
                                </CardBody>
                            </Card>
                            <Card className="card_login">
                                <CardHeader>
                                    <img className = "img_user" src={require("assets/img/nota+/User.png")}  alt = "Nota+"/>
                                </CardHeader>
                                <CardBody>
                                    <div style={{ height: 250 }}>
                                        <Form>
                                            <Row>
                                                <Col className="update ml-auto mr-auto" md="20">
                                                    <FormGroup>
                                                        <Input
                                                            placeholder="Email..."
                                                            type="email"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col className="update ml-auto mr-auto" md="20">
                                                    <FormGroup>
                                                        <Input
                                                            placeholder="Senha..."
                                                            type="password"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <div className="update ml-auto mr-auto">
                                                    <Button
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
