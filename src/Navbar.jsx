import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './Components/Auth'

function Navbar() {
  const auth = useAuth();
  return (
   <nav style={{backgroundColor:"wheat" ,margin:'0px 0px 20px 0px' , padding:'20px 20px 20px 20px'}}>
    <NavLink  style={{margin:'10px' , fontSize:"30px"}} to='/'>Home</NavLink>
    <NavLink style={{margin:'10px', fontSize:"30px"}} to='Contact'>Contact</NavLink>
    <NavLink style={{margin:'10px', fontSize:"30px"}} to='Products'>Products</NavLink>
    <NavLink style={{margin:'10px', fontSize:"30px"}} to='users'>Users</NavLink>
    <NavLink style={{margin:'10px', fontSize:"30px"}} to='profile'>Profile</NavLink>
    {
      !auth.user && <NavLink style={{margin:'10px', fontSize:"30px"}} to='login'>Log-In</NavLink>
    }
   </nav>
  )
}

export default Navbar