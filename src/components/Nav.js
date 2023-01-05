import React from 'react'
import { Link } from 'react-router-dom'
import "./combined.css"
function Nav() {
  return (
    <div className='navBar'>
      <h2 ><Link to="./home" target={"_self"} className='home same'>Kalvium</Link></h2>
      <div className='subBar'>
        <h2><Link to="./contacts" className='contacts same'>Contacts</Link></h2>
        <h2 ><Link to="./about" className='about same'>About</Link></h2>
      </div>
    </div>
  )
}

export default Nav
