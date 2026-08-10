import { ArrowLeft, ArrowRight } from "lucide-react";
import { carsList } from "../util/utils.js";
import React, { useState } from "react";

const CarsList = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const changeImage = (newIndex) => {
    setFade(false);

    setTimeout(() => {
      setIndex(newIndex);
      setFade(true);
    }, 300);
  };

  const next = () => {
    changeImage((index + 1) % carsList.length);
  };

  const previous = () => {
    changeImage(
      index === 0 ? carsList.length - 1 : index - 1
    );
  };

  return (
    <>
    <div className="hidden md:flex md:justify-between md:items-center">
      <ArrowLeft
        className="size-10 sm:size-14 cursor-pointer bg-gray-500 text-white p-2 rounded-full hover:opacity-80 transition"
        onClick={previous}
      />

      <div className=" mx-2 p-4 bg-white sm:p-6 sm:w-[40%] md:w-[60%] lg:w-[40%] flex flex-col items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.7)] rounded-xl">
        <img
          alt={carsList[index].alt}
          loading="lazy"
          src={carsList[index].imageUrl}
          className={` sm:transition-opacity sm:duration-300 rounded-xl ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        />

        <h1 className="text-3xl sm:text-7xl font-light">{carsList[index].title}</h1>
        <p className="text-xl sm:text-2xl font-light">{carsList[index].content}</p>
      </div>

      <ArrowRight
        className="size-10 m-0 sm:size-14 cursor-pointer bg-gray-500 text-white p-2 rounded-full hover:opacity-80 transition"
        onClick={next}
      />
    </div>
    <div className="flex flex-col items-center md:hidden">
      <div className="w-[100%] mx-2 p-4 bg-white sm:p-6 sm:w-[80%] flex flex-col items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.7)] rounded-xl">
        <img
          alt={carsList[index].alt}
          src={carsList[index].imageUrl}
          loading="lazy"
          className={` sm:transition-opacity sm:duration-300 rounded-xl ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        />

        <h1 className="text-3xl sm:text-7xl font-light">{carsList[index].title}</h1>
        <p className="text-xl sm:text-2xl font-light">{carsList[index].content}</p>
      </div>

      <div className="flex gap-4 mt-[2rem]">
      <ArrowLeft
        className="size-10 sm:size-14 cursor-pointer bg-gray-500 text-white p-2 rounded-full hover:opacity-80 transition"
        onClick={previous}
      />

      <ArrowRight
        className="size-10 m-0 sm:size-14 cursor-pointer bg-gray-500 text-white p-2 rounded-full hover:opacity-80 transition"
        onClick={next}
      />
      </div>
    </div>
    <div className="mt-[1rem] flex items-center justify-center">
    <span className={`text-5xl ${index === 0 ? 'text-red-500 text-7xl' : ''}`}>•</span>
    <span className={`text-5xl ${index === 1 ? 'text-red-500 text-7xl' : ''}`}>•</span>
    <span className={`text-5xl ${index === 2 ? 'text-red-500 text-7xl' : ''}`}>•</span>
    <span className={`text-5xl ${index === 3 ? 'text-red-500 text-7xl' : ''}`}>•</span>
    <span className={`text-5xl ${index === 4 ? 'text-red-500 text-7xl' : ''}`}>•</span>
  </div>
  <div className="flex justify-center">
      <p className="text-2xl">{index + 1}/{carsList.length}</p>
  </div>
    </>
  );
};

export default CarsList;