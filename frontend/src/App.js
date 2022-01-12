import './App.css';
import React from 'react';
import {
  BrowserRouter as Router, 
  Routes,
  Route,
} from "react-router-dom";
import {Deploy} from './Component/Deploy/Deploy'
import {Register} from './Component/Register/register'
import { Home } from './Component/Home/Home';

function App() {


  return (
    <Router>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path = '/flask/hello' element = {<Deploy />} />
      <Route path='/register' element ={<Register/>}/>
    </Routes>
    </Router>
  );
}

export default App;
