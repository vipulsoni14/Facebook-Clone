import  Login  from './Pages/Login';
import React  from 'react';
import { BrowserRouter,Routes ,Route } from "react-router-dom";
import Register from './Pages/Register';

import './App.css'

import HomePage from './Components/HomePage';



function App() {

  


  return (
  <div>
 <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Register/>}></Route>
      <Route path="/" element={<HomePage/>}></Route>
   
    </Routes>
 </BrowserRouter>
  </div>
  );
}

export default App;
