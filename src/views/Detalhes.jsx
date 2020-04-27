import React from "react";

// reactstrap components
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

class Detalhes extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Col className = "coluna_descricao" md="12">
              <CardTitle className="titulo">Definição de guidelines para softwares</CardTitle>
              <Row>   
                  <Card>
                    <CardHeader style={{backgroundColor: "rgb(58, 132, 177)", borderTopRightRadius: "15px", borderTopLeftRadius: "15px"}}>

                      <Row style={{textAlign: "center"}}>
                        <Col className="pr-1" md="3"><p style={{fontWeight: "bold"}}>Status</p><p>Concluído</p>
                        </Col>
                        <Col className="pr-1" md="3"><p style={{fontWeight: "bold"}}>Área</p><p>Ciências Exatas</p></Col>
                        <Col className="pr-1" md="3"><p style={{fontWeight: "bold"}}>Assunto</p><p>Desenvolvimento de sistemas</p></Col>
                        <Col className="pr-1" md="3"><p style={{fontWeight: "bold"}}>Prazo</p><p>10/04/2020</p></Col>
                      </Row>

                    </CardHeader>
                    <CardBody>
                      <Col style={{textAlign: "center"}}>
                        <p style={{fontWeight: "bold", color: "rgb(58, 132, 177)"}}>Descrição</p>
                        <p>Necessito de ajuda para realizar a formulação de 10 guidelines para um projeto, 
                           cada guideline deve conter sua descrição
                           um exemplo e uma justificativa. Maiores informações se encontram no arquivo em anexo
                        </p>
                      </Col>
                    </CardBody>
                    <CardFooter >
                      <div style={{textAlign: "right"}}>
                        <img className="icone_detalhe" src={require("assets/img/nota+/icone_arquivos.png")}  alt = "upload"/>
                        <img className="icone_detalhe" src={require("assets/img/nota+/icone_pdf.png")}  alt = "pdf"/>
                        <img className="icone_detalhe" src={require("assets/img/nota+/icone_foto.png")}  alt = "foto"/>

                      </div>
                    
                    </CardFooter>
                  </Card>
              </Row>

          </Col>

          <Col className = "coluna_descricao"  md="12">
            <CardTitle className="titulo">Propóstas ofertadas</CardTitle>
            <Row>
                <Card>
                  <CardHeader>

                    <Row style={{textAlign: "center"}}>
                      <Col className="pr-1" md="3"><p style={{fontWeight: "bold"}}>Prestador</p><p>Amauri Junior</p></Col>
                      <Col className="pr-1" md="2"><p style={{fontWeight: "bold"}}>Data</p><p>05-04-2020</p></Col>
                      <Col className="pr-1" md="2"><p style={{fontWeight: "bold"}}>Valor</p><p>R$ 70,00</p></Col>
                      <Col className="pr-1" md="4">
                        <p style={{fontWeight: "bold"}}>Descrição</p>
                        <p>Necessito de ajuda para realizar a formulação de 10 guidelines para um projeto, 
                           cada guideline deve conter sua descrição,
                            um exemplo e uma justificativa. Maiores informações se encontram no arquivo em anexo.</p>
                      </Col>
                      <Col>
                        <img src={require("assets/img/nota+/img-aceitar.png")}  alt = "aceitar"/>
                      </Col>
                    </Row>

                  </CardHeader>
                </Card>
            </Row>
          </Col>
        </div>
      </>
    );
  }
}
export default Detalhes;