import React from 'react'
import './App.css';
import { Routes, Route} from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';

import Footer from './Components/Footer/Footer';
import Hotel from './pages/Hotel/Hotel';
import HomePage from './pages/HomePage/HomePage';


export const App = () => {

  return (
    <>
    {/* <Navbar/> */}
    <Routes>
      <Route path="/" element = {<HomePage/>} ></Route>
      <Route path='/Hotel' element ={<Hotel/>}></Route>
    </Routes>
    {/* <Footer/> */}
    </>
  )
}

export default App;
