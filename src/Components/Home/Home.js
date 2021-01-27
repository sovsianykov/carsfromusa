import './Home.css';
import React, {useEffect, useState} from 'react'
import './Home.css'
import Buttons from './ButtonsGroup/Buttons';
import Buttons2 from './ButtonsGroup/Buttons2';
import ButtonsInput3 from './ButtonsGroup/ButtonsInput3';
import FormGroup from 'react-bootstrap/FormGroup/';
import Button from "react-bootstrap/Button";
import Aux from '../../Hoc/Aux'
import Sedan from "../../assets/images/sedan2.jpeg";
import Universal from "../../assets/images/jeep.jpeg";
import Coupe from "../../assets/images/coupe.jpeg";
import Pickup from "../../assets/images/pickup.jpeg";
import Micro from "../../assets/images/micro.jpeg";
import Hatchback from "../../assets/images/hathback.jpeg";
function Home() {





    const [selected1, setSelected] = useState({
        cars:  [
            {srcs: Sedan, id: "sedan", class: "sedan", price: 5000, selected: false},
            {srcu: Universal, id: "universal", class: "universal", price: 6000, selected: false},
            {srcc: Coupe, id: 'coupe', class: 'coupe', price: 3000, selected: false},
            {srcp: Pickup, id: 'pickup', class: 'pickup', price: 2500, selected: false},
            {srcm: Micro, id: 'micro', class: 'micro', price: 3700, selected: false},
            {srch: Hatchback, id: 'hatchback', class: 'hatchback', price: 4000, selected: false}
        ]
    })
    const  calc1 = ()=> {
        setSelected({
            cars:  [
                {srcs: Sedan, id: "sedan", class: "sedan", price: 5000, selected: true},
                {srcu: Universal, id: "universal", class: "universal", price: 6000, selected: false},
                {srcc: Coupe, id: 'coupe', class: 'coupe', price: 3000, selected: false},
                {srcp: Pickup, id: 'pickup', class: 'pickup', price: 2500, selected: true},
                {srcm: Micro, id: 'micro', class: 'micro', price: 3700, selected: false},
                {srch: Hatchback, id: 'hatchback', class: 'hatchback', price: 4000, selected: false}
            ]
        })

        let totalCar= 0
      selected1.cars.forEach(el => {
          if (el.selected) {
              totalCar += el.price
          }


        })
        console.log(totalCar)
    }
    useEffect( () => {
        console.log(selected1.cars[0].selected)
    } )

    return (
        <Aux>
           <FormGroup id = 'form-home' >
               <h5>info about car</h5>
               <Buttons  cars = {selected1.cars
               }
               />
               <Buttons2/>
               <ButtonsInput3/>
                <Button id = 'calc' onClick={calc1.bind()} >Calculate </Button>
                {/*<Button id = 'calc' onClick={selected1} >Calculate </Button>*/}
           </FormGroup>


        </Aux>
    );
}

export default Home;
