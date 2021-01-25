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
      src : [
          { src1 : Gasoline },
          { src2 : Diesel },
          { src3 : Electro }


      ]
    }



    render() {
        return (
            <>
                <Row >

                    <Col md={{ span: 2, offset: 2 }}>
                        <CarHolder src = {this.state.src[0].src1}/>
                    </Col>

                    <Col md={{ span: 2, offset: 2 }}>
                        <CarHolder src = {this.state.src[1].src2}/>
                    </Col>

                    <Col md={{ span: 2, offset: 2 }}>
                        <CarHolder src = {this.state.src[2].src3}/>

                    </Col>
                </Row>
            </>
        )
    }

}
export default Buttons2;
