import React from "react";
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
