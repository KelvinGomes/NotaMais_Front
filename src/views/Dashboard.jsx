
import React from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
import axios from 'axios';
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";
// core components

const dashboardEmailStatisticsChart = {
  data: canvas => {
    return {
      labels: [1, 2, 3],
      datasets: [
        {
          label: "Emails",
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: ["#e3e3e3", "#4acccd", "#fcc468", "#ef8157"],
          borderWidth: 0,
          data: [localStorage.getItem('linguagens'), localStorage.getItem('exatas'),
          localStorage.getItem('biologicas'),localStorage.getItem('humanas')]
        }
      ]
    };
  },
  options: {
    legend: {
      display: false
    },

    pieceLabel: {
      render: "percentage",
      fontColor: ["white"],
      precision: 2
    },

    tooltips: {
      enabled: false
    },

    scales: {
      yAxes: [
        {
          ticks: {
            display: false
          },
          gridLines: {
            drawBorder: false,
            zeroLineColor: "transparent",
            color: "rgba(255,255,255,0.05)"
          }
        }
      ],

      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            display: false
          }
        }
      ]
    }
  }
};

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      status: {
        requisitado: 0,
        processando: 0,
        concluido: 0,
        cancelado: 0,
      }
    };
  }

  async componentDidMount() {
    let exatas = 0;
    let humanas = 0;
    let biologicas = 0;
    let linguagens = 0;
    let requisitado = 0;
    let processando = 0;
    let concluido = 0;
    let cancelado = 0;

    let token = await localStorage.getItem('token');
    axios.defaults.headers.common = { 'Authorization': `bearer ${token}` }
    await axios.get(`https://notamais-backend01.herokuapp.com/orders`)
      .then(res => {
        let orders = res.data;
        this.setState({ orders: orders });
        console.log(orders);
      })

      for (let order in this.state.orders){
        switch(this.state.orders[order].study_area){
          case 1: 
            exatas++;
            break;
          case 2: 
            humanas++;
            break;
          case 3: 
            biologicas++;
            break;
          case 4: 
            linguagens++;
            break;
        }
      }

      for (let order in this.state.orders){
        switch(this.state.orders[order].status){
          case 1: 
            requisitado++;
            break;
          case 2: 
            processando++;
            break;
          case 3: 
            concluido++;
            break;
          case 4: 
            cancelado++;
            break;
        }
      }

      this.setState({
        status: {
          requisitado: requisitado,
          processando: processando,
          concluido: concluido,
          cancelado: cancelado
        }
      })

      localStorage.setItem('exatas', exatas);
      localStorage.setItem('humanas', humanas);
      localStorage.setItem('biologicas', biologicas);
      localStorage.setItem('linguagens', linguagens);
  }

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <CardTitle className="titulo" style={{margin: "20px"}}>Pedidos por status</CardTitle>
          </Row>
          <Row>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-single-copy-04 text-primary" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Requisitado</p>
                        <CardTitle tag="p">{this.state.status.requisitado}</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats" style={{textAlign: "right"}}>
                    pedidos
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-refresh-69 text-warning" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Processando</p>
                        <CardTitle tag="p">{this.state.status.processando}</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats" style={{textAlign: "right"}}>
                    pedidos
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-simple-remove text-danger" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Cancelado</p>
                        <CardTitle tag="p">{this.state.status.cancelado}</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats" style={{textAlign: "right"}}>
                    pedidos
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-check-2 text-success" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Concluído</p>
                        <CardTitle tag="p">{this.state.status.concluido}</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats" style={{textAlign: "right"}}>
                    pedidos
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <CardTitle className="titulo" style={{margin: "20px"}}>Gráficos</CardTitle>
          </Row>
          <Row>
           <iframe 
              width="100%" height="800px" 
              src="https://datastudio.google.com/embed/reporting/ac2c5c51-ec23-4edc-a908-575f4ba26f57/page/DLtqB"
              frameborder="0" style= {{border:0, borderTopLeftRadius: "15px", borderTopRightRadius: "15px",
              borderBottomLeftRadius: "15px", borderBottomRightRadius: "15px",
              boxShadow: "0 5px 0 0 rgba(0, 0, 0, 0.1)" }} allowfullscreen>
            </iframe>  
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
