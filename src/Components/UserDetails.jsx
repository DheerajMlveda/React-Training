
import React from 'react'
import { useParams ,useLocation} from 'react-router-dom'

function UserDetails() {
  const location = useLocation();
  console.log(location);
    const params = useParams();
    console.log(params)
    const userID = params.userId
  return (
    <div>
        <h1>This is the details of  user {userID}</h1>
        <h1>The key is  {location.key}</h1>
        {location.state && <li>{location.state.text}</li>}
    </div>
  )
}

export default UserDetails