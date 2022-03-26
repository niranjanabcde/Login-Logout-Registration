import React from 'react'
import { Fade } from 'react-awesome-reveal';

const SubmitForm = (props) => {
    const{tittles,descriptions, } = props
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
            <h1> {tittles} </h1>
            <p> {descriptions} </p>  
            </div>
           
        </Fade>
    )
}

export default SubmitForm