import React from "react";
import './styles.css';
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    FormGroup,
    Form,
    Input,
    Row,
    CardGroup,
    Col
} from "reactstrap";

// core components
import {
    dashboard24HoursPerformanceChart,
    dashboardEmailStatisticsChart,
    dashboardNASDAQChart
} from "variables/charts.jsx";

class Login extends React.Component {
    render() {
        return (
            <>
                <div className="content">
                    <Row >
                        <CardGroup>
                            <Card className="card_logo">
                                <CardHeader>
                                </CardHeader>
                                <CardBody>
                                    <img className = "img_logo" src={require("assets/img/nota+/Logo.png")}  alt = "Nota+"/>
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
                                                            type="text"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col className="update ml-auto mr-auto" md="20">
                                                    <FormGroup>
                                                        <Input
                                                            placeholder="Senha..."
                                                            type="text"
                                                        />
                                                    </FormGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <div className="update ml-auto mr-auto">
                                                    <Button
                                                        className="btn_login"
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
