import React, {useState} from "react";
import {withFormik, Form , Field} from "formik";
import {Link} from "react-router-dom";
import * as Yup from "yup";

const CustomerRegistration=({values, errors, touched})=>{
   return (
   <div className="card">
        <div className="signForm">
        
            <Form>
            
                <h2> Sign up to buy some fresh local produce</h2>
                <label htmlFor="name">
                UserName
                </label>
                <Field 
                 id="UserName"
                 type="text"
                 name="UserName"
                 placeholder="Create a UserName"/>
                 {touched.userName && errors.userName && (
              <p className="errors">{errors.userName}</p>
            )}
          
                 <label htmlFor="password">
                     Password
                     </label>
                     <Field 
                     id="password"
                     type="text"
                     placeholder="Enter your password here"
                     name="password"/>
                     {touched.password && errors.password && (
                     <p className="errors">{errors.password}</p>
                     )}
                 
                 <label htmlFor="city">
                 City 
                 </label>
                 <Field 
                  id="city"
                  type="text"
                  placeholder="Enter your city here"
                  name="city"/>
                  {touched.city && errors.city && (
                     <p className="errors">{errors.city}</p>
                     )}
                
                  <label htmlFor="state">
                  State
                  </label>
                  <Field 
                  id="state"
                  type="text"
                  placeholder="Enter your state here"
                  name="state"/>
                  {touched.state && errors.state && (
                     <p className="errors">{errors.state}</p>
                     )}
                 
                 <label htmlFor="Zipcode">
                 Zipcode
                 </label>
                     <Field
                     type="number"
                     id="Zipcode"
                     placeholder="Enter your zip code here"
                     name="Zipcode"/>
                     {touched.Zipcode && errors.Zipcode && (
                     <p className="errors">{errors.Zipcode}</p>
                     )}

                 
                 <button type="submit"> Submit</button>
                </Form>
                

        </div>
    </div>
   )
}


const RegisterCustomer=withFormik({
    mapPropsToValues(props){
    console.log ("mapprops", props)
    return {
     userName : props.userName || "",
     password: props.password || "",
     city: props.city || "",
     state: props.state || "",
     Zipcode : props.Zipcode || "",
    
    }
},
validationSchema: Yup.object().shape({
    userName: Yup.string().required("UserName is required"),
    password: Yup.string().required("Password is required").min(6, "passwrod should be atleast 6 characters"),
    city: Yup.string().required("city cannot be left empty"),
    state: Yup.string().required("State is required"),
    zipCode: Yup.string().required("Zipcode is required")
  })

})(CustomerRegistration)




  export default RegisterCustomer;
  