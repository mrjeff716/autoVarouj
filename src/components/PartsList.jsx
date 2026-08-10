import { useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { partsList } from '../util/utils.js'
import GradientText from '../components/GradientText'
import 'aos/dist/aos.css';
import AOS from 'aos';

const PartsList = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
        AOS.init({
        duration: 800,
        once: false,
      });
    }, []);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center">
      <div className="flex justify-between">
        <GradientText
        colors={["#DC2626","#6B7280"]}
        animationSpeed={6.5}
        showBorder={false}
        className="custom-class text-4xl sm:text-5xl md:text-6xl"
      >
        Products:
      </GradientText>
      </div>
      <div className="bg-slate-800 w-1/2 h-[0.1rem] mt-5 mb-[-2rem]"></div>
    </div>
    <div className="relative my-10">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg"
      >
        <ArrowLeft size={24} />
      </button>

      {/* Parts */}
      <section data-aos="fade-in" data-aos-anchor-placement="center-bottom" data-aos-duration="1000"
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto px-14 pb-5 snap-x snap-mandatory scrollbar-hide"
      >
        {partsList.map((p) => {
          return (
            <div
              key={p.title}
              className="flex-shrink-0 w-[85%] sm:w-[45%] md:w-[32%] p-5 shadow-xl rounded-lg snap-center"
            >
              <div className="aspect-square">
                <img
                  loading="lazy"
                  src={p.imageUrl}
                  alt={p.alt}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="mt-5">
                <h1 className="text-3xl sm:text-4xl font-semibold">
                  {p.title}
                </h1>

                <p className="text-xl sm:text-2xl font-light">
                  {p.content}
                </p>
              </div>
            </div>
          );
        })}
      </section>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg"
      >
        <ArrowRight size={24} />
      </button>
    </div>
  </div>
  );
};

export default PartsList;