import React ,{Component} from "react";
import Col from 'react-bootstrap/Col'
import './Butons.css'
import Row from "react-bootstrap/Row";
import {Form} from "react-bootstrap";

class ButtonsInput3 extends Component {
    render() {
        return (
            <>
                <Row sm={12}>
                    <Col sm= '4' >
                        <Form>
                        <Form.Group controlId="SelectCustomSizeLg">
                            <Form.Label>engine volume</Form.Label>
                            <Form.Control as="select" size="lg" custom>
                                <option>1.7</option>
                                <option>1.8</option>
                                <option>1.9</option>
                                <option>2.4</option>
                                <option>5.8</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                    </Col>
                    {/*<Col lg='1'></Col>*/}
                    <Col sm={4}>
                    <Form>
                            <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                                <Form.Label>production year</Form.Label>
                                <Form.Control as="select" size="lg" custom>
                                    <option>2015</option>
                                    <option>2016</option>
                                    <option>2017</option>
                                    <option>2018</option>
                                    <option>2019</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </Col>
                    {/*<Col lg=''></Col>*/}
                    <Col sm={4}>
                    <Form.Label htmlFor="inputprice">auction price</Form.Label>
                        <Form.Control
                            type="text"
                            id="auxprice"
                            aria-describedby="auxprice"
                        />
                        <Form.Text id="axp" muted>

                        </Form.Text>
                    </Col>
                </Row>
            </>
        )
    }

}
export default ButtonsInput3;
