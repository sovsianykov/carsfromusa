import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import "./Butons.css";
import Sedan from "../../../assets/images/sedan2.jpeg";
import Coupe from "../../../assets/images/coupe.jpeg";
import Hatchback from "../../../assets/images/hathback.jpeg";
import Micro from "../../../assets/images/micro.jpeg";
import Pickup from "../../../assets/images/pickup.jpeg";
import Universal from "../../../assets/images/jeep.jpeg";
import Row from "react-bootstrap/Row";
import Gasoline from "../../../assets/images/gs.jpg";
import Diesel from "../../../assets/images/ds.jpg";
import Electro from "../../../assets/images/el.jpg";
import CarHolder from "./CarHolder";
class Buttons extends Component {
  state = {
    cars: [
      { srcs: Sedan , id:"sedan"},
      { srcu: Universal,id:"universal" },
      { srcc: Coupe , id: 'coupe'},
      { srcp: Pickup ,id: 'pickup'},
      { srcm: Micro , id: 'micro'},
      { srch: Hatchback , id: 'hatchback'}
    ]
  }
   // pic= document.querySelector('#car');
  selectPics= () => {
    let img = document.querySelector('img#sedan');
  img.classList.toggle('active1')
  }
  selectPicu= () => {
    let img = document.querySelector('img#universal');
    img.classList.toggle('active1')
  }
  selectPicc= () => {
    let img = document.querySelector('img#coupe');
    img.classList.toggle('active1')
  }
  selectPicp= () => {
    let img = document.querySelector('img#pickup');
    img.classList.toggle('active1')
  }
  selectPicm= () => {
    let img = document.querySelector('img#micro');
    img.classList.toggle('active1')
  }
  selectPich= () => {
    let img = document.querySelector('img#hatchback');
    img.classList.toggle('active1')
  }



  render() {
    return (
      <>
        <Row>
          <Col md={2}>
            <CarHolder id={this.state.cars[0].id} src={this.state.cars[0].srcs}  />
            <input type='checkbox' onChange={this.selectPics.bind(this)} />
            <p>sedan</p>
          </Col>
          <Col md={2}>
            <CarHolder src={this.state.cars[1].srcu} id={this.state.cars[1].id} />
            <input type='checkbox' onChange={this.selectPicu.bind(this)} />


          </Col>
          <Col md={2}>
            <CarHolder src={this.state.cars[2].srcc} id={this.state.cars[2].id} />
            <input type='checkbox' onChange={this.selectPicc.bind(this)} />

          </Col>
          <Col md={2}>
            <CarHolder src={this.state.cars[3].srcp} id={this.state.cars[3].id} />
            <input type='checkbox' onChange={this.selectPicp.bind(this)} />

          </Col>
          <Col md={2}>
            <CarHolder src={this.state.cars[4].srcm}  id={this.state.cars[4].id}/>
            <input type='checkbox' onChange={this.selectPicm.bind(this)} />

          </Col>
          <Col md={2}>
            <CarHolder src={this.state.cars[5].srch} id={this.state.cars[5].id} />
            <input type='checkbox' onChange={this.selectPich.bind(this)} />

          </Col>
        </Row>
      </>
    );
  }
}
export default Buttons;
