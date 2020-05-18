import React from "react";
import axios from 'axios';

// reactstrap components
import {
  Card, CardHeader, CardBody, Row, Col, Form, FormGroup, Input, Button, CardFooter
}
  from "reactstrap";


class Adicionar_Pedido extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: {
        subject: '',
        description: '',
        educationLevel: '',
        studyArea: '',
        dueDate: '',
      }
    };
    this.atribuirValor = this.atribuirValor.bind(this);
    this.submeter = this.submeter.bind(this);
  }

  atribuirValor(event) {
    let order = this.state.order;
    order[event.target.name] = event.target.value;
    this.setState({ order: order });
  }

  async submeter(event) {
    event.preventDefault();
    let order = this.state.order;
    let token = await localStorage.getItem('token'); 
    console.log(token);
    axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
    await axios.post(`https://notamais-backend01.herokuapp.com/orders`, order)
      .then(res => {
        window.alert("Pedido gerado com sucesso!");
        window.location.href = "/admin/pedidos";
      })
      .catch((error) => {
        window.alert("Erro ao gerar pedido!");
      });
  }

  render() {
    return (
      <>
        <div className="content">
          <Card>
            <CardHeader style={{
              backgroundColor: "rgb(58, 132, 177)", borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px", textAlign: "center"
            }}>
              <h6>Para gerar seu pedido preencha o questionário</h6>
            </CardHeader>
            <CardBody>
              <Form>
                <Row>
                  <Col className="pr-1" md="4">
                    <p>Qual o grau de instrução necessário?</p>
                    <FormGroup>
                      <Input name="educationLevel" type="select"  id="exampleSelect" value={this.state.order.educationLevel} onChange={this.atribuirValor}>
                        <option value="0">Todos</option>
                        <option value="1">Ensino médio</option>
                        <option value="2">Técnico</option>
                        <option value="3">Ensino superior</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col className="pr-1" md="3">
                    <p>Em qual área se enquadra?</p>
                    <FormGroup>
                      <Input name="studyArea" type="select" id="exampleSelect" value={this.state.order.studyArea} onChange={this.atribuirValor}>
                        <option value="0">Todos</option>
                        <option value="1">Ciências Exatas</option>
                        <option value="2">Ciencias Humanas</option>
                        <option value="3">Ciências Biológicas</option>
                        <option value="4">Linguagens e Códigos</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col className="pr-1" md="2">
                    <p>Para quando?</p>
                    <FormGroup>
                      <Input
                        value={this.state.order.dueDate} onChange={this.atribuirValor}
                        name="dueDate"
                        type="date"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pr-1" md="3">
                    <p>Qual o assunto da atividade?</p>
                    <FormGroup>
                      <Input
                        name="subject"
                        type="texto"
                        value={this.state.order.subject} onChange={this.atribuirValor}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="12">
                    <p>Descrição</p>
                    <FormGroup>
                      <Input
                        name="description"
                        type="textarea"
                        value={this.state.order.description} onChange={this.atribuirValor}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Button style={{ backgroundColor: " rgb(58, 132, 177)" }}
                    className="update ml-auto mr-auto" color="primary" onClick={this.submeter}>
                    Gerar pedido
                  </Button>
                </Row>
              </Form>
            </CardBody>
            <CardFooter>

            </CardFooter>
          </Card>
        </div>
      </>
    );
  }
}

export default Adicionar_Pedido;
