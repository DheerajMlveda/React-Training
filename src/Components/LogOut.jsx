import React from 'react'
import { useAuth } from './Auth';
import { useNavigate } from 'react-router-dom';

function LogOut() {
    const auth = useAuth();
    const navigate = useNavigate();
    const handleLogout = () => {
        auth.logOut();
        navigate('/');
    }
  return (
    <div>
        <h1>Do you really want to logout ??</h1>

        <div>
            <button onClick = { (e) => {
                handleLogout();
            }}>Log-out</button>
        </div>
    </div>
  )
}

export default LogOut;