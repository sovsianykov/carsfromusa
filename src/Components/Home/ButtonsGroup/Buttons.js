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
import CarHolder from "./CarHolder";
import Aux from '../../../Hoc/Aux'
class Buttons extends Component {
  // constructor(props) {
  //   super(props);
  //
  //
  // this.state = {
  //   cars: [
  //     { srcs: Sedan , id:"sedan", class:"sedan" , price : 5000},
  //     { srcu: Universal,id:"universal", class:"universal" ,price : 6000},
  //     { srcc: Coupe , id: 'coupe', class: 'coupe' , price: 3000},
  //     { srcp: Pickup ,id: 'pickup' ,class: 'pickup', price: 2500 },
  //     { srcm: Micro , id: 'micro',class: 'micro' , price: 3700},
  //     { srch: Hatchback , id: 'hatchback',class: 'hatchback',price: 4000}
  //   ]
  // }}
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



  render(

  ) {

    return (
      <Aux>
        <Row>
          <Col md={2}>
            <CarHolder id={this.props.cars[0].id} src={this.props.cars[0].srcs} onClick = {this.selectPics.bind(this)}
                 class ={this.props.cars[0].class} />
            {/*<input type='checkbox' onChange={this.selectPics.bind(this)} />*/}


          </Col>
          <Col md={2}>
            <CarHolder src={this.props.cars[1].srcu} id={this.props.cars[1].id}  onClick = {this.selectPicu.bind(this)}
                       class ={this.props.cars[1].class}/>
            {/*<input type='checkbox' onChange={this.selectPicu.bind(this)} />*/}


          </Col>
          <Col md={2}>
            <CarHolder src={this.props.cars[2].srcc} id={this.props.cars[2].id}  onClick = {this.selectPicc.bind(this)}
                       class ={this.props.cars[2].class}/>
            {/*<input type='checkbox' onChange={this.selectPicc.bind(this)} />*/}

          </Col>
          <Col md={2}>
            <CarHolder src={this.props.cars[3].srcp} id={this.props.cars[3].id}  onClick = {this.selectPicp.bind(this)}
                       class ={this.props.cars[3].class}/>
            {/*<input type='checkbox' onChange={this.selectPicp.bind(this)} />*/}

          </Col>
          <Col md={2}>
            <CarHolder src={this.props.cars[4].srcm}  id={this.props.cars[4].id}  onClick = {this.selectPicm.bind(this)}
                       class ={this.props.cars[4].class}/>
            {/*<input type='checkbox' onChange={this.selectPicm.bind(this)} />*/}

          </Col>
          <Col md={2}>
            <CarHolder src={this.props.cars[5].srch} id={this.props.cars[5].id}  onClick = {this.selectPich.bind(this)}
                       class ={this.props.cars[5].class}/>
            {/*<input type='checkbox' onChange={this.selectPich.bind(this)} />*/}

          </Col>
        </Row>
      </Aux>
    );
  }
}
export default Buttons;
