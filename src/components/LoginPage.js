import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const LoginPage =(props) => { 

  const nav = useNavigate();
  
  const [a,b]=useState()

    return (
        <div>
        <div className="App container d-flex justify-content-center align-items-center" style={{height:"80vh"}} >
        <div className='col-2  text-center'>
  
          <div className='mb-3'>
            {/* <div>
              <label>Username</label>
            </div> */}
            {/* <input className='w-100' placeholder='username...' onChange={(event)=>setUser(event.target.value)}/> */}
            <input className='w-100' placeholder='username...' onChange={(event)=>b(event.target.value)}/>
          </div>
          <div>
            {/* <button onClick={() => nav("/DailyTodos")} className='btn btn-primary'>Hadi Başlayalım!</button> */}
            <button onClick={() => {nav("/DailyTodos"); props.setUser(a)} } className='btn btn-primary'>Hadi Başlayalım!</button>
          </div>
        </div>
      </div>
      </div>
    )
}

export default LoginPage;