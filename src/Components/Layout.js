import React from "react";
import Aux from '../Hoc/Aux'
import Home from "./Home/Home";
const Layout =(props)=>(
    <Aux>
        <main className='Content1'>
            {props.children}
        </main>
    </Aux>
)
export default Layout
