import './App.css';
import React from 'react'
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
function App() {
  return (
    <div className='container1'>


            <Header/>

            <h1  >Cars delivery </h1>
          <h2>from the <span>USA</span></h2>
    <Home/>


    </div>
  );
}

export default App;
