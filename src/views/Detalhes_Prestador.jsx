import React from "react";
import axios from 'axios';
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardGroup,
  Row,
  CardFooter,
  Col,
  Form,
  Input
} from "reactstrap";

class Detalhes_Prestador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadedFiles: [],
      order: [],
      date: {
        now:  new Date().toLocaleString().substr(0, 10)
      }
    };

    this.definirArea = this.definirArea.bind(this);
    this.definirStatus = this.definirStatus.bind(this);
    this.definirGrau = this.definirGrau.bind(this);
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    let token = await localStorage.getItem('token');
    axios.defaults.headers.common = { 'Authorization': `bearer ${token}` }
    await axios.get(`https://notamais-backend01.herokuapp.com/orders/${id}`)
      .then(res => {
        let order = res.data;
        this.setState({ order: order });
        console.log(order);
      })
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
        return status = 'Em andamento';
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
          <Row>
            <Col className="pr-1" md="12">
              <CardTitle className="titulo">{this.state.order.subject}</CardTitle>
              <Card>
                <CardHeader style={{ backgroundColor: "rgb(58, 132, 177)", borderTopRightRadius: "15px", borderTopLeftRadius: "15px" }}>
                  <Row style={{ textAlign: "center" }}>
                    <Col className="pr-1" md="1"><p style={{ fontWeight: "bold" }}>Número</p><p>{this.state.order.id}</p></Col>
                    <Col className="pr-1" md="2"><p style={{ fontWeight: "bold" }}>Status</p><p>{this.definirStatus(this.state.order.status)}</p></Col>
                    <Col className="pr-1" md="3"><p style={{ fontWeight: "bold" }}>Área</p><p>{this.definirArea(this.state.order.study_area)}</p></Col>
                    <Col className="pr-1" md="3"><p style={{ fontWeight: "bold" }}>Grau</p><p>{this.definirGrau(this.state.order.education_level)}</p></Col>
                    <Col className="pr-1" md="3"><p style={{ fontWeight: "bold" }}>Prazo</p><p>{this.state.order.due_date}</p></Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Col style={{ textAlign: "center" }}>
                    <p style={{ fontWeight: "bold", color: "rgb(58, 132, 177)" }}>Descrição</p>
                    <p>{this.state.order.description}</p>
                  </Col>
                </CardBody>
                <CardFooter >
                  <Row style={{ textAlign: "center" }}>
                    <Col className="coluna_descricao" md="12">
                      <p style={{ fontWeight: "bold", color: "rgb(58, 132, 177)" }}>Anexos</p>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className="pr-1" md="12">
              <CardTitle className="titulo">Propóstas ofertadas</CardTitle>
              <Card>
              <Form>
                <CardBody>
                  <Col md="11" style={{ textAlign: "center", marginRight: "auto", marginLeft: "auto", marginBottom: "20px" }}>
                    <p style={{ fontWeight: "bold", color: "rgb(58, 132, 177)" }}>Descrição</p>
                    <Input maxLength="450" type="text"/>
                  </Col>
                </CardBody>
                <CardFooter style={{ backgroundColor: "rgb(58, 132, 177)", borderBottomRightRadius: "15px", borderBottomLeftRadius: "15px" }}>
                  <Row style={{ textAlign: "center" }}>
                    <Col className="pr-1" md="5">
                      <p style={{ fontWeight: "bold" }}>Data</p>
                      <p>{this.state.date.now}</p>
                    </Col>
                    <Col className="pr-1" md="2">
                      <p style={{ fontWeight: "bold" }}>Valor (R$)</p>
                      <Input type="number" style={{ backgroundColor: "rgb(58, 132, 177)", color: "black"}}/>
                    </Col>
                    <Col className="pr-1" md="5">
                      <a>
                        <img style={{ margin: "5px"}}src={require("assets/img/nota+/Icone_adicionar.png")} alt="Dar lance" />
                        <p>Dar lance</p>
                      </a>
                    </Col>
                  </Row>
                </CardFooter>
                </Form>
              </Card>

              <Card>
                <CardBody>
                  <Col style={{ textAlign: "center" }}>
                    <p style={{ fontWeight: "bold", color: "rgb(58, 132, 177)" }}>Descrição</p>
                    <p>Necessito</p>
                  </Col>
                </CardBody>
                <CardFooter style={{ backgroundColor: "rgb(58, 132, 177)", borderBottomRightRadius: "15px", borderBottomLeftRadius: "15px" }}>
                  <Row style={{ textAlign: "center" }}>
                    <Col className="pr-1" md="6"><p style={{ fontWeight: "bold" }}>Data</p><p>05-04-2020</p></Col>
                    <Col className="pr-1" md="6"><p style={{ fontWeight: "bold" }}>Valor</p><p>R$ 70,00</p></Col>
                  </Row>
                </CardFooter>
              </Card>

            </Col>
          </Row>
        </div>
      </>
    );
  }
}
export default Detalhes_Prestador;