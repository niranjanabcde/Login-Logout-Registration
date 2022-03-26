import React, { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import { Person, Lock ,Email,AlarmOn,Phone} from "@material-ui/icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import SubmitForm2 from "./SubmitForm2";
import  {Link } from 'react-router-dom';



const Signup = () => {
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstname:"",
      lastname:"",
      email: "",
      password: "",
      confirmpassword:"",
      phonenumber:"",
    },
    validationSchema: Yup.object({
         firstname: Yup.string()
        .required("firstname is required"),
         lastname: Yup.string()
        .required("lastname is required"),
        email: Yup.string()
        .email("Invalid email address")
        .required("Email address is required"),
      password: Yup.string().min(5).required("Password have 1 upper case, 1 lower case, 1 alphabet ,1 special character and min 5 and max 12 character password"),
      confirmpassword: Yup.string().oneOf([Yup.ref('password')],"password doesn`t match").required("Password is required"),
      phonenumber: Yup.string().required("Phone number is required").min(10,"too short!").max(10,"too long!"),
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
          <SubmitForm2 tittles="Congractulations!" 
          descriptions="You are registered Successfully "
          />
        ) : (
          <form onSubmit={formik.handleSubmit}>
            <h2>Signup Form</h2>

            <TextField
              name="firstname"
              type="text"
              placeholder="FirstName"
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
              value={formik.values.firstname}
            />

            {formik.touched.firstname && formik.errors.firstname? (
              <div className="error_msg">{formik.errors.firstname}</div>
            ) : null}


              <TextField
              name="lastname"
              type="text"
              placeholder="LastName"
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
              value={formik.values.lastname}
            />

            {formik.touched.lastname && formik.errors.lastname? (
              <div className="error_msg">{formik.errors.lastname}</div>
            ) : null}
   
             <TextField
              name="email"
              type="text"
              placeholder="Email"
              className="textField"
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <Email />
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
              //type="password"
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


             <TextField
              name="confirmpassword"
              //type="confirmpassword"
              placeholder="ConfirmPassword"
              className="textField"
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <AlarmOn />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmpassword}
            />
            {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
              <div className="error_msg">{formik.errors.confirmpassword}</div>
            ) : null}

             <TextField
              name="phonenumber"
             // type="phonenumber"
              placeholder="PhoneNumber"
              className="textField"
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <Phone/>
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phonenumber}
            />
            {formik.touched.phonenumber && formik.errors.phonenumber? (
              <div className="error_msg">{formik.errors.phonenumber}</div>
            ) : null}

            <button type="submit">Register</button>
            <h3> Already have an account? <Link to="/" className="signup">Login now</Link></h3>
          </form>
        )}
      </div>
    </div>
  );
};

export default Signup;