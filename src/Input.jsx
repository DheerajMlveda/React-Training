

import React from 'react'

function Input({state, setState , name ,type ,label , id  ,placeholder,isValid}) {
  return (
    <div>

      <label htmlFor={id}>{label}</label>
    <input 
      value = {type!=="gender" && state.value }
      name ={name}
      id = {id}
      type ={type}
      placeholder={placeholder}
      onChange={({ target: { value } }) => {
        if(type!=="gender"){
          console.log(state.value)
        setState({
          ...state,
          value,
          isInvalid:!isValid(value)
        });
        }
        else {
          setState({
            ...state,
            value,
            isInvalid:!isValid(value)
          })
        }
      
      }}
      onBlur={() => {
        setState({
          ...state,
          touched: true,
        });}}
        />
        {state.touched && state.isInvalid && (
        <div style={{ color: "red" }}>Invalid {name}</div>
      )}
        </div>
      
      
  )
}

export default Input