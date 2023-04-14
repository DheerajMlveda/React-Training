import React from 'react'
import { useNavigate ,useLocation } from 'react-router-dom'
function Home() {
    const location = useLocation();
    const navigate = useNavigate();
    console.log(navigate);
  return (
    <div><h1>This is the main page</h1>
    <button onClick ={() => navigate('order-summary' ,{replace:true})}>place your orders</button>
    </div>
  )
}


export default Home