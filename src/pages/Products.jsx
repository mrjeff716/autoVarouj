import React from "react";
import { partsList } from "../util/utils.js";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRef, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const Products = ({setPage, page}) => {
  const ref = useRef();

  useEffect(() => {
    setPage("Products")
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
      duration: 500,
      once: true,
    });
  }, []);

  return (
    <div className="text-slate-800">
      <Navbar page={page} />
      <section className="mt-[15vh] px-5 scroll-mt-20" ref={ref}>
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-primary">
            Looking for something else?
          </h1>
          <p className="text-xl sm:text-2xl text-slate-800 font-light">
            These are just a selection of the parts we offer. With a wide range
            of automotive spare parts available, we can help you find the right
            part for your vehicle.
          </p>
          <div className="bg-slate-800 w-2/3 h-[0.1rem] mt-16 mb-[-1.5rem]"></div>
        </div>
      </section>
      <section className="grid grid-cols-1 px-14 sm:grid-cols-2 md:grid-cols-3 my-10 gap-5 mt-[10vh]">
        {partsList.map((p) => {
          return (
            <div
              className="aspect-square p-5 shadow-xl rounded-lg flex flex-col overflow-visible bg-background"
              data-aos="fade-up"
            >
              <img
                src={p.imageUrl}
                alt={p.alt}
                className="w-full h-64 object-contain rounded-lg"
                loading="lazy"
              />
              <div className="mt-5">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
                  {p.title}
                </h1>
                <p className="text-xl sm:text-2xl font-light">{p.content}</p>
              </div>
            </div>
          );
        })}
      </section>
      <Footer />
    </div>
  );
};

export default Products;
