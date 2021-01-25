import React ,{Component} from "react";
import Col from 'react-bootstrap/Col'
import './Butons.css'
import Row from "react-bootstrap/Row";
import {Form} from "react-bootstrap";
class ButtonsInput3 extends Component {
    render() {
        return (
            <>
                <Row md={12}>
                    <Col lg= {6} >
                        <Form>
                            <Form.Group controlId="SelectPlace">
                                <Form.Label>Lot Place</Form.Label>
                                <Form.Control as="select" size="lg" custom>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col lg={1}></Col>
                    <Col lg= {5} >
                        <Form>
                            <Form.Group controlId="examplePort">
                                <Form.Label>Port in the USA</Form.Label>
                                <Form.Control as="select" size="lg" custom>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </Col>
                    {/*<Col lg=''></Col>*/}

                </Row>
            </>
        )
    }

}
export default ButtonsInput3;
