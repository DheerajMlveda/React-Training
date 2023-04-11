
import React from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {
    const params = useParams();
    const userID = params.userId
  return (
    <div>
        <h1>This is the details of  user {userID}</h1>
    </div>
  )
}

export default UserDetails