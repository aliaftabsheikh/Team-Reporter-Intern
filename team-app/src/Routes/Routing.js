import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from '../components/Home';
import Login from '../components/Login';
import Signup from '../components/Signup';



const Routing = () => {
  return (

    <BrowserRouter>
    <Routes>
        <Route path = "/" element={<Home />} />
          <Route path = "/signup" element={<Signup />} />
          <Route path = "/login" element={<Login />} />
     
    </Routes>
  </BrowserRouter>    
     
  )
}

export default Routing
