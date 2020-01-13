import React ,{useState,useEffect} from "react";
import {Route} from "react-router-dom";
import {BrowserRouter as Router, Link}  from "react-router-dom"
import CustomerLogin from "./CustomerLogin";
import FarmerLogin from "./FarmerLogin";
import CustomerRegistration from "./CustomerRegistration";
import FarmerRegistration from "./FarmerRegistration";
import ListItems from "./ListItems"
import "./App.css"

function App(){
  return (
    <React.Fragment>
     <div className="App">
      <header className="App-header">
        <h1>Fresh Finds Market </h1>
      </header>
     {/* links */}
       <nav>   
      <Link  to ="/CustomerLogin">Customer Log-In</Link>
      <Link to="/FarmerLogin"> Farmer Log-In</Link>  
      <Link to="/RegisterCustomer"> Register Customer</Link>  
      <Link to="/RegisterFarmer"> Register Farmer</Link>
      <Link to="/ListItems"> List Items</Link>
      </nav>
      {/*Routes */}
       <Route  path="/CustomerLogin" component ={CustomerLogin}/>
       <Route path ="/FarmerLogin" component ={FarmerLogin}/>
       <Route path="/RegisterCustomer" component={CustomerRegistration}/>
        <Route path="/RegisterFarmer" component ={FarmerRegistration}/>
       <Route path="/ListItems" component ={ListItems}/>
      </div>
    </React.Fragment>
  )
}
export default App;