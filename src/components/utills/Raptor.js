import React from 'react'
import {NavLink,Link} from "react-router-dom"
const Raptor = () => {
  return (
    <div >
     <Link to ={"/products"}><button  style={{textDecoration:"none"}}>GO NOW</button></Link>
    </div>
  )
}

export default Raptor
