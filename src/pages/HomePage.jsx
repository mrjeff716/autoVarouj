import React from 'react'
import { Link } from 'react-router'
import Navbar from '../components/Navbar'
import bmw from '../media/BMW.webm'
import TextType from '../components/TextType';
import LogoLoop from '../components/LogoLoop';
import { imageLogos } from '../util/utils.js'
import CarsList from '../components/CarsList';
import whatsapp from '../media/whatsapp.webp'
import { PhoneIncoming } from 'lucide-react';
import Footer from '../components/Footer'
import PartsList from '../components/PartsList'
import { useRef, useEffect } from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos';

const HomePage = ({setPage, page}) => {
    const ref = useRef()

    useEffect(() => {
      setPage("Home")
    }, [])
  
    useEffect(() => {
      if (ref.current) {
        ref.current.scrollIntoView({
          behavior: 'smooth'
        })
      }
    }, [])

      useEffect(() => {
      AOS.init({
      duration: 500,
      once: true,
    });
  }, []);

  return (
    <div className="bg-background h-screen text-muted">
      <Navbar page={page} />
    <section ref={ref} className="relative h-[400px] sm:h-[400px] md:h-[500px] lg:h-[500px] overflow-hidden mt-[10vh] scroll-mt-20" data-aos="fade-in" data-aos-duration="1000">
  <video
  loading="eager"
  autoPlay
  muted
  loop
  playsInline
  className="
    absolute
      inset-0
      h-full
      w-full
      object-cover

      scale-100
      sm:scale-100s
      max-sm:scale-150
      max-sm:object-center
  "
>
  <source src={bmw} type="video/mp4" />
</video>
<div className="absolute top-4 left-10 text-white font-semibold">
  <h1 className="text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold">Premium Auto Spare Parts</h1>
  <TextType
  className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl"
  text={["Premium spare parts for European vehicles", "Your trusted source for BMW, Mini Cooper, Fiat, Alfa Romeo, and Lada parts."]}
  typingSpeed={85}
  pauseDuration={1200}
  showCursor
  cursorCharacter="|"
  texts={["Premium spare parts for European vehicles, built around quality and reliability.","Your trusted source for BMW, Mini Cooper, Fiat, Alfa Romeo, and Lada components."]}
  deletingSpeed={30}
  variableSpeedEnabled={false}
  variableSpeedMin={60}
  variableSpeedMax={120}
  cursorBlinkDuration={0.5}
/>
</div>
<div className="absolute bottom-12 left-10">
  <Link to="/contact" className="px-[5rem] py-4 bg-[#DC2626] text-white sm:px-[8rem] sm:py-6 md:px-[10rem] md:py-6 rounded-full font-semibold cursor-pointer hover:opacity-80 transition">Request Parts</Link>
</div>
</section>
<section className="px-5 my-[5rem] text-2xl sm:text-3xl sm:my[6rem] md:text-4xl mt-[2rem] lg:text-4xl font-light">
  <span className="[text-shadow:0px_6px_10px_rgba(0,0,0,0.35)]">With over 50 years of experience, we provide authentic, new, and original car spare parts from our shop in Dora.
  We are committed to delivering reliable products and trusted service to customers across Lebanon, Syria, and Jordan. <Link to="/about" className="[text-shadow:0px_6px_10px_rgba(0,0,0,0.35)] text-primary font-bold hover:underline">Learn more...</Link></span>
</section>
<section className="p-5 mt-10 bg-card" data-aos="fade-up" data-aos-anchor-placement="center-bottom"> 
    <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold">Brands We Work With:</h1>
    <div style={{ height: 'auto', position: 'relative', overflow: 'hidden'}} className="my-10">
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={imageLogos}
        speed={100}
        direction="left"
        logoHeight={60}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
</section>
<section className="px-10 mb-[8rem] mt-[7rem] flex flex-col items-center">
  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-[5rem] justify-self-center">Cars We Work With:</h1>
  <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="800"><CarsList /></div>
</section>
<section className="mb-10">
    <PartsList />
  </section>
    <section className="font-light bg-background">
      <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-[5rem] justify-self-center underline text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-primary">Why choose us?</h1>
      <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 grid p-4">
        <div data-aos="fade-up" className="p-4 shadow-[0_0_30px_rgba(0,0,0,0.6)] rounded-3xl border-t-4 text-slate-800  border-t-slate-800 hover:scale-105 transition">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold ">
            Quality You Can Trust ✅
          </h1>
          <p className="text-lg sm:text-2xl md:text-3xl">We provide high-quality automotive parts from trusted brands, ensuring reliability, durability, and performance for your vehicle.</p>
        </div>
        <div data-aos="fade-up" className="p-4 shadow-[0_0_30px_rgba(0,0,0,0.6)] rounded-3xl border-t-4 text-slate-800  border-t-slate-800 hover:scale-105 transition">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold ">
            Wide Range of Parts ⚙️ 
          </h1>
          <p className="text-lg sm:text-2xl md:text-3xl">From essential components to specialized parts, we offer a diverse selection to help you find exactly what your vehicle needs.</p>
        </div>
        <div data-aos="fade-up" className="p-4 shadow-[0_0_30px_rgba(0,0,0,0.6)] rounded-3xl border-t-4 text-slate-800  border-t-slate-800 hover:scale-105 transition">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold ">
            Competitive Prices 💵
          </h1>
          <p className="text-lg sm:text-2xl md:text-3xl">We offer fair and affordable prices while maintaining excellent quality, giving you the best value for your money.</p>
        </div>
        <div data-aos="fade-up" className="p-4 shadow-[0_0_30px_rgba(0,0,0,0.6)] rounded-3xl border-t-4 text-slate-800  border-t-slate-800 hover:scale-105 transition">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold ">
            Fast & Reliable Delivery📦
          </h1>
          <p className="text-lg sm:text-2xl md:text-3xl">We understand the importance of keeping your vehicle running. That's why we focus on quick processing and dependable service.</p>
        </div>
      </div>
    </section>
    <section className="flex-col flex md:flex-row justify-between items-center mt-10 mx-6" data-aos="fade-in">
      <div className="self-center md:self-end p-0 sm:p-4 md:p-7 flex">
    <PhoneIncoming className="border-4 border-black border-dashed rounded-full p-6 size-40 sm:size-60"/>
    </div>
    <div className="p-0 sm:p-4 md:p-7 self-start">
      <h1 className="text-4xl sm:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r to-slate-800 from-primary">Keep Your Vehicle Alive</h1>
      <h2 className="text-xl sm:text-2xl">Find The Right Part For Your Vehicle</h2>
      <h3 className="text-xl sm:text-2xl mb-10">Quality parts and expert customer support when you need it</h3>
      <div className="flex gap items-center">
      <a href="https://wa.me/96103454401?text=Hello%2C%20I%20would%20like%20to%20purchase%20parts%20for%20my%20vehicle" target="_blank" className="relative bg-[#208810] text-white px-4 ml-[-0.5rem] w-62 py-2 rounded-full font-semibold cursor-pointer hover:opacity-80 transition pointer-events-auto">
        Contact Now on Whatsapp <img alt="Whatsapp logo" src={whatsapp} className="w-[2.5rem] h-[2.5rem] rounded-full inline-block ml-2"/>
      </a>
      </div>
    </div>
    </section>
    <Footer />
    </div>
  )
}

export default HomePage
