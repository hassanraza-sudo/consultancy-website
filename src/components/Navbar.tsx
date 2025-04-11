import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
import BookConsultation from "./BookConsultation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-midnight-blue shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <GraduationCap className="h-8 w-8 text-sky-blue" />
              <span className="ml-2 text-xl font-bold text-white">
                Studienhilfe
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-white hover:text-sky-blue px-3 py-2">
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-sky-blue px-3 py-2"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-white hover:text-sky-blue px-3 py-2"
            >
              Services
            </Link>
            <Link
              to="/StudyInGermany"
              className="text-white hover:text-sky-blue px-3 py-2"
            >
              Study In Germany
            </Link>
            <Link
              to="/blog"
              className="text-white hover:text-sky-blue px-3 py-2"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-sky-blue px-3 py-2"
            >
              Contact
            </Link>
            <BookConsultation />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-sky-blue"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-white block px-3 py-2 hover:bg-sky-blue rounded-md"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white block px-3 py-2 hover:bg-sky-blue rounded-md"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-white block px-3 py-2 hover:bg-sky-blue rounded-md"
            >
              Services
            </Link>
            <Link
              to="/blog"
              className="text-white block px-3 py-2 hover:bg-sky-blue rounded-md"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-white block px-3 py-2 hover:bg-sky-blue rounded-md"
            >
              Contact
            </Link>
            <BookConsultation className="w-full text-center bg-sky-blue text-white px-4 py-2 rounded-md hover:bg-sky-700" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
