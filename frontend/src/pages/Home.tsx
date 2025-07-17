import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "../components/Hero";

const services = [
  {
    id: 0,
    title: "University Admission Assistance",
    description:
      "Expert guidance through the entire university application process in Germany and internationally.",
  },
  {
    id: 1,
    title: "Post-Arrival Assistance",
    description:
      "Support for settling in Germany including accommodation, registration, insurance, and orientation.",
  },
  {
    id: 2,
    title: "German Language Course Package",
    description:
      "Access our beginner-friendly language course designed specifically for international students moving to Germany.",
  },
];

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const [activeService, setActiveService] = useState(null);
  const [isCoursePaid, setIsCoursePaid] = useState(false);

  const toggleService = (id) => {
    setActiveService((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      <Hero />

      {/* Services Section */}
      <section className="bg-gray-50 py-16" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive support for your international education journey.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
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
                <button
                  onClick={() => toggleService(service.id)}
                  className="mt-5 inline-block text-sky-600 hover:text-sky-800 font-medium transition-colors"
                >
                  Learn more →
                </button>
                {activeService === service.id && (
                  <div className="mt-4 text-gray-800 text-sm space-y-2">
                    {service.id === 0 && (
                      <>
                        <p className="font-semibold">
                          We’ll Guide You — Step by Step
                        </p>
                        <p>
                          <strong>Why Study in Germany?</strong>
                        </p>
                        <ul className="list-disc ml-6">
                          <li>Top-quality universities</li>
                          <li>Low or no tuition fees at public universities</li>
                          <li>Many programs taught in English</li>
                          <li>Great job and internship opportunities</li>
                          <li>Work visa options after graduation</li>
                        </ul>
                        <p>
                          <strong>How We Help You:</strong>
                        </p>
                        <ul className="list-disc ml-6">
                          <li>Help choosing the best course and university</li>
                          <li>Clear advice on what documents you need</li>
                          <li>
                            Support with writing and submitting applications
                          </li>
                          <li>Continued help even after you get accepted</li>
                        </ul>
                        <p>
                          <strong>This Service Is For:</strong>
                        </p>
                        <ul className="list-disc ml-6">
                          <li>
                            Students applying for Bachelor’s, Master’s, or
                            Ausbildung programs
                          </li>
                          <li>
                            Anyone looking for low-cost, high-quality education
                          </li>
                          <li>
                            Students who want to study, grow, and build a bright
                            future abroad
                          </li>
                        </ul>
                        <p>
                          <strong>Why Choose Us:</strong>
                        </p>
                        <ul className="list-disc ml-6">
                          <li>Personal guidance from education experts</li>
                          <li>Friendly and student-focused team</li>
                          <li>Real support — no shortcuts, no confusion</li>
                        </ul>
                      </>
                    )}
                    {service.id === 1 && (
                      <>
                        <p className="font-semibold">
                          Settle In Easily and Start Strong
                        </p>
                        <p>
                          We’re here to help you feel at home in Germany from
                          your very first day.
                        </p>
                        <p>
                          <strong>Our Support Includes:</strong>
                        </p>
                        <ul className="list-disc ml-6">
                          <li>
                            Airport Pickup – Safe travel from the airport to
                            your place
                          </li>
                          <li>
                            Finding Accommodation – Help finding affordable and
                            student-friendly housing
                          </li>
                          <li>
                            City Registration (Anmeldung) – Step-by-step help to
                            register in your city
                          </li>
                          <li>
                            Opening a Bank Account – We guide you to open a
                            local bank account easily
                          </li>
                          <li>
                            Health Insurance Help – Support to choose a public
                            or private insurance plan
                          </li>
                          <li>
                            Mobile SIM Card Setup – Help getting a good mobile
                            plan and staying connected
                          </li>
                          <li>
                            Orientation – Introduction to German life,
                            transport, and how universities work
                          </li>
                        </ul>
                      </>
                    )}
                    {service.id === 2 && (
                      <>
                        {isCoursePaid ? (
                          <div>
                            {/* Actual video/course content or links */}
                            <p>Welcome to your course dashboard!</p>
                            <ul className="list-disc ml-6">
                              <li>
                                <a
                                  href="/language-course/module-1"
                                  className="text-blue-600 underline"
                                >
                                  Module 1: Basics
                                </a>
                              </li>
                              {/* Add more modules */}
                            </ul>
                          </div>
                        ) : (
                          <>
                            <p>
                              This course is locked. Please make payment to
                              access the course.
                            </p>
                            <button
                              onClick={() => {
                                // fake trigger for now
                                setIsCoursePaid(true);
                                alert(
                                  "Simulated payment success! Now showing course."
                                );
                              }}
                              className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                            >
                              Pay & Unlock
                            </button>
                          </>
                        )}

                        <p className="font-semibold">
                          Master Basic German Before You Arrive!
                        </p>
                        <p>
                          Our German language course is perfect for students
                          preparing to study or live in Germany. It’s designed
                          to help you with:
                        </p>
                        <ul className="list-disc ml-6">
                          <li>Common German phrases and vocabulary</li>
                          <li>Pronunciation and grammar basics</li>
                          <li>
                            Real-life situations: shopping, traveling,
                            university communication
                          </li>
                          <li>Interactive quizzes and audio exercises</li>
                        </ul>
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
