import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router'
import logo from '../media/Logo.png'

const Navbar = ({page}) => {
  const [isHamburgerMenuClicked, setIsHamburgerMenuClicked] = useState(false)
  
  return (
    <>
    <header className="fixed top-0 left-0 right-0 bg-card border-border border-b-2 h-[10vh] px-5 z-10">
  <div className="hidden sm:flex sm:justify-between sm:items-center sm:h-full">
    <img src={logo} alt="Auto Varouj Logo" className="size-16" loading="lazy"/>
    <nav className="flex items-center justify-center gap-5">
      <Link to="/" className={`cursor-pointer hover:underline hover:text-primaryHover ${page === 'Home' && 'text-primary underline'}`}>Home</Link>
      <Link to="/about" className={`cursor-pointer hover:underline hover:text-primaryHover ${page === 'About' && 'text-primary underline'}`}>About Us</Link>
      <Link to="/products" className={`cursor-pointer hover:underline hover:text-primaryHover ${page === 'Products' && 'text-primary underline'}`}>Products</Link>
      <Link to="/contact" className={`bg-[#DC2626] text-white px-7 py-2 rounded-full font-semibold cursor-pointer hover:opacity-80 transition ${page === 'Contact' && 'text-primary underline'}`}>
        Contact Us
      </Link>
    </nav>
  </div>

  <div className="flex justify-between items-center h-full sm:hidden">
    <img src={logo} alt="Auto Varouj Logo" className="size-16" loading="lazy" />
    <nav className="flex items-center justify-center gap-5">
      {!isHamburgerMenuClicked && (
        <Menu onClick={() => setIsHamburgerMenuClicked(true)} className="cursor-pointer" />
      )}
        <div className={isHamburgerMenuClicked ? "fixed top-0 bottom-0 w-[17rem] z-50 flex flex-col bg-background opacity-1 pointer-events-none transition duration-500" : "opacity-0 pointer-events-auto transition"}>
          {isHamburgerMenuClicked  && (
            <>
            <X onClick={() => setIsHamburgerMenuClicked(false)} className="cursor-pointer self-center mt-3 pointer-events-auto" />
          <div className="flex flex-1 flex-col gap-6 px-4 opacity-1 transition pointer-events-auto">
            <Link to="/" className={`cursor-pointer  hover:underline hover:text-primaryHover pointer-events-auto ${page === 'Home' && 'text-primary underline'}`}>Home</Link>
            <Link to="/about" className={`cursor-pointer hover:underline hover:text-primaryHover pointer-events-auto ${page === 'About' && 'text-primary underline'}`}>About Us</Link>
            <Link to="/products" className={`cursor-pointer hover:underline hover:text-primaryHover ${page === 'Products' && 'text-primary underline'}`}>Products</Link>
            <Link to="/contact" className={`bg-[#DC2626] text-white px-4 ml-[-0.5rem] w-32 py-2 rounded-full font-semibold cursor-pointer hover:opacity-80 transition pointer-events-auto ${page === 'Contact' && 'text-primary underline'}`}>
              Contact Us
            </Link>
          </div>
            </>
          )}
        </div>
    </nav>
  </div>
</header>
    </>
  )
}

export default Navbar
