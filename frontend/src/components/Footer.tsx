import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-midnight-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Studien-route is your trusted guide to studying in Germany, offering
            tailored support for students' academic and personal needs today and
            for the future.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-of-use" className="hover:text-white">
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="text-sm text-gray-300 space-y-3">
            <li className="flex items-center">
              <Phone className="h-4 w-4 mr-2 text-sky-400" />
              +49 1575 5661506
            </li>
            <li className="flex items-center">
              <Mail className="h-4 w-4 mr-2 text-sky-400" />
              info@studien-route.com
            </li>
            <li className="flex items-center">
              <MapPin className="h-4 w-4 mr-2 text-sky-400" />
              Berlin, Germany
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <Facebook className="h-5 w-5 hover:text-sky-400" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <Instagram className="h-5 w-5 hover:text-sky-400" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <Linkedin className="h-5 w-5 hover:text-sky-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 py-6 text-center text-sm text-gray-400 space-y-1">
        <div>
          &copy; {new Date().getFullYear()} StudienRoute. All rights reserved.
        </div>
        <div className="space-x-2">
          <Link to="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </Link>
          |
          <Link to="/terms-of-use" className="hover:text-white">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
