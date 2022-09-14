import LoginPage from "./LoginPage";

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
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

  const [user,setUser] = useState("");

  return (
    <div>
      
      <BrowserRouter>
      <Navbar username={user}/>
      {/* <Navbar username="selam"/>k */}
        <Routes>
          <Route path="/" element={<LoginPage setUser={setUser}/>} />
          <Route path="/todos" element={<TodoPage />} />

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
