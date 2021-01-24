import React from "react";
import Gasoline from "../../../assets/images/gs.jpg";
import Col from "react-bootstrap/Col";
const CarHolder = (props)=> {
  const btn = document.querySelector('#root');
  btn.addEventListener('click', (e) => {
        e.target.classList.add('active1')
        console.log('hello')
    })



    return (
       <>
           <div className="carHolder" >

               <img src={props.src} alt="sed"/>

               {/*<p className="carHolder-text">GASOLINE</p>*/}
           </div>
           <input type='checkbox' id={props.id}/>
       </>

    )
}
export default CarHolder
