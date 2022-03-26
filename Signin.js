import React, { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import { Person, Lock } from "@material-ui/icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import SubmitForm1 from "./SubmitForm1";
import  {Link } from 'react-router-dom';


const SignIn = () => {
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email address is required"),
      password: Yup.string().min(5).required("Password is required"),
    }),

    onSubmit: (values) => {
      console.log(values);
      setIsSubmitSuccess(true)
    },
  });

  return (
    <div className="container">
      <div className={!isSubmitSuccess ? "signin signin_wrapper" : "signin signin_success"} style={{margin:"100px"}}>
        {isSubmitSuccess ? (
          <SubmitForm1 tittle="Welcome!" 
          description="You are Logged In "
          />
        ) : (
          <form onSubmit={formik.handleSubmit}>
            <h2>Login Form</h2>
            <TextField
              name="email"
              type="text"
              placeholder="Email"
              className="textField"
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <Person />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />

            {formik.touched.email && formik.errors.email ? (
              <div className="error_msg">{formik.errors.email}</div>
            ) : null}

            <TextField
              name="password"
              type="password"
              placeholder="Password"
              className="textField"
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <Lock />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error_msg">{formik.errors.password}</div>
            ) : null}

            <button type="submit">Login</button>
            <h3> Not a member? <Link to="/signup" className="signup">Signup now</Link></h3>
           

          </form>
        )}
      </div>
    </div>
  );
};

export default SignIn;