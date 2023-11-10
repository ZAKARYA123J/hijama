
import './App.css';
import Home from './compent/home';
import Nvbar from './compent/navbar';
import Login from './compent/logine';
import Reservation from './compent/reservation';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React, { useState, useEffect } from 'react';


function App() {


  return (
    <>
    <div>
      
      <Router>
        <Routes>
          
        <Route path='/logine' Component={Login} />
        <Route path='/reserve' Component={Reservation} />
        <Route path='/' Component={Bimo} />
        </Routes>
      </Router>
      
      
    </div>
    </>
  );
  }
  function Bimo(){
    return(
      <>
<Nvbar/>
      <Home/>
      </>
    )
  }
  

export default App;
