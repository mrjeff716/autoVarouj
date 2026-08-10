import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import spareParts2 from '../media/spareParts2.webp';
import TextType from '../components/TextType';
import LogoLoop from '../components/LogoLoop';
import { imageLogos } from '../util/utils';
import bmwm5 from '../media/bmwm5.webp'
import fiatimg from '../media/fiatimg.webp'
import minicooper2img from '../media/minicooper2img.webp'
import { Link } from 'react-router'
import { PhoneIncoming } from 'lucide-react';
import whatsapp from '../media/whatsapp.webp'
import { useRef, useEffect } from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos';


const About = () => {
  const ref = useRef()
  
    useEffect(() => {
      if (ref.current) {
        ref.current.scrollIntoView({
          behavior: 'smooth'
        })
      }
    }, [])

    useEffect(() => {
          AOS.init({
          duration: 800,
          once: true,
        });
      }, []);

  return (
    <div className="bg-background h-screen text-muted">
      <Navbar />
      <section ref={ref} className="relative h-[250px] sm:h-[400px] md:h-[500px] lg:h-[400px] overflow-hidden mt-[10vh] flex flex-col items-center scroll-mt-20">
      <img src={spareParts2} className="h-full w-full object-cover object-center" loading="eager"/>
      <h1 className="absolute bottom-36 text-5xl sm:text-7xl text-white border-4 p-3 border-dashed font-semibold rounded-md">About Us</h1>
      <TextType
      className="absolute bottom-12 text-4xl sm:text-6xl p-3 text-white bg-slate-800 rounded-xl"
      text={["Built on Trust", "Driven by Quality"]}
      typingSpeed={85}
      pauseDuration={1200}
      showCursor
      cursorCharacter="|"
      texts={["Built on Trust", "Driven by Quality"]}
      deletingSpeed={30}
      variableSpeedEnabled={false}
      variableSpeedMin={60}
      variableSpeedMax={120}
      cursorBlinkDuration={0.5}
    />
      </section>
      <section className="px-5 bg-background">
      <h1 className="text-3xl sm:text-5xl font-bold mt-10">Our Beginning:</h1>
      <p className="text-lg sm:text-2xl font-medium" data-aos="fade-in">
        For more than 30 years, our business has been built on experience, trust, and a passion for the automotive industry.
        What began as a family business, passed down from one generation to the next, has grown into a trusted source for automotive spare parts. After inheriting the business from his father, who continues to operate another branch in Bchamoun, our father dedicated himself to growing the business and building strong relationships with customers across the region.
      </p>
      <h1 className="text-3xl sm:text-5xl font-bold mt-10">Growing The Business:</h1>
      <p className="text-lg sm:text-2xl font-medium" data-aos="fade-in">
        Through years of hard work, dedication, and a commitment to quality, the business continued to grow. From its early days of traditional advertising to becoming a trusted supplier for garages and customers, we have always focused on providing reliable parts from original and trusted brands.
      </p>
      <h1 className="text-3xl sm:text-5xl font-bold mt-10">Building trust:</h1>
      <p className="text-lg sm:text-2xl font-medium" data-aos="fade-in">
        Today, our relationships extend across Lebanon and into parts of Syria, with garages relying on us to help them find the parts they need for the vehicles they work on.
      </p>
      <h1 className="text-3xl sm:text-5xl font-bold mt-10">Today:</h1>
      <p className="text-lg sm:text-2xl font-medium" data-aos="fade-in">
        More than 30 years later, the same values remain at the heart of what we do: quality parts, honest service, and relationships built to last.
      </p>
      </section>
      <section className="font-light mt-10">
      <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-[5rem] justify-self-center underline text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-primary">Why choose us?</h1>
      <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 grid p-4">
        <div data-aos="fade-up" className="p-4 shadow-[0_0_30px_rgba(0,0,0,0.6)] rounded-3xl border-r-4 border-b-4 text-slate-800  border-r-slate-800 border-b-slate-800 hover:scale-105 transition">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold ">
            30+ Years of Experience 
          </h1>
          <p className="text-lg sm:text-2xl md:text-3xl">Our experience in the automotive parts industry has given us the knowledge to understand what customers and garages need.</p>
        </div>
        <div data-aos="fade-up" className="p-4 shadow-[0_0_30px_rgba(0,0,0,0.6)] rounded-3xl border-l-4 border-b-4 text-slate-800  border-l-slate-800 border-b-slate-800 hover:scale-105 transition">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold ">
            Trusted by Garages  
          </h1>
          <p className="text-lg sm:text-2xl md:text-3xl">We have built long-term relationships with garages across Lebanon and parts of Syria that rely on us for their spare-parts needs.</p>
        </div>
        <div data-aos="fade-up" className="p-4 shadow-[0_0_30px_rgba(0,0,0,0.6)] rounded-3xl border-t-4 border-r-4 text-slate-800  border-t-slate-800 border-r-slate-800 hover:scale-105 transition">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold ">
            Original & Trusted Brands
          </h1>
          <p className="text-lg sm:text-2xl md:text-3xl">We provide original parts and products from trusted brands that customers and professionals can depend on.</p>
        </div>
        <div data-aos="fade-up" className="p-4 shadow-[0_0_30px_rgba(0,0,0,0.6)] rounded-3xl border-t-4 border-l-4 text-slate-800  border-t-slate-800 border-l-slate-800 hover:scale-105 transition">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold ">
            A Family Legacy
          </h1>
          <p className="text-lg sm:text-2xl md:text-3xl">With more than 30 years of family experience, our business is built on relationships, trust, and values passed down through generations.</p>
        </div>
      </div>
    </section>
    <section className="flex flex-col mt-10 p-4">
      <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-[5rem] justify-self-center border-b-2 border-b-slate-800">Over 3 decades:</h1>
      <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 grid gap-8">
        <div data-aos="fade-up" data-aos-duration="1000" className="relative">
          <img src={bmwm5} alt="BMW m5 image" loading="lazy" className="rounded-2xl"/>
          <h1 className="text-white absolute bottom-16 left-5 text-3xl md:text-4xl lg:text-5xl"><strong className="text-slate-300">Thousands</strong> of Happy customers</h1>
        </div>
        <div data-aos="fade-up" data-aos-duration="1700" className="relative">
          <img src={fiatimg} alt="Fiat image" loading="lazy" className="rounded-2xl"/>
          <h1 className="text-white absolute bottom-16 left-5 text-3xl md:text-4xl lg:text-5xl"><strong className="text-">2</strong> Generations of Experience</h1>
        </div>
        <div data-aos="fade-up" data-aos-duration="2400" className="relative">
          <img src={minicooper2img} alt="Fiat image" loading="lazy" className="rounded-2xl"/>
          <h1 className="text-white absolute bottom-16 left-5 text-3xl md:text-4xl lg:text-5xl"><strong className="text-slate-300">Lebanon</strong> and <strong className="text-slate-300">Syria</strong> Garage Network Trusted Partners</h1>
        </div>
      </div>
    </section>
    <section className="p-5 mt-10 bg-card" data-aos="fade-up" data-aos-delay="500">
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
      <section className="flex-col flex md:flex-row justify-between items-center mt-10 mx-6" data-aos="fade-in">
      <div className="self-center md:self-end p-0 sm:p-4 md:p-7 flex">
    <PhoneIncoming className="border-4 border-black border-dashed rounded-full p-6 size-40 sm:size-60"/>
    </div>
    <div className="p-0 sm:p-4 md:p-7 self-start">
      <h1 className="text-4xl sm:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r to-slate-800 from-primary">Keep Your Vehicle Alive</h1>
      <h2 className="text-xl sm:text-2xl">Find The Right Part For Your Vehicle</h2>
      <h3 className="text-xl sm:text-2xl mb-10">Quality parts and expert customer support when you need it</h3>
      <div className="flex gap items-center">
      <a href="https://wa.me/96103454401?text=Hello%2C%20I%20would%20like%20to%20purchase%20parts%20for%20my%20vehicle" className="relative bg-[#208810] text-white px-4 ml-[-0.5rem] w-62 py-2 rounded-full font-semibold cursor-pointer hover:opacity-80 transition pointer-events-auto">
        Contact Now on Whatsapp <img alt="Whatsapp logo" src={whatsapp} className="w-[2.5rem] h-[2.5rem] rounded-full inline-block ml-2"/>
      </a>
      </div>
    </div>
    </section>
      <Footer />
    </div>
  )
}

export default About
