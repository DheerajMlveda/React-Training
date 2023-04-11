import React from 'react'
import { useNavigate } from 'react-router-dom'
function OrderSummary() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Order placed succesfully</h1>
            <button onClick ={() => navigate(-1)}>Go back to homePage</button>
        </div>
    )
}

export default OrderSummary