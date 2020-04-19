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

class Cadastro extends React.Component {
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
                                            <h6 style ={{color: "black", fontSize: "18px"}}>REGISTRE-SE!</h6>
                                            <h7 style ={{color: "black", fontSize: "14px"}}>Aqui no Nota+ você tem duas opções de atuação</h7><br /><br />
                                            <h6>Instrutor</h6>
                                            <label className="text_info" style ={{color: "black", fontSize: "14px"}}>
                                                Para quem deseja ofertar mentorias, aulas, correções e desenvolvimento
                                                de projetos. Como intrutor você poderá oferecer serviços aos alunos.
                                            </label>
                                            <h6>Aluno</h6>
                                            <label className="text_info" style ={{color: "black", fontSize: "14px"}}>
                                                Para quem precisa de ajuda com alguma aula, tarefa ou projeto.
                                                Como aluno você poderá realizar pedidos e receber propostas dos instrutores.
                                            </label>
                                        </div>
                                    </CardBody>
                                </Col>
                            </Card>
                            <Card className="card_cadastro">
                                <CardHeader>
                                    <Row>
                                        <Col style = {{marginRight: "50px"}} >
                                            <img src={require("assets/img/nota+/Instrutor.png")} alt="Nota+" className = "img_type_user" />
                                        </Col>
                                        <Col>
                                            <img src={require("assets/img/nota+/Aluno.png")} alt="Nota+" className = "img_type_user"/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col style = {{marginRight: "50px"}}>
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
                                                    <Input
                                                        placeholder="Nome"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="pr-1" md="6">
                                                <FormGroup>
                                                    <Input
                                                        placeholder="Apelido"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pr-1" md="6">
                                                <FormGroup>
                                                    <Input
                                                        placeholder="Telefone"
                                                        type="number"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="pr-1" md="12">
                                                <FormGroup>
                                                    <Input
                                                        placeholder="E-mail"
                                                        type="email"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="pr-1" md="6">
                                                <FormGroup>
                                                    <Input
                                                        placeholder="Senha"
                                                        type="password"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pr-1" md="6">
                                                <FormGroup>
                                                    <Input
                                                        placeholder="Confirmar senha"
                                                        type="password"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="pr-1" md="6">
                                                <FormGroup>
                                                    <select name="dropdown" style={{ height: "40px", width: "100%", borderRadius: "5px" }} >
                                                        <option value="" disabled selected>Grau de intrução</option>
                                                        <option value="Java">Java</option>
                                                        <option value="Discrete Mathematics">Discrete Mathematics</option>
                                                    </select>
                                                </FormGroup>
                                            </Col>
                                            <Col className="pr-1" md="6">
                                                <FormGroup>
                                                    <select name="dropdown" style={{ height: "40px", width: "100%", borderRadius: "5px" }}>
                                                        <option value="" disabled selected>Área de Interesse</option>
                                                        <option value="Java">Java</option>
                                                        <option value="Discrete Mathematics">Discrete Mathematics</option>
                                                    </select>
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
