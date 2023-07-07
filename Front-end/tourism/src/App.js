import React from 'react'
import './App.css';
import { Routes, Route, createBrowserRouter } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

import Hotel_Restaurant from './pages/Hotel-Restauant';
import Tour_Activiti from './pages/Tour-Activiti';
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';

export const App = () => {

  return (
    <>
     {/* <Navbar/>
     <Home />
    <Main/>
    <Footer/>  */}

    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/Hotel' element={<Hotel_Restaurant/>} />
    </Routes> 
    </>
  )
}

export default App;
