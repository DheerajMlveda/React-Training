import React from 'react'
import { useNavigate } from 'react-router-dom'
function Home() {
    const navigate = useNavigate();
  return (
    <div><h1>This is the main page</h1>
    <button onClick ={() => navigate('order-summary' ,{replace:true})}>place your orders</button>
    </div>
  )
}

export default Home