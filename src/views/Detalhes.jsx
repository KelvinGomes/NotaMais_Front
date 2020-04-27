import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  CardGroup,
  Row,
  CardText,
  CardFooter,
  Label,
  Col
} from "reactstrap";

class Detalhes extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Col md="12" style={{display: "grid", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
              <CardTitle style={{textAlign: "center", marginTop:"30px", fontSize: "20px", fontWeight: "bold"}}>Definição de guidelines para softwares</CardTitle>
              <Row>
                
                <CardGroup>
                  
                  <Card>
                    <CardHeader style={{backgroundColor: "rgb(58, 132, 177)", borderTopRightRadius: "15px", borderTopLeftRadius: "15px"}}>

                      <Row style={{textAlign: "center"}}>
                        <Col className="pr-1" md="3"><p style={{fontWeight: "bold"}}>Status</p><p>Concluído</p></Col>
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
                        <img src={require("assets/img/nota+/icone_arquivos.png")}  alt = "upload"/>
                        <img src={require("assets/img/nota+/icone_pdf.png")}  alt = "pdf"/>
                        <img src={require("assets/img/nota+/icone_foto.png")}  alt = "foto"/>

                      </div>
                    
                    </CardFooter>
                  </Card>
                
                </CardGroup>
              </Row>

          </Col>

        <Col style={{display: "grid", flexDirection: "row", justifyContent: "center", alignItems: "center"}}  md="12">
            <CardTitle style={{textAlign: "center", marginTop: "60px", marginBotton: "30px", fontSize: "20px", fontWeight: "bold"}}>Propóstas ofertadas</CardTitle>
            <Row>
              
              <CardGroup>
                
                <Card>
                  <CardHeader>

                    <Row style={{textAlign: "center"}}>
                      <Col className="pr-1" md="3"><p style={{fontWeight: "bold"}}>Prestador</p><p>Amauri Junior</p></Col>
                      <Col className="pr-1" md="2"><p style={{fontWeight: "bold"}}>Data</p><p>05-04-2020</p></Col>
                      <Col className="pr-1" md="2"><p style={{fontWeight: "bold"}}>Valor</p><p> R$ 70,00</p></Col>
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
              </CardGroup>
            </Row>
          </Col>
        </div>
      </>
    );
  }
}
export default Detalhes;
