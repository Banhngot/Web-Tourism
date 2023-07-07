import React from "react"
import Home from "../Components/Home/Home"
import Navbar from "../Components/Navbar/Navbar"
import Main from "../Components/Main/Main"
import Footer from "../Components/Footer/Footer"

function HomePage (){
    return(
        <>
        <Navbar/>
        <Home/>
        <Main/>
        <Footer/>
        </>

    )
}
export default HomePage