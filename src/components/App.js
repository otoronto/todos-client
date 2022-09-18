import LoginPage from "./LoginPage";

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import TodoPage from "../pages/TodoPage";

import "bootstrap-icons/font/bootstrap-icons.css";

function App() {

  const [route, setRoute] = useState("home");

  const onRouteChange = (event) => {
    console.log()
    setRoute((prevState) => (event.target.value))
  }
  const getDarkMode = () => {
    if(!localStorage.getItem('darkMode')) localStorage.setItem('darkMode',JSON.stringify({darkMode:false}))
  }

  getDarkMode()

  console.log(localStorage.getItem('darkMode'))

  const [user,setUser] = useState("");
  const [dark, setDark] = useState()

  useEffect(() => {
    const d = localStorage.getItem('darkMode')
    const e = JSON.parse(d)
    setDark(e.darkMode)
    const name = JSON.parse(localStorage.getItem('username'))
    setUser(name.username)

  },[])


  
useEffect(() => {
  localStorage.setItem('darkMode',JSON.stringify({darkMode:dark}))
  localStorage.setItem('username',JSON.stringify({username:user}) )

},[dark,user])



  return (
    // <div style = {{ backgroundColor:"#D7E7FF" ,width: '100vw',height: '100vh'} }>
    <div >
      <BrowserRouter>
      <Navbar username={user} setDark={setDark} dark={dark}/>
      {/* <Navbar username="selam"/>k */} 
        <Routes>
          <Route path="/" element={<LoginPage dark={dark} setUser={setUser}/>} />
          <Route path="/todos" element={<TodoPage dark={dark} />} />

        </Routes>
      </BrowserRouter>

      {/* <LoginPage /> */}

      {/* {
        route === "home" ? (<LoginPage/>) :
       route === "DailyTodos" ? (<DailyTodos/>):(<DailyTodos/>)
      } */}
    </div>
  );
}



export default App;
