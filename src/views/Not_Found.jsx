import React from "react";
import axios from 'axios';
import api from '../api';

import {
    Button, Card, CardHeader, CardBody, FormGroup,
    Form, Input, Row, CardGroup, Col
} from "reactstrap";

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
                                            <h4>DESCULPE!</h4>
                                            <p>Esta página encontra-se indisponível no momento</p>
                                            
                                            <p>
                                                Estamos felizes por nos ajudar a tornar sua experiência no site melhor.
                                                Logo tornaremos disponível esta funcionalidade e te avisaremos. 
                                            </p>
                                            <h6>Obrigado!</h6>
                                            <Button style={{backgroundColor:"rgb(58, 132, 177)"}}><a href="/admin/perfil" style={{textDecoration:"none", color:"white"}}>Voltar para seu perfil</a></Button>
                                          
                                        </div>
                                    </CardBody>
                                </Col>
                            </Card>
                        
                        </CardGroup>
                    </Row>
                </div>
            </>
        );
    }
}

export default Cadastro;
