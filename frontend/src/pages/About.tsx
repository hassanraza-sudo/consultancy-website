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
            <h1 className="text-4xl font-bold text-white">About Go Abroad</h1>
            <p className="mt-4 text-xl text-gray-300">
              Empowering students to achieve their international education
              dreams since 2015
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
              To provide comprehensive, personalized guidance to students
              pursuing international education, ensuring they make informed
              decisions and achieve their academic goals.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Heart className="h-8 w-8 text-sky-blue" />
              <h2 className="text-2xl font-bold ml-2">Our Vision</h2>
            </div>
            <p className="text-gray-600">
              To become the most trusted name in international education
              consultancy, known for our expertise, integrity, and student
              success stories.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
          </div>
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-600">
              Founded in 2015 by Dr. Sarah Schmidt, Go Abroad emerged from a
              vision to simplify the complex journey of international education.
              Having experienced the challenges of studying abroad firsthand,
              Dr. Schmidt assembled a team of dedicated education specialists
              who share her passion for helping students achieve their dreams.
            </p>
            <p className="text-gray-600 mt-4">
              What started as a small consultancy in Berlin has grown into a
              trusted name in international education, helping over 1000
              students from 20+ countries pursue their academic goals in Germany
              and beyond.
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
              Dedicated professionals committed to your success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  className="w-full h-64 object-cover"
                  src={member.image}
                  alt={member.name}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-sky-blue">{member.role}</p>
                  <p className="mt-4 text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
