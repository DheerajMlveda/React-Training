


import React from 'react'

function Content(props) {
  return (
    <div>

    {props.children}
    <div style={{position:"absolute" }}> {props.left}</div>
    <div  style={{position:"sticky" }} > {props.right}</div>
    </div>
  )
}

export default Content