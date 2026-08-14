import React from "react";
import Navbar from "../components/Navbar";
import spareParts5 from "../media/spareParts5.webp";
import { Clock, Phone, MapPinPen, Mail } from "lucide-react";
import whatsapp from "../media/whatsapp.webp";
import LogoLoop from "../components/LogoLoop";
import { imageLogos } from "../util/utils";
import Footer from "../components/Footer";
import { useRef, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const Contact = ({setPage, page}) => {
  const ref = useRef();

  useEffect(() => {
      setPage("Contact")
    }, []);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="h-screen text-muted">
      <Navbar page={page} />
      <section
        ref={ref}
        className="relative h-[250px] sm:h-[400px] md:h-[500px] lg:h-[400px] overflow-hidden mt-[10vh] flex flex-col items-center scroll-mt-20"
      >
        <img
          src={spareParts5}
          className="h-full w-full object-cover object-center"
          loading="eager"
        />
        <h1 className="absolute bottom-10 sm:bottom-36 text-xl text-center sm:text-7xl text-white border-b-[0.125rem] p-3 border-dashed font-bold rounded-lg">
          Need a spare part? Lets get you moving
        </h1>
      </section>
      <section className="mt-10 p-10 flex flex-col md:flex-row justify-between" data-aos="fade-down" data-aos-anchor="center-bottom">
        <div>
          <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl align-middle font-bold">
            <Clock className="inline-block md:size-10" /> Opening hours:
          </h1>
          <p className="underline text-xl sm:text-2xl md:text-3xl lg:text-3xl text-primaryHover font-light">
            Monday - Friday: 7:30 AM until 5:30 PM
          </p>
          <p className="underline text-xl sm:text-2xl md:text-3xl lg:text-3xl text-primaryHover font-light">
            Saturday: 7:30 AM until 2:00 PM
          </p>
          <p className="underline text-xl sm:text-2xl md:text-3xl lg:text-3xl text-primaryHover font-light">
            Sunday: Closed
          </p>
          <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl align-middle font-bold mt-5">
            <Phone className="inline-block md:size-10" /> Phone number:{" "}
            <span className="underline text-xl sm:text-2xl md:text-3xl lg:text-3xl text-primaryHover font-light">
              +961 03 454 401
            </span>
          </h1>
          <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl align-middle font-bold mt-5">
            <Mail className="inline-block md:size-10" /> Email:{" "}
            <a className="underline text-xl sm:text-2xl md:text-3xl lg:text-3xl text-primaryHover font-light" href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRnZfXlZJnZhwHGVpqstvlVWpVtnfhVVLfVFFvVcGJQLxJRPjFRlMVdHqwKGSfCRZwSsKql" target="_blank">
              vatchekojak@gmail.com
            </a>
          </h1>
          <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl align-middle font-bold mt-5">
            <Phone className="inline-block md:size-10" /> Whatsapp:{" "}
            <span className="">
              <a href="https://wa.me/96103454401" target="_blank" className="text-xl sm:text-2xl md:text-3xl lg:text-3xl text-primaryHover font-light hover:underline">
                <img
                  alt="Whatsapp logo"
                  src={whatsapp}
                  className="w-[1.5rem] h-[1.5rem] sm:w-[2.5rem] sm:h-[2.5rem] rounded-full inline-block ml-2"
                />{" "}
                Click here
              </a>
            </span>
          </h1>
          <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl align-middle font-bold mt-5">
            <MapPinPen className="inline-block md:size-10" /> Location:{" "}
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-3xl text-primaryHover font-light">
              St Joseph street 130 meters ahead of Total Energies St Joseph
              <a
                href="https://www.google.com/maps?q=33.891265869140625,35.55349349975586&z=17&hl=en"
                className="underline ml-1"
              >
                View on Google Maps
              </a>
            </span>
          </h1>
        </div>
        <div className="w-[100%] md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3311.937406063881!2d35.55091857570955!3d33.891265873217996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDUzJzI4LjYiTiAzNcKwMzMnMTIuNiJF!5e0!3m2!1sen!2slb!4v1786360058158!5m2!1sen!2slb"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
            className="rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.9)] mt-10 md:mt-0 w-[100%] md:min-w-[300px] max-w-[1000px]"
          ></iframe>
        </div>
      </section>
      <section className="p-5 mt-10 bg-card" data-aos="fade-up">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold">
          Brands We Work With:
        </h1>
        <div
          style={{ height: "auto", position: "relative", overflow: "hidden" }}
          className="my-10"
        >
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
      <section className="font-light mt-10 flex flex-col px-4" data-aos="fade-up">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-[5rem] justify-self-center underline text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-primary">
          Why choose us?
        </h1>
        <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 grid p-4">
          <div className="p-4 shadow-[0_0_30px_rgba(0,0,0,0.6)] rounded-3xl border-r-4 border-b-4 text-slate-800  border-r-slate-800 border-b-slate-800 hover:scale-105 transition">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold ">
              30+ Years of Experience
            </h1>
            <p className="text-lg sm:text-2xl md:text-3xl">
              Our experience in the automotive parts industry has given us the
              knowledge to understand what customers and garages need.
            </p>
          </div>
          <div className="p-4 shadow-[0_0_30px_rgba(0,0,0,0.6)] rounded-3xl border-l-4 border-b-4 text-slate-800  border-l-slate-800 border-b-slate-800 hover:scale-105 transition">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold ">
              Trusted by Garages
            </h1>
            <p className="text-lg sm:text-2xl md:text-3xl">
              We have built long-term relationships with garages across Lebanon
              and parts of Syria that rely on us for their spare-parts needs.
            </p>
          </div>
          <div className="p-4 shadow-[0_0_30px_rgba(0,0,0,0.6)] rounded-3xl border-t-4 border-r-4 text-slate-800  border-t-slate-800 border-r-slate-800 hover:scale-105 transition">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold ">
              Original & Trusted Brands
            </h1>
            <p className="text-lg sm:text-2xl md:text-3xl">
              We provide original parts and products from trusted brands that
              customers and professionals can depend on.
            </p>
          </div>
          <div className="p-4 shadow-[0_0_30px_rgba(0,0,0,0.6)] rounded-3xl border-t-4 border-l-4 text-slate-800  border-t-slate-800 border-l-slate-800 hover:scale-105 transition">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold ">
              A Family Legacy
            </h1>
            <p className="text-lg sm:text-2xl md:text-3xl">
              With more than 30 years of family experience, our business is
              built on relationships, trust, and values passed down through
              generations.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
