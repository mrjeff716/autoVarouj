import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <footer className="px-[2rem] bg-slate-800 h-auto w-auto mt-10 sm:px-[5rem] py-[4rem]">
      <h1 className="text-2xl mb-3 sm:text-3xl font-extrabold text-white sm:mb-10">Varouj and sons</h1>
      <h2 className="text-xl sm:text-3xl font-light text-white mb-10">Your trusted destination for quality automotive spare parts. We provide reliable components from trusted brands to help keep your vehicle performing at its best.</h2>
      <div className="grid-cols-1 w-[100%] grid sm:grid-cols-2 lg:grid-cols-3  gap-24">
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold text-white">Phone</h1>
          <p className="text-2xl font-light text-white">+961 03 454 401</p>
          <h1 className="text-2xl font-semibold text-white mt-4">Send Us a Quick Email</h1>
          <p className="text-2xl font-light text-white">example@example.com</p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold text-white">Location</h1>
          <p className="text-2xl font-light text-white">St Joseph street 130 meters ahead of Total Energies St Joseph 
            <a href="https://www.google.com/maps?q=33.891265869140625,35.55349349975586&z=17&hl=en" className="underline ml-1">View on Google Maps</a>
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold text-white">Links</h1>
          <Link className="text-2xl font-light text-white hover:underline" to="/">Home</Link>
          <Link className="text-2xl font-light text-white hover:underline" to="/about">About Us</Link>
          <Link className="text-2xl font-light text-white hover:underline" to="/contact">Contact Us</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
