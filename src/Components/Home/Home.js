import './Home.css';
import React from 'react'
import './Home.css'
import Buttons from './ButtonsGroup/Buttons';
import Buttons2 from './ButtonsGroup/Buttons2';
import ButtonsInput3 from './ButtonsGroup/ButtonsInput3';
import FormGroup from 'react-bootstrap/FormGroup/'
import ButtonGroup from "react-bootstrap/ButtonGroup";

function Home() {
    return (
        <div>
            <ButtonGroup aria-label="Basic example">

           <FormGroup id = 'form-home' >
               <h5>info about car</h5>
               <Buttons/>
               <Buttons2/>
               <ButtonsInput3/>
           </FormGroup>

            </ButtonGroup>
        </div>
    );
}

export default Home;
