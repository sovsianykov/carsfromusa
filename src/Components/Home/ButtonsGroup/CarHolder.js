import React from "react";
import Col from "react-bootstrap/Col";
const CarHolder = (props)=> {
  const  selectPic= () => {
        let  pic= document.querySelector('img');

        pic.classList.toggle('active1')
        console.log('checked')


    }



    return (
       <>
           <div className="carHolder" >
               <img src={props.src}
                    id={props.id}
                    alt="sed"
               />
           </div>
           {/*<input type='checkbox' onChange={selectPic.bind()} />*/}

       </>

    )
}
export default CarHolder
