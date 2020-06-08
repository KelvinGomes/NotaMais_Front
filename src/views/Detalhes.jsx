import React from "react";
import axios from 'axios';

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardGroup,
  Row,
  CardFooter,
  Label,
  Col
} from "reactstrap";

import Upload from "../components/Upload";
import FileList from "../components/FileList";
import { uniqueId } from 'lodash';
import filesize from 'filesize';

class Detalhes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadedFiles: [],
      order: [],
      offers: [],
      userOrder: []
    };

    this.definirArea = this.definirArea.bind(this);
    this.definirStatus = this.definirStatus.bind(this);
    this.definirGrau = this.definirGrau.bind(this);
    this.aceitarProposta = this.aceitarProposta.bind(this);
    this.cancelarPedido = this.cancelarPedido.bind(this);
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
        let offers = res.data.offers;
        this.setState({ offers: offers });
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

  handleUpload = files => {
    const uploadedFiles = files.map(file => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
    }))

    this.setState({
      uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles)
    });

    uploadedFiles.forEach(this.processUpload);
  };

  processUpload = (uploadedFile) => {
    const data = new FormData();

    data.append('file', uploadedFile.file, uploadedFile.name);
    data.append('orderId', this.state.order.id);
    let token = localStorage.getItem('token');
    axios.defaults.headers.common = { 'Authorization': `bearer ${token}` }
    axios.post(`https://notamais-backend01.herokuapp.com/files`, data, {
      onUploadProgress: e => {
        const progress = parseInt(Math.round(e.loaded * 100 / e.total))

        this.updateFile(uploadedFile.id, {
          progress,
        })
      }
    }).then(response => {
      this.updateFile(uploadedFile.id, {
        uploaded: true,
        id: response.data.id,
        url: response.data.url
      })
    }).catch(() => {
      this.updateFile(uploadedFile.id, {
        error: true
      })
    });
  };

  updateFile = (id, data) => {
    this.setState({
      uploadedFiles: this.state.uploadedFiles.map(uploadedFile => {
        return id == uploadedFile.id
          ? { ...uploadedFile, ...data }
          : uploadedFile;
      })
    })
  };

  handleDelete = async id => {
    let token = localStorage.getItem('token');
    axios.defaults.headers.common = { 'Authorization': `bearer ${token}` }
    await axios.delete(`https://notamais-backend01.herokuapp.com/files/${id}`);
    this.setState({
      uploadedFiles: this.state.uploadedFiles.filter(file => file.id !== id),
    });
  }

  async aceitarProposta(idOffer) {
    const { id } = this.props.match.params;
    let token = await localStorage.getItem('token');
    axios.defaults.headers.common = { 'Authorization': `bearer ${token}` }
    await axios.put(` https://notamais-backend01.herokuapp.com/orders/${id}`, { selectedOffer: idOffer, status: 2 })
      .then(res => {
        window.alert("Propósta aceita com sucesso!");
        window.location.reload();
      })
      .catch((error) => {
        window.alert("Erro ao aceitar propósta!");
      });
  }

  async cancelarPedido() {
    const { id } = this.props.match.params;
    let token = await localStorage.getItem('token');
    axios.defaults.headers.common = { 'Authorization': `bearer ${token}` }
    await axios.put(` https://notamais-backend01.herokuapp.com/orders/${id}`, { status: 4 })
      .then(res => {
        window.alert("Pedido cancelado com sucesso!");
        window.location.reload();
      })
      .catch((error) => {
        window.alert("Erro ao cancelar pedido!");
      });
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
                  <Row style={{ textAlign: "center" }}>
                    <Col className="coluna_descricao" md="12">
                      <p style={{ fontWeight: "bold", color: "rgb(58, 132, 177)" }}>Descrição</p>
                      <p>{this.state.order.description}</p>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter >
                  <Row style={{ textAlign: "center" }}>
                    <Col className="coluna_descricao" md="12">
                      <p style={{ fontWeight: "bold", color: "rgb(58, 132, 177)" }}>Anexos</p>
                    </Col>
                  </Row>
                  <div className="files_add">
                    <Upload onUpload={this.handleUpload} />
                    {!!uploadedFiles.length && <FileList files={uploadedFiles} onDelete={this.handleDelete} />}
                  </div>
                  {this.state.order.status != 4 && this.state.order.status != 3 && (
                    <p style={{ textAlign: "center", color: "red" }} type="submit" onClick={this.cancelarPedido}>Cancelar pedido</p>
                  )}
                </CardFooter>
              </Card>
            </Col>
          </Row>
          {this.state.order.selected_offer_id == null && this.state.order.status != 4 && (
            <CardTitle className="titulo">Propóstas ofertadas</CardTitle>
          )}
          {this.state.order.selected_offer_id != null && this.state.order.status != 4 && (
            <CardTitle className="titulo">Propósta aceita</CardTitle>
          )}
          {this.state.offers == '' && this.state.order.status != 4 && (
            <p style={{ textAlign: "center", marginTop: "30px" }}>Você ainda não recebeu nenhuma propósta!</p>
          )}

          {this.state.order.selected_offer_id != null && this.state.order.status != 4 && this.state.offers.map((offer) => {
            return (
              <>
                {offer.id === this.state.order.selected_offer_id && (
                  <Row key={offer.id}>
                    <Col className="pr-1" md="12">
                      <Card>
                        <CardHeader style={{ backgroundColor: "rgb(58, 132, 177)", borderTopRightRadius: "15px", borderTopLeftRadius: "15px" }}>
                          <Row style={{ textAlign: "center" }}>
                            <Col className="pr-1" md="4"><p style={{ fontWeight: "bold" }}>Prestador</p><p>{offer.provider.name}</p></Col>
                            <Col className="pr-1" md="4"><p style={{ fontWeight: "bold" }}>Data</p><p>{offer.createdAt}</p></Col>
                            <Col className="pr-1" md="4"><p style={{ fontWeight: "bold" }}>Valor (R$)</p><p>{offer.value}</p></Col>
                            <Col className="pr-1" md="3">
                            </Col>
                          </Row>
                        </CardHeader>
                        <CardBody>
                          <Col style={{ textAlign: "center" }}>
                            <p style={{ fontWeight: "bold", color: "rgb(58, 132, 177)" }}>Descrição</p>
                            <p>{offer.description}</p>
                          </Col>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                )}
              </>
            )
          })}

          {this.state.order.selected_offer_id == null && this.state.order.status != 4 && this.state.offers.map((offer) => {
            return (
              <>
                <Row key={offer.id}>
                  <Col className="pr-1" md="12">
                    <Card>
                      <CardHeader style={{ backgroundColor: "rgb(58, 132, 177)", borderTopRightRadius: "15px", borderTopLeftRadius: "15px" }}>
                        <Row style={{ textAlign: "center" }}>
                          <Col className="pr-1" md="3"><p style={{ fontWeight: "bold" }}>Prestador</p><p>{offer.provider.name}</p></Col>
                          <Col className="pr-1" md="3"><p style={{ fontWeight: "bold" }}>Data</p><p>{offer.createdAt}</p></Col>
                          <Col className="pr-1" md="3"><p style={{ fontWeight: "bold" }}>Valor</p><p>{offer.value}</p></Col>
                          <Col className="pr-1" md="3">
                            <a>
                              <img src={require("assets/img/nota+/img-aceitar.png")} alt="aceitar" type="submit" onClick={() => this.aceitarProposta(offer.id)} />
                              <p>Aceitar</p>
                            </a>
                          </Col>
                        </Row>
                      </CardHeader>
                      <CardBody>
                        <Col style={{ textAlign: "center" }}>
                          <p style={{ fontWeight: "bold", color: "rgb(58, 132, 177)" }}>Descrição</p>
                          <p>{offer.description}</p>
                        </Col>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </>
            )
          })}
        </div>
      </>
    );
  }
}
export default Detalhes;