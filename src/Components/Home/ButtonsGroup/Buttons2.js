import React ,{Component} from "react";
import CarHolder from "./CarHolder";
import Col from 'react-bootstrap/Col'
import './Butons.css'
import Gasoline from  '../../../assets/images/gs.jpg'
import Diesel from  '../../../assets/images/ds.jpg'
import Electro from  '../../../assets/images/el.jpg'

import Row from "react-bootstrap/Row";
class Buttons2 extends Component {

  carHolder = document.querySelector('.cardHolder')
    state = {
      fuel : [
          { src1 : Gasoline, id: 'gasoline' },
          { src2 : Diesel , id : 'diesel'},
          { src3 : Electro, id: 'electro'  }


      ]
    }
    selectPicg= () => {
        let img = document.querySelector('img#gasoline');
        img.classList.toggle('active1')
    }
    selectPicd= () => {
        let img = document.querySelector('img#diesel');
        img.classList.toggle('active1')
    }
    selectPice= () => {
        let img = document.querySelector('img#electro');
        img.classList.toggle('active1')
    }


    render() {
        return (
            <>
                <Row >

                    <Col md={{ span: 2, offset: 2 }}>
                        <CarHolder id={this.state.fuel[0].id} src={this.state.fuel[0].src1} onClick = {this.selectPicg.bind(this)}
                                   class ={this.state.fuel[0].class} />
                    </Col>

                    <Col md={{ span: 2, offset: 2 }}>
                        <CarHolder id={this.state.fuel[1].id} src={this.state.fuel[1].src2} onClick = {this.selectPicd.bind(this)}
                                   class ={this.state.fuel[1].class} />
                    </Col>

                    <Col md={{ span: 2, offset: 2 }}>
                        <CarHolder id={this.state.fuel[2].id} src={this.state.fuel[2].src3} onClick = {this.selectPice.bind(this)}
                                   class ={this.state.fuel[2].class} />

                    </Col>
                </Row>
            </>
        )
    }

}
export default Buttons2;
