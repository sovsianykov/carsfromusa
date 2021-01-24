import React ,{Component} from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Col from 'react-bootstrap/Col'
import './Butons.css'
import Sedan from  '../../../assets/images/sedan2.jpeg'
import Coupe from  '../../../assets/images/coupe.jpeg'
import Hatchback from  '../../../assets/images/hathback.jpeg'
import Micro from  '../../../assets/images/micro.jpeg'
import Pickup from  '../../../assets/images/pickup.jpeg'
import Universal from  '../../../assets/images/jeep.jpeg'
import Row from "react-bootstrap/Row";
class Buttons extends Component {
    render() {
        return (
            <ButtonGroup aria-label="Basic example">
                <Row>
               <Col lg='2'>
                   <div className="carHolder" >

                       <img src={Sedan} alt="sed"/>

                       <p className="carHolder-text">SEDAN</p>
                   </div>
                   <input type='checkbox' id='sedan'/>
               </Col>
                    <Col lg='2'>
                        <div className="carHolder" >
                            <img src={Universal} alt="sed"/>
                            <p className="carHolder-text">UNIVERSAL</p>
                        </div>
                        <input type='checkbox' id='universal'/>
                    </Col>
                    <Col lg='2'>
                        <div className="carHolder" >
                            <img src={Coupe} alt="sed"/>
                            <p className="carHolder-text">COUPE</p>

                        </div>
                        <input type='checkbox' id='coupe'/>
                    </Col>
                    <Col lg='2'>
                        <div className="carHolder" >
                            <img src={Pickup} alt="sed"/>
                            <p className="carHolder-text">PICKUP</p>
                        </div>
                        <input type='checkbox' id='pickup'/>
                    </Col>
                    <Col lg='2'>
                        <div className="carHolder" >
                            <img src={Micro} alt="sed"/>
                            <p className="carHolder-text">MICRO</p>
                        </div>
                        <input type='checkbox' id='micro'/>
                    </Col>
                    <Col lg='2'>
                        <div className="carHolder" >
                            <img src={Hatchback} alt="sed"/>
                            <p className="carHolder-text">HATCHBACK</p>
                        </div>
                        <input type='checkbox' id='hatchback'/>
                    </Col>
                </Row>
            </ButtonGroup>
        )
    }

}
export default Buttons
