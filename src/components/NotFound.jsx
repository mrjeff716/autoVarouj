import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from  'react-router'

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
    <Navbar />
    <div className="h-screen mt-[10vh]">
    <div className="mt-[30rem] flex flex-col items-center sm:mt-10">
    <h1 className="text-2xl sm:text-5xl font-bold"><span className="text-2xl sm:text-5xl text-primary">Error: </span>Page not found</h1>
    <span className="text-xl sm:text-2xl font-light mt-2"><Link to="/" className="cursor-pointer underline text-primaryHover pointer-events-auto">Click Here</Link> To go to the home page.</span>
    </div>
  </div>
    <Footer/>
    </div>
  )
}

export default NotFound
