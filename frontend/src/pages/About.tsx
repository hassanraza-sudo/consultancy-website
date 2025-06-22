import React from "react";
import { team } from "../data";
import { Globe2, Users, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-midnight-blue py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white">
              About Studien-Route
            </h1>
            <p className="mt-4 text-l text-gray-300">
              With the passage of time, Germany is increasingly emerging as one
              of the most desirable destinations for candidates seeking to
              pursue higher education abroad. For such students, Studien-route
              serves as a comprehensive and dependable starting point.
              Studien-route demonstrates a deep understanding of students’
              academic and personal needs, offering well-structured solutions to
              their current concerns while also proactively preparing for
              potential challenges they may face in the future.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Target className="h-8 w-8 text-sky-blue" />
              <h2 className="text-2xl font-bold ml-2">Our Mission</h2>
            </div>
            <p className="text-gray-600">
              Our mission is to guide and support ambitious students at every
              step of their journey to higher education in Germany. We provide
              personalized, reliable solutions that address academic and
              personal needs, helping students build a strong foundation for
              long-term success in a competitive world.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Heart className="h-8 w-8 text-sky-blue" />
              <h2 className="text-2xl font-bold ml-2">Our Vision</h2>
            </div>
            <p className="text-gray-600">
              To be the most trusted and empowering platform for international
              students aiming to study in Germany, shaping future leaders
              through academic excellence and global opportunities.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
            <p className="mt-4 text-lg text-gray-500">
              Dedicated professionals guiding your educational journey.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Avi */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center p-6">
              <img
                src="/images/avi.jpg"
                alt="Avi"
                className="w-32 h-32 rounded-full mx-auto object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mt-4">Avi</h3>
              <p className="text-sky-600 font-medium">Co-Founder & Advisor</p>
              <p className="mt-4 text-gray-600 text-sm text-left">
                Holds a Master’s degree in International Business from HTW
                Berlin with extensive experience in sales, marketing, and
                customer support. Offers expert guidance on studying and
                adapting to academic and professional life in Germany.
              </p>
            </div>

            {/* Zahid */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center p-6">
              <img
                src="/images/zahid.jpg"
                alt="Zahid"
                className="w-32 h-32 rounded-full mx-auto object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mt-4">
                Zahid Hussain
              </h3>
              <p className="text-sky-600 font-medium">
                Co-Founder & Student Mentor
              </p>
              <p className="mt-4 text-gray-600 text-sm text-left">
                Brings deep experience in language instruction, student
                mentoring, and educational consulting. Specializes in preparing
                students for academic success, language exams, and smooth
                cultural transition abroad.
              </p>
            </div>

            {/* Hassan */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center p-6">
              <img
                src="/images/hassan.jpg"
                alt="Hassan"
                className="w-32 h-32 rounded-full mx-auto object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mt-4">
                Hassan Raza
              </h3>
              <p className="text-sky-600 font-medium">
                Junior Advisor & Backend Support
              </p>
              <p className="mt-4 text-gray-600 text-sm text-left">
                Supports backend operations and student services with accuracy
                and dedication. Handles documentation, inquiries, and follow-ups
                to ensure timely and efficient support throughout the process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
