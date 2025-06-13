import React, { useEffect } from "react";
import Hero from "../components/Hero";
import { services, testimonials } from "../data";
import { GraduationCap, Users, Globe2, CheckCircle } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div>
      <Hero />

      {/* Stats Section */}
      <section className="bg-white py-16" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              {
                Icon: GraduationCap,
                label: "Students Placed",
                value: "1000+",
              },
              {
                Icon: Users,
                label: "Partner Universities",
                value: "50+",
              },
              {
                Icon: Globe2,
                label: "Countries",
                value: "20+",
              },
              {
                Icon: CheckCircle,
                label: "Success Rate",
                value: "95%",
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="transition-all duration-300 hover:scale-105"
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <div className="flex justify-center mb-3">
                  <div className="bg-sky-100 p-3 rounded-full">
                    <stat.Icon className="h-8 w-8 text-sky-600" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive support for your international education journey.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-lg p-6 text-left hover:shadow-2xl transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <h3 className="text-2xl font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="mt-3 text-gray-600">{service.description}</p>
                <button className="mt-5 inline-block text-sky-600 hover:text-sky-800 font-medium transition-colors">
                  Learn more →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            What Our Students Say
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-gray-50 rounded-xl p-6 shadow-md text-left transition-all hover:shadow-lg"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="flex items-center">
                  <img
                    className="h-14 w-14 rounded-full object-cover border-2 border-sky-200"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.university}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
