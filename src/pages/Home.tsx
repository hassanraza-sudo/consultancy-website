import React from "react";
import Hero from "../components/Hero";
import { services, testimonials } from "../data";
import { GraduationCap, Users, Globe2, CheckCircle } from "lucide-react";

const Home = () => {
  return (
    <div>
      <Hero />

      {/* Stats Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="text-center">
              <div className="flex justify-center">
                <GraduationCap className="h-8 w-8 text-sky-blue" />
              </div>
              <p className="mt-2 text-3xl font-semibold text-gray-900">1000+</p>
              <p className="text-gray-500">Students Placed</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <Users className="h-8 w-8 text-sky-blue" />
              </div>
              <p className="mt-2 text-3xl font-semibold text-gray-900">50+</p>
              <p className="text-gray-500">Partner Universities</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <Globe2 className="h-8 w-8 text-sky-blue" />
              </div>
              <p className="mt-2 text-3xl font-semibold text-gray-900">20+</p>
              <p className="text-gray-500">Countries</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <CheckCircle className="h-8 w-8 text-sky-blue" />
              </div>
              <p className="mt-2 text-3xl font-semibold text-gray-900">95%</p>
              <p className="text-gray-500">Success Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Services */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-4 text-lg text-gray-500">
              Comprehensive support for your international education journey
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-500">{service.description}</p>
                <button className="mt-4 text-sky-blue hover:text-sky-700">
                  Learn more →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            What Our Students Say
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500">{testimonial.university}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
