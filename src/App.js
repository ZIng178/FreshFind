import React ,{useState} from "react";
import {Route} from "react-router-dom";
import {BrowserRouter as Router, Link}  from "react-router-dom"
import CustomerLogin from "./CustomerLogin";
import FarmerLogin from "./FarmerLogin";
import CustomerRegistration from "./CustomerRegistration";
import FarmerRegistration from "./FarmerRegistration"
 
function App(){
  // farmer state 
  const [farmer,setFarmer]=useState("")
  

  // Customer state 
  const [user,setUser]=useState("")
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fresh Finds</h1>
      </header>
      <Link to ="/CustomerLogin">Customer Log-In</Link>
      <Link to="/FarmerLogin"> Farmer Log-In</Link>  
      <Link to="/RegisterCustomer"> Register Customer</Link>  
      <Link to="/RegisterFarmer"> Register Farmer</Link>
       <Route  path="/CustomerLogin" component ={CustomerLogin}/>
      
      <Route path ="/FarmerLogin" component ={FarmerLogin}/>
      <Route path="/RegisterCustomer" component={CustomerRegistration}/>
      <Route path="/RegisterFarmer" component ={FarmerRegistration}/>


    </div>
    
    
  )
}

export default App;