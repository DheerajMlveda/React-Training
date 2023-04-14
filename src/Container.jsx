import React from 'react'
import Box1 from './Box1'
import Box2 from './Box2'
import Link from './Link'
import Route from './Route'
import Box3 from './Box3'
import Box4 from './Box4'
function Container() {
  function rendering1() {
    if (window.location.pathname === "/") {
      return (
        <h1>This is the main page</h1>
      )
    }
    if (window.location.pathname === "/Box1") {
      return (
        <Box1 />
      )
    }
    else if (window.location.pathname === '/Box2') {
      return (<Box2 />)
    }
    else {
      return (
        <div>
          <h1>page not found</h1>
        </div>
      )
    }

  }
  return (
    <div>
      <h1>This is the main page</h1>
      <nav>

        <Link pathname='/Box1'>Box1</Link>
        <Link pathname='/Box2'>Box2</Link>
      </nav>
      <Route style={{ margin: "10px" }} path='/Box1' >
        <Box1/>
      </Route>
      <Route path='/Box2'>
        <Box2 />
        <Route path='"/Box2/Box3"'>
          <Box3 />
        </Route>
        <Route path='/Box2/Box4'><Box4 /></Route>

      </Route>

    </div>
  )
}

export default Container