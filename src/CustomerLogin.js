import React, {useState, useEffect}from "react";
import {Route, Link} from "react-router-dom";
import {withFormik, Form , Field} from "formik";
import * as Yup from "yup";
import axios from "axios";




const CustomerLogin =({values, errors, touched,status})=>{
    const [user,setUser]=useState("");
    useEffect(()=>{
      setUser(status)
      console.log("status", status)
    },[status])

   
  return (
    <div className="App">
     <div className="customer-login">
     <h1> Log in to Get Started!</h1> 
      </div>
      <Form>
      <label htmlFor="name">
          User Name
      </label>
        <Field
         id="username"
         type="text"
         placeholder="Enter your username"
         name="username"
         value={values.username}
         />
         {touched.username && errors.username && (
         <p className="errors">{errors.username}</p>
         )}
         <label htmlFor="password">
          Password
        </label>
       <Field
        type="password"
        placeholder="Enter your password"
        name="password"
        id="password"
        value={values.password}
         />
         {touched.password && errors.password && (
         <p className="errors">{errors.password}</p>
        )}
        <button type="submit"> Submit</button>
        </Form>
        </div>
            


   );
}

const LoginCustomer=withFormik({
    mapPropsToValues(props){
        console.log("customer", props)
        return{
            username:props.username || "",
            password : props.password || "",
        }
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required("UserName is required"),
        password: Yup.string().required("Password is required").min(6, "passwrod should be atleast 6 characters"),

}),
 handleSubmit(values, tools){
  axios.post("https://farmers-fresh-api.herokuapp.com/api/users/login", values)
  .then(res=> {
    tools.setStatus(res.data.user)
    tools.resetForm()
    console.log(res)
    //needs redirection
    
    
  })
  .catch(err=> console.log(err))
  
  
   
   // console.log( "login response",res))
  
}

})(CustomerLogin)

export default LoginCustomer;