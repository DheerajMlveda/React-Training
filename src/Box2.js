import React from 'react'
import Route from './Route'
import Link from './Link'
import {Outlet} from "react-router-dom"

function Box2() {
  return (
    <div>
        <h3>This is Box 2</h3>
        <Link pathname="/Box2/Box3">
        Box3</Link>
        <Link pathname="/Box2/Box4">
        Box4</Link>
        <Outlet/>
    </div>
  )
}

export default Box2