import React from "react";
import aux from '../Hoc/Aux'
import Home from "./Home/Home";
const Layout =(props)=>(
    <aux>
        <main className='Content'>
            {props.children}
        </main>
    </aux>
)
export default Layout
