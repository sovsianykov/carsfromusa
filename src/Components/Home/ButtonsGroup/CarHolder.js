import React from "react";
const CarHolder = (props)=> {
  // const  selectPic= () => {
  //       let  pic= document.querySelector('img');
  //
  //       pic.classList.toggle('active1')
  //       console.log('checked')
  //
  //
  //   }



    return (
       <>
           <p className='carHolder-text'>{props.id} </p>
           <div className="carHolder" >
               <img src={props.src}
                    className={props.class}
                    id={props.id}
                    alt="sed"
               />
           </div>


           <input type='checkbox'  onClick={props.onClick}  className={props.class}
           />

       </>

    )
}
export default CarHolder;
