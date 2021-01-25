import React ,{Component} from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Col from 'react-bootstrap/Col'
import './Butons.css'
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
class Auction extends Component {
    render() {
        return (
            <>
                <Row className='md-12'>
                    <Col className='col-sm-6'>
                        <div className="carHolder" >

                            <Button variant='outline-info' >IAAI</Button>


                            <p className="carHolder-text">IAAI</p>
                        </div>
                        <input type='checkbox' id='iaai'/>
                    </Col>
                    {/*<Col md={3}></Col>*/}

                    <Col className='col-sm-6'>
                        <div className="carHolder " >
                            <Button variant='outline-info' >COPART</Button>

                            <p className="carHolder-text">COPART</p>
                        </div>
                        <input type='checkbox' id='copart'/>
                    </Col>

                </Row>
            </>
        )
    }

}
export default Auction;
