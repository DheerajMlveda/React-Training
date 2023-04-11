import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
   <nav style={{backgroundColor:"wheat" ,margin:'0px 0px 20px 0px' , padding:'20px 20px 20px 20px'}}>
    <NavLink  style={{margin:'10px' , fontSize:"30px"}} to='/'>Home</NavLink>
    <NavLink style={{margin:'10px', fontSize:"30px"}} to='Contact'>Contact</NavLink>
    <NavLink style={{margin:'10px', fontSize:"30px"}} to='Products'>Products</NavLink>
   </nav>
  )
}

export default Navbar