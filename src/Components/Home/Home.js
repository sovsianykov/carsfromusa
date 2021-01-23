import './Home.css';
import React from 'react'
import './Home.css'
import Buttons from './ButtonsGroup/Buttons';
import Buttons2 from './ButtonsGroup/Buttons2';
import ButtonsInput3 from './ButtonsGroup/ButtonsInput3';
import FormGroup from 'react-bootstrap/FormGroup/'

function Home() {
    return (
        <div>
           <FormGroup id = 'form-home' >
               <h5>info about car</h5>
               <Buttons/>
               <Buttons2/>
               <ButtonsInput3/>
           </FormGroup>


        </div>
    );
}

export default Home;
