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
           <div className="carHolder" >
               <img src={props.src}
                    id={props.id}
                    alt="sed"
               />
               <p className='carHolder-text'>{props.id}</p>
           </div>
           {/*<input type='checkbox' onChange={selectPic.bind()} />*/}

       </>

    )
}
export default CarHolder
