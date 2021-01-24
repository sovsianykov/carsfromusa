import React ,{Component} from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Col from 'react-bootstrap/Col'
import './Butons.css'
import Gasoline from  '../../../assets/images/gs.jpg'
import Diesel from  '../../../assets/images/ds.jpg'
import Electro from  '../../../assets/images/el.jpg'
import Row from "react-bootstrap/Row";
class Buttons2 extends Component {
    render() {
        return (
            <ButtonGroup aria-label="Basic example">
                <Row >

                    <Col md={{ span: 2, offset: 2 }}>
                        <div className="carHolder" >

                            <img src={Gasoline} alt="sed"/>

                            <p className="carHolder-text">GASOLINE</p>
                        </div>
                        <input type='checkbox' id='gasoline'/>
                    </Col>

                    <Col md={{ span: 2, offset: 2 }}>
                        <div className="carHolder" >
                            <img src={Diesel} alt="sed"/>
                            <p className="carHolder-text">DIESEL</p>
                        </div>
                        <input type='checkbox' id='diesel'/>
                    </Col>

                    <Col md={{ span: 2, offset: 2 }}>
                        <div className="carHolder" >
                            <img src={Electro} alt="sed"/>
                            <p className="carHolder-text">ELECTRO</p>

                        </div>
                        <input type='checkbox' id='electro'/>
                    </Col>
                </Row>
            </ButtonGroup>
        )
    }

}
export default Buttons2;
