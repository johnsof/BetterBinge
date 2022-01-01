import './App.css';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router, 
  Routes,
  Route,
} from "react-router-dom";
import axios from 'axios'
import {Deploy} from './Component/Deploy/Deploy'
import {Register} from './Component/Register/register'

function App() {
  const [getMessage, setGetMessage] = useState({})


  return (
    <Router>
    <Routes>
      <Route path='/' element = {<Deploy/>}/>
      <Route path = '/flask/hello' element = {<Deploy />} />
      <Route path='/register' element ={<Register/>}/>
    </Routes>
    </Router>
  );
}

export default App;
