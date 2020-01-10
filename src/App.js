import React ,{useState,useEffect} from "react";
import {Route} from "react-router-dom";
import {BrowserRouter as Router, Link}  from "react-router-dom"
import CustomerLogin from "./CustomerLogin";
import FarmerLogin from "./FarmerLogin";
import CustomerRegistration from "./CustomerRegistration";
import FarmerRegistration from "./FarmerRegistration";
import ListItems from "./ListItems"

function App(){
  // const [farmItems, setFarmItems] = useState();
  // useEffect(() => {
  //   axios
  //     .get("https://farmers-fresh-api.herokuapp.com/api/produce/")
  //     .then(res => {
  //       console.log("App.js, GET PRODUCE RES: ", res);
  //       setFarmItems(res.data);
  //     })
  //     .catch(err => console.log(err));
  // }, []);
  // console.log("App.js, farmItems: ", farmItems);

  return (
    <React.Fragment>
    {/* <div className="farm-items">
    {farmItems.map(item=>{
      return <Data/>
    })}
     </div> */}
    <div className="App">
      <header className="App-header">
        <h1>Fresh Finds</h1>
      </header>
      <Link to ="/CustomerLogin">Customer Log-In</Link>
      <Link to="/FarmerLogin"> Farmer Log-In</Link>  
      <Link to="/RegisterCustomer"> Register Customer</Link>  
      <Link to="/RegisterFarmer"> Register Farmer</Link>
      <Link to="/ListItems"> List Items</Link>

      
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