import React from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import "./App.css"

const App = () => {
  

  return (
      <div className="App">
        <Navbar></Navbar>
    <h1>Supreme Court Justices</h1>
   
   <Home></Home>
    </div>
  )
}

export default App;
