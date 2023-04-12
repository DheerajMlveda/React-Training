import React from 'react'
import { Outlet ,useSearchParams} from 'react-router-dom'
function Users() {
    const [searchParams ,setSearchParams] =useSearchParams();
  return (
    <div>
        <ul style={{margin :'auto' ,width:"50%"}}>
        <li>user 1</li>
        <li>user 2</li>
        <li>user 3</li>
        </ul>
<Outlet/>
<button onClick={ () => {setSearchParams({filter:'active'})}}>Active users</button>
<button>All users</button>
    </div>
  )
}

export default Users