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
      uploadedFiles: []
    };
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
  let token = localStorage.getItem('token');
  axios.defaults.headers.common = { 'Authorization': `bearer ${token}` }
  axios.post(`https://notamais-backend01.herokuapp.com/files`, data, {
      onUploadProgress: e => {
      const progress = parseInt(Math.round(e.loaded * 100/e.total))

      this.updateFile(uploadedFile.id, {
        progress,
      })
    }
  }).then( response => {
    this.updateFile(uploadedFile.id, {
      uploaded: true,
      id: response.data._id,
      url: response.data.url
    })
  }).catch (() => {
    this.updateFile(uploadedFile.id, {
      error: true
    })
  });
};

updateFile = (id, data) => {
  this.setState({uploadedFiles: this.state.uploadedFiles.map(uploadedFile => {
    return id == uploadedFile.id 
    ? { ...uploadedFile, ...data }
    : uploadedFile;
  })})
};

  render() {
    const { uploadedFiles } = this.state;
    return (
      <>
        <div className="content">
          <Col className="coluna_descricao" md="12">
            <CardTitle className="titulo">Definição de guidelines para softwares</CardTitle>
            <Row>
              <Card>
                <CardHeader style={{ backgroundColor: "rgb(58, 132, 177)", borderTopRightRadius: "15px", borderTopLeftRadius: "15px" }}>

                  <Row style={{ textAlign: "center" }}>
                    <Col className="pr-1" md="3"><p style={{ fontWeight: "bold" }}>Status</p><p>Concluído</p>
                    </Col>
                    <Col className="pr-1" md="3"><p style={{ fontWeight: "bold" }}>Área</p><p>Ciências Exatas</p></Col>
                    <Col className="pr-1" md="3"><p style={{ fontWeight: "bold" }}>Assunto</p><p>Desenvolvimento de sistemas</p></Col>
                    <Col className="pr-1" md="3"><p style={{ fontWeight: "bold" }}>Prazo</p><p>10/04/2020</p></Col>
                  </Row>

                </CardHeader>
                <CardBody>
                  <Col style={{ textAlign: "center" }}>
                    <p style={{ fontWeight: "bold", color: "rgb(58, 132, 177)" }}>Descrição</p>
                    <p>Necessito de ajuda para realizar a formulação de 10 guidelines para um projeto,
                    cada guideline deve conter sua descrição
                    um exemplo e uma justificativa. Maiores informações se encontram no arquivo em anexo
                        </p>
                  </Col>
                </CardBody>
                <CardFooter >
                  <div className="files_add">
                    <p>Anexe os documentos referentes a atividade aqui!</p>
                    <Upload onUpload={this.handleUpload} />
                    {!!uploadedFiles.length && <FileList files={uploadedFiles} />}
                  </div>
                </CardFooter>
              </Card>
            </Row>

          </Col>

          <Col className="coluna_descricao" md="12">
            <CardTitle className="titulo">Propóstas ofertadas</CardTitle>
            <Row>
              <Card>
                <CardHeader style={{ backgroundColor: "rgb(58, 132, 177)", borderTopRightRadius: "15px", borderTopLeftRadius: "15px" }}>

                  <Row style={{ textAlign: "center" }}>
                    <Col className="pr-1" md="3"><p style={{ fontWeight: "bold" }}>Prestador</p><p>Amauri Junior</p></Col>
                    <Col className="pr-1" md="3"><p style={{ fontWeight: "bold" }}>Data</p><p>05-04-2020</p></Col>
                    <Col className="pr-1" md="3"><p style={{ fontWeight: "bold" }}>Valor</p><p>R$ 70,00</p></Col>
                    <Col className="pr-1" md="3">
                      <a>
                        <img src={require("assets/img/nota+/img-aceitar.png")} alt="aceitar" />
                        <p>Aceitar</p>
                      </a>

                    </Col>
                  </Row>
                </CardHeader>

                <CardBody>
                  <Col style={{ textAlign: "center" }}>
                    <p style={{ fontWeight: "bold", color: "rgb(58, 132, 177)" }}>Descrição</p>
                    <p>Necessito de ajuda para realizar a formulação de 10 guidelines para um projeto,
                    cada guideline deve conter sua descrição,
                            um exemplo e uma justificativa. Maiores informações se encontram no arquivo em anexo.</p>
                  </Col>
                </CardBody>

              </Card>
            </Row>
          </Col>
        </div>
      </>
    );
  }
}
export default Detalhes;