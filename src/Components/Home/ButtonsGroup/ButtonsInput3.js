import React ,{Component} from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup'
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
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
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
