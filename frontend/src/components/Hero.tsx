import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import BookConsultation from "./BookConsultation";

const Hero = () => {
  return (
    <div className="relative bg-midnight-blue">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-20"
          src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80
"
          alt="Students abroad"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Your Journey to Study Abroad Starts Here
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          At our core, we are dedicated to guiding ambitious students toward a
          future defined by excellence. By laying a strong academic and
          professional foundation, we empower them to stand out and succeed in
          today’s highly competitive global landscape.
        </p>
        <div className="mt-10 flex space-x-4">
          {/* <BookConsultation
            consultationType="free"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-blue hover:bg-sky-700"
          /> */}
          <Link
            to="/services"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-transparent border-white hover:bg-white hover:text-midnight-blue"
          >
            Our Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
