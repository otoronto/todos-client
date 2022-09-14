import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"

const Navbar = (props) => {
  return (

      <div className=' position-relative'>
        <div className='nav d-flex w-100'>
          <ul className='ul'>
          <Link  to='/'>Home </Link>
          <Link  to='/todos'>Todos</Link>
          </ul>
        </div>
        <div className='position-absolute top-0 start-50 translate-middle-x'>
          <a className='site-title ' href='/About'> Ultimate Task Tracker</a>
        </div>
        <div className='border'> {props.username}</div>

      </div>


  )
}

export default Navbar