import { AiFillCloseCircle } from "react-icons/ai";
// import { Component } from "react";
// import "./DisplayError.css"


function DisplayError({toggle ,error , errorMessage}){

   
    if(error && toggle)
        return(
            <section><AiFillCloseCircle color="red"/> &nbsp;&nbsp;{errorMessage}</section>
        )
    }





export default DisplayError