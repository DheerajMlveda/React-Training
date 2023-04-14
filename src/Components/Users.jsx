import React from 'react'
import { Outlet, useSearchParams ,useLocation, Link } from 'react-router-dom'
function Users() {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get('filter')==='active'
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <ul style={{ margin: 'auto', width: "50%" }}>
        <li>
          <Link to='1'>user 1</Link>
          </li>
        <li>
          <Link to='2' state={{name:'2' , text:'HIiiii'}}>user 2</Link>
          </li>
       <li> <Link to='3'>user 3</Link></li>

      </ul>

      <Outlet />
      <button onClick={() => { setSearchParams({ filter: 'active' }) }}>Active users</button>
      <button onClick={() => { setSearchParams({}) }}>All users</button>
      {
        showActiveUsers ? <h2>Showing active users </h2>: <h2>Showing all users</h2>
      }
    </div>
  )
}

export default Users