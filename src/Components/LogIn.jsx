// import React from 'react'
import { useState } from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom';

function LogIn() {
    const [user, setUser] = useState('')
    const navigate = useNavigate();
    const auth = useAuth();
    const handleLogIn = () => {
        auth.logIn(user)
        console.log(auth.user)
        navigate('/')
    }
    return (
        <div><h1>This is login page</h1>
            <div>
                Enter your username : <input type='text' placeholder='hello' onChange={e => {
                    console.log(e.target.value);
                    setUser(e.target.value)
                }} />

                <button onClick={handleLogIn}>Log-In</button>
            </div>


        </div>
    )
}

export default LogIn