import React from 'react'
import { useAuth } from './Auth'
import LogOut from './LogOut';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const auth = useAuth();
  const navigate = useNavigate()
  console.log(auth);
  return (
    <div>
      <h1>This is the Profile page</h1>
      {!auth.user && <button onClick={(e) => {
        navigate('/login')
      }}>LogIn Component</button>}

      {auth.user && <div>
      <h3>Welcome newbie , {auth.user}</h3>
        <LogOut/>
        </div>}
    </div>
  )
}

export default Profile