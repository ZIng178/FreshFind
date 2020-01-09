import React from "react";
import {Route, Link} from "react-router-dom"
import {Formik} from "formik";
import * as Yup from "yup"

const FarmerLogin =()=>(
    <Formik
     initialValues={{email : "", password :""}}
     onSubmit ={(values,{setSubmitting})=>{
         setTimeout(()=>{
         console.log("log in the values ", values)
         },500)

     }}
     //validation 

     validationSchema={Yup.object().shape({
         email:Yup.string()
         .email()
         .required("required"),

         password:Yup.string()
         .required("No password Provided")
         .min(8 , "Password is too short -should be atleast 8 characters")
         
     })}
     >
      
      {
          props =>{
              const {
              values,
              touched,
              errors,
              isSubmitting,
              handleChange, 
             handleSubmit
              }=props;
             return (
             < form autoComplete="off" onSubmit={handleSubmit}>
             <label htmlFor= "email"> Email</label>
             <input 
             type="text" 
             value={values.email} 
             name="email"
              placeholder="Enter your email"
            onChange={handleChange}
            className={errors.email && touched.email && "error"}
            
              />

              {errors.email && touched.email &&(
                  <div className="input-feedback">{errors.email}</div>
              )}
             <label htmlFor= "password"> Password
             </label>
             <input 
             type="text"
             value={values.password} 
             name="password" 
             onChange={handleChange}
             placeholder="Enter your password"
            className={errors.password && touched.password}
             />
             {errors.password && touched.password
             &&(
                 <div className="input-feedback">
                     {errors.password}
                 </div>
             )}
             <button type="submit" disabled={isSubmitting}> Login</button>
             </form>
             )
      }
   
}

</Formik>
);

export default FarmerLogin;