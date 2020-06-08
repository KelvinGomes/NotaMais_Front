import React from "react";
import axios from 'axios';
// reactstrap components
import {
  Card, CardHeader, CardBody, Row, Col, FormGroup, Input, Button, CardGroup, CardFooter
}
  from "reactstrap";
import { Link } from 'react-router-dom';
import Dashboard from "layouts/Admin";


class Pedidos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: {
        educationLevel: '',
        studyArea: '',
        dueDate: '',
        id: '',
        status: ''
      },
      orders: [],
      user: {
        contractor: localStorage.getItem('contractor')
      },
      disabled_: ''
    };
    this.atribuirValor = this.atribuirValor.bind(this);
    this.limparFiltro = this.limparFiltro.bind(this);
    this.buscar = this.buscar.bind(this);
    this.definirArea = this.definirArea.bind(this);
    this.definirStatus = this.definirStatus.bind(this);
    this.definirGrau = this.definirGrau.bind(this);
    this.desabilitar = this.desabilitar.bind(this);
  }


  desabilitar(event){
    this.state.disabled_ = "true";
  }

  async componentDidMount() {
    let token = await localStorage.getItem('token');
    axios.defaults.headers.common = { 'Authorization': `bearer ${token}` }
    await axios.get(`https://notamais-backend01.herokuapp.com/users`)
      .then(res => {
        let user = res.data.user;
        user.contractor = localStorage.getItem('contractor');
        this.setState({ user: user });

        let filter = this.state.filter;
        filter.studyArea = user.area_interest;
        filter.educationLevel = user.education_level;
        this.setState({ filter: filter });
      })
  }

  atribuirValor(event) {
    let filter = this.state.filter;
    
    filter[event.target.name] = event.target.value;
    this.setState({ filter: filter });

  }

  limparFiltro() {
    let filter = this.state.filter;
    filter.dueDate = '';
    filter.id = '';
    filter.status = '';
    this.state.disabled_ = '';

    if(this.state.user.contractor === 'true'){
      filter.educationLevel = '';
      filter.studyArea = '';
    }else{
      filter.educationLevel = this.state.user.education_level;
      filter.studyArea = this.state.user.area_interest;
    }
    

    this.setState({ filter: filter });
  }


  async buscar(event) {
    event.preventDefault();

    let filter = this.state.filter;
    let flag = false;

    let token = await localStorage.getItem('token');
    axios.defaults.headers.common = { 'Authorization': `bearer ${token}` }

    let dados = [];

    let url = "https://notamais-backend01.herokuapp.com/orders?";

   // https://notamais-backend01.herokuapp.com/orders/26

    if(this.state.disabled_ == 'true'){

      if (!filter.id == '') {
        flag = true;
        dados.push(filter.id);
        console.log(dados);
      }
    }else{
      if (!filter.educationLevel == '') {
        dados.push("educationLevel=" + filter.educationLevel);
        console.log(dados);
      }
  
  
      if (!filter.studyArea == '') {
        dados.push("studyArea=" + filter.studyArea);
      }
  
      if (!filter.dueDate == '') {
        dados.push("dueDate=" + filter.dueDate);
      }
  
      if (!filter.status == '') {
        dados.push("status=" + filter.status);
      }
      for (let i = 0; i < dados.length; i++) {
  
        if (i == 0) {
          url += dados[i];
        } else {
          url += "&" + dados[i];
        }
      }

    }


    if(flag === true){
      await axios.get(`https://notamais-backend01.herokuapp.com/orders/${dados}`)
      .then(res => {
        let order = res.data.order;

        this.setState({
           orders: [order]
        })
      })

    }else{
        await axios.get(url)
          .then(res => {
            let orders = res.data;
            this.setState({ orders: orders })
            console.log(this.state.orders);
          })
        }
    
  }

  definirArea(valor) {
    var area = '';

    switch (valor) {
      case 1:
        return area = 'Ciências Exatas';
      case 2:
        return area = 'Ciências Humanas';
      case 3:
        return area = 'Ciências Biológicas';
      case 4:
        return area = 'Linguagens e Códigos';
      default:
        return area = 'Inválido';
    }
  }

  definirStatus(valor) {
    var status = '';

    switch (valor) {
      case 1:
        return status = 'Requisitado';
      case 2:
        return status = 'Processando';
      case 3:
        return status = 'Concluído';
      case 4:
        return status = 'Cancelado';
      default:
        return status = 'Inválido';
    }
  }

  definirGrau(valor) {
    var grau = '';

    switch (valor) {
      case 1:
        return grau = 'Ensino Médio';
      case 2:
        return grau = 'Ensino Técnico';
      case 3:
        return grau = 'Ensino Superior';
      default:
        return grau = 'Inválido';
    }
  }

  render() {
    return (
      <>
        <div className="content">
          <div className="div_filtros">
            <Row>
              <Col md="12">
                <Card>
                  <CardBody>
                    <Row style={{ margin: "4px" }}>
                      <Col className="pr-1" md="1">
                        <label>Data:</label>
                      </Col>
                      <Col className="pr-1" md="3">
                        <FormGroup>
                          <Input name="dueDate" id="dueDate" value={this.state.filter.dueDate} onChange={this.atribuirValor}
                            type="date" disabled = {this.state.disabled_}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pr-1" md="1">
                        <label>Aréa:</label>
                      </Col>
                      {this.state.user.contractor === 'true' && (
                        <Col className="pr-1" md="3">
                          <FormGroup>
                            <Input type="select" name="studyArea" id="studyArea" value={this.state.filter.studyArea} onChange={this.atribuirValor} disabled = {this.state.disabled_}>
                              <option value="">Todos</option>
                              <option value="1">Ciências Exatas</option>
                              <option value="2">Ciências Humanas</option>
                              <option value="3">Ciencias Biológicas</option>
                              <option value="4">Linguagens e Códigos</option>
                            </Input>
                          </FormGroup>
                        </Col>
                      )}
                      {this.state.user.contractor === 'false' && (
                        <Col className="pr-1" md="3">
                          <p>
                            {this.definirArea(this.state.user.area_interest)}
                          </p>
                        </Col>
                      )}
                      <Col className="pr-1" md="1">
                        <label>Grau de instrução:</label>
                      </Col>
                      {this.state.user.contractor === 'true' && (
                        <Col className="pr-1" md="3">
                        <FormGroup>
                          <Input type="select" name="educationLevel" id="educationLevel" value={this.state.filter.educationLevel} onChange={this.atribuirValor} disabled = {this.state.disabled_}>
                            <option value="">Todos</option>
                            <option value="1">Ensino Médio</option>
                            <option value="2">Ensino Técnico</option>
                            <option value="3">Ensino Superior</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      )}
                      {this.state.user.contractor === 'false' && (
                        <Col className="pr-1" md="3">
                          <p>
                            {this.definirGrau(this.state.user.education_level)}
                          </p>
                        </Col>
                      )}
                    </Row>
                    <Row xs="4" style={{ margin: "4px" }}>
                      <Col className="pr-1" md="1">
                        <label>Nº pedido:</label>
                      </Col>
                      <Col className="pr-1" md="3">
                        <FormGroup>
                          <Input name="id" id="number" value={this.state.filter.id} onChange={this.atribuirValor}
                            type="number" onClick={this.desabilitar}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pr-1" md="1">
                        <label>Status:</label>
                      </Col>
                      <Col className="pr-1" md="3">
                        <FormGroup>
                          <Input type="select" name="status" id="status" value={this.state.filter.status} onChange={this.atribuirValor} disabled = {this.state.disabled_}>
                            <option value="">Todos</option>
                            <option value="1">Requisitado</option>
                            <option value="2">Processando</option>
                            <option value="3">Concluído</option>
                            <option value="4">Cancelado</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col className="pr-1" md="4" style={{ textAlign: "center" }}>
                        <Button className="btn_padrao" color="primary" size="sm" onClick={this.buscar}>buscar</Button>{' '}
                        <Button className="btn_padrao" color="primary" size="sm" onClick={this.limparFiltro}>Limpar</Button>{' '}
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
          {this.state.user.contractor === 'true' && (
            <div className="div_solicitar_pedido">
              <Row>
                <i className="nc-icon nc-simple-add" />
                <a href="/admin/adicionar_pedido/">
                  <h6>Novo pedido</h6>
                </a>
              </Row>
            </div>
          )}
          <p>Resultados:</p>
          <div className="div_resultado_pedidos">
            {this.state.orders.map((order) => {
              return (
                <Row key={order.id}>
                  <Col md="12">
                    <Card>
                      {this.state.user.contractor === 'true' && (
                        <Link style={{ color: "white" }} to={`/admin/detalhes_pedido/${order.id}`}>
                          <CardBody className={this.definirStatus(order.status)}>
                            <Row>
                              <Col className="pr-1" md="12"><h6>Número: {order.id} / Assunto: {order.subject}</h6></Col>
                            </Row>
                          </CardBody>
                        </Link>
                      )}
                      {this.state.user.contractor === 'false' && (
                        <Link style={{ color: "white" }} to={`/admin/detalhes_prestador/${order.id}`}>
                          <CardBody className={this.definirStatus(order.status)}>
                            <Row>
                              <Col className="pr-1" md="12"><h6>Número: {order.id} / Assunto: {order.subject}</h6></Col>
                            </Row>
                          </CardBody>
                        </Link>
                      )}

                      <CardFooter style={{ textAlign: "center", margin: "0px" }}>
                        <Row>
                          <Col className="pr-1" md="3">
                            <p style={{ fontWeight: "bold" }}>Requisitante: </p>
                            <p>{order.name_user}</p>
                          </Col>
                          <Col className="pr-1" md="2">
                            <p style={{ fontWeight: "bold" }}>Área : </p>
                            <p>{this.definirArea(order.study_area)}</p>
                          </Col>
                          <Col className="pr-1" md="2">
                            <p style={{ fontWeight: "bold" }}>Status: </p>
                            <p>{this.definirStatus(order.status)}</p>
                          </Col>
                          <Col className="pr-1" md="2">
                            <p style={{ fontWeight: "bold" }}>Grau: </p>
                            <p>{this.definirGrau(order.education_level)}</p>
                          </Col>
                          <Col className="pr-1" md="2">
                            <p style={{ fontWeight: "bold" }}>Entrega: </p>
                            <p>{order.due_date}</p>
                          </Col>
                        </Row>
                      </CardFooter>
                    </Card>
                  </Col>
                </Row>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Pedidos;
