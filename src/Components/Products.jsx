import React from 'react'
import {  Link ,Outlet} from 'react-router-dom'
function Products() {
  return (
    <div >
        <h1>
            This is the product page
            </h1>
            <div>
        <input placeholder='Enter product name'/>
        <hr/>
            </div>
         <nav>
            <Link  style ={{margin:'10px' , fontFamily:"sans-serif"}} to="new" >New</Link>
            <Link  style ={{margin:'10px' , fontFamily:"sans-serif"}} to="featured" >Featured</Link>
         </nav>
         <Outlet/>
    </div>
  )
}

export default Products