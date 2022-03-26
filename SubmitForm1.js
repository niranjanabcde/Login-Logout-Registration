import React from 'react'
import { Fade } from 'react-awesome-reveal';
import Logout from "./Logout";

const SubmitForm = (props) => {
    const{tittle,description, } = props
    const myStyle = {
        top:"50%",
        left:"50%",
        position:"absolute",
        transform:"translate(-50%, -50%)",
        textAlign:"center",
        color: '#ffffff',
        fontSize: "25px",
        fontWeight: "bold",
        textShadow: "3px 3px 3px #000"
    }
    return (
      
        <Fade delay={500}>
            <div style={myStyle}>
            <h1> {tittle} </h1>
            <p> {description} </p>  
            <Logout/>
            </div>
           
        </Fade>
    )
}

export default SubmitForm