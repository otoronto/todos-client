import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"

const Navbar = (props) => {
  return (

    <div className='nav position-relative d-flex '>
      <div className=' d-flex '>
        <ul className='ul'>
          <Link to='/'>Login </Link>
          <Link to='/todos'>Todos</Link>
        </ul>
      </div>
      <div className='position-absolute top-0 start-50 translate-middle-x'>
        <a className='site-title ' href='/About'>Task Tracker</a>
      </div>

      <div className='nav pe-2 d-flex'>
      <input id='dark'  type='checkbox' checked={props.dark} 
      onClick={() => {
        props.setDark(!props.dark)
      }


      }
      
      />
      <label htmlFor='dark' className='me-3'>Dark</label>
        <div className='me-1'>
          <i className="bi bi-person-circle"></i>
        </div>
        <div>
          
          {props.username !== ''? props.username : 'Guest'}
          
        </div>
      </div>
      
    </div>


  )

}

export default Navbar