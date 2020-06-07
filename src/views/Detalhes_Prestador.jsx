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
  Input,
  FormGroup
} from "reactstrap";

import Upload from "../components/Upload";
import FileList from "../components/FileList";
import { uniqueId } from 'lodash';
import filesize from 'filesize';

class Detalhes_Prestador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadedFiles: [],
      order: [],
      offer: {
        value: '',
        description: '',
        orderId: '',
      },
      offers: [],
      date: {
        now: new Date().toLocaleString()
      }
    };

    this.definirArea = this.definirArea.bind(this);
    this.definirStatus = this.definirStatus.bind(this);
    this.definirGrau = this.definirGrau.bind(this);
    this.ofertarProposta = this.ofertarProposta.bind(this);
    this.atribuirValor = this.atribuirValor.bind(this);
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    let token = await localStorage.getItem('token');
    axios.defaults.headers.common = { 'Authorization': `bearer ${token}` }
    await axios.get(`https://notamais-backend01.herokuapp.com/orders/${id}`)
      .then(res => {
        let order = res.data.order;
        let files = res.data.orderFiles;
        this.setState({ order: order });
        this.setState({
          offer: {
            orderId: order.id,
          }
        });

        this.setState({
          uploadedFiles: files.map(file => ({
            id: file.id,
            name: file.name,
            readableSize: filesize(file.size),
            preview: file.url,
            uploaded: true,
            url: file.url,
          }))
        });
      })

    await axios.get(`https://notamais-backend01.herokuapp.com/offers/${id}`)
      .then(res => {
        console.log(res.data);
        if(res.data.offers[0] != null){
          let offers = res.data.offers[0];
          this.setState({ offers: offers });
          console.log(this.state.offers);
        }
      })
  }

  atribuirValor(event) {
    let offer = this.state.offer;
    offer[event.target.name] = event.target.value;
    this.setState({ offer: offer });
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

  async ofertarProposta() {
    let offer = this.state.offer;
    let token = await localStorage.getItem('token');
    axios.defaults.headers.common = { 'Authorization': `bearer ${token}` }

    if (offer.value > -1 && offer.description != null) {
      await axios.post(`https://notamais-backend01.herokuapp.com/offers`, offer)
        .then(res => {
          window.alert("Propósta ofertada com sucesso!");
          window.location.reload();
        })
        .catch((error) => {
          window.alert("Erro ao ofertar propósta!");
        });
    } else {
      window.alert("Erro: o valor não pode ser negativo e a descrição não pode ser em branco!");
    }
  }

  componentWillUnmount() {
    this.state.uploadedFiles.forEach(file => URL.revokeObjectURL(file.preview));
  }

  render() {
    const { uploadedFiles } = this.state;
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
                  <div className="files_add">
                    {this.state.uploadedFiles == '' && (
                      <p>Sem arquivos em anexo!</p>
                    )}
                    <FileList files={uploadedFiles} />
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className="pr-1" md="12">
              {this.state.offers == '' && (
                <>
                  <CardTitle className="titulo">Ofertar propósta</CardTitle>
                  <Card>
                    <Form>
                      <CardBody>
                        <Col md="11" style={{ textAlign: "center", marginRight: "auto", marginLeft: "auto", marginBottom: "20px" }}>
                          <p style={{ fontWeight: "bold", color: "rgb(58, 132, 177)" }}>Descrição *</p>
                          <FormGroup>
                            <Input name="description" value={this.state.offer.description} onChange={this.atribuirValor} maxLength="450" type="text" />
                          </FormGroup>
                        </Col>
                      </CardBody>
                      <CardFooter style={{ backgroundColor: "rgb(58, 132, 177)", borderBottomRightRadius: "15px", borderBottomLeftRadius: "15px" }}>
                        <Row style={{ textAlign: "center" }}>
                          <Col className="pr-1" md="5">
                            <p style={{ fontWeight: "bold" }}>Data</p>
                            <p>{this.state.date.now.substr(0, 10)}</p>
                          </Col>
                          <Col className="pr-1" md="2">
                            <p style={{ fontWeight: "bold" }}>Valor (R$) *</p>
                            <FormGroup>
                              <Input name="value" value={this.state.offer.value} onChange={this.atribuirValor} type="number" style={{ backgroundColor: "rgb(58, 132, 177)", color: "black" }} />
                            </FormGroup>
                          </Col>
                          <Col className="pr-1" md="5">
                            <FormGroup>
                              <img type="submit" style={{ margin: "5px" }} src={require("assets/img/nota+/Icone_adicionar.png")}
                                alt="Dar lance" onClick={this.ofertarProposta} />
                              <p>Dar lance</p>
                            </FormGroup>
                          </Col>
                        </Row>
                      </CardFooter>
                    </Form>
                  </Card>
                </>
              )}
              {this.state.offers != '' && (
                <>
                  <CardTitle className="titulo">Propósta ofertada</CardTitle>
                  <Card>
                    <CardBody>
                      <Col style={{ textAlign: "center" }}>
                        <p style={{ fontWeight: "bold", color: "rgb(58, 132, 177)" }}>Descrição</p>
                        <p>{this.state.offers.description}</p>
                      </Col>
                    </CardBody>
                    <CardFooter style={{ backgroundColor: "rgb(58, 132, 177)", borderBottomRightRadius: "15px", borderBottomLeftRadius: "15px" }}>
                      <Row style={{ textAlign: "center" }}>
                        <Col className="pr-1" md="6"><p style={{ fontWeight: "bold" }}>Data</p><p>{this.state.offers.createdAt}</p></Col>
                        <Col className="pr-1" md="6"><p style={{ fontWeight: "bold" }}>Valor (R$)</p><p>{this.state.offers.value}</p></Col>
                      </Row>
                    </CardFooter>
                  </Card>
                </>
              )}
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
export default Detalhes_Prestador;