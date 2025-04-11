import React from 'react';
import { services } from '../data';
import { ArrowRight } from 'lucide-react';
import BookConsultation from '../components/BookConsultation';

const Services = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-midnight-blue py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white">Our Services</h1>
            <p className="mt-4 text-xl text-gray-300">
              Comprehensive support for your international education journey
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-4 text-gray-600">{service.description}</p>
              <button className="mt-6 inline-flex items-center text-sky-blue hover:text-sky-700">
                Learn more
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Consultation Options */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Consultation Options</h2>
            <p className="mt-4 text-lg text-gray-500">
              Choose the consultation package that best fits your needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Free Consultation */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900">Free Consultation</h3>
              <p className="mt-4 text-gray-600">
                30-minute session to discuss your goals and explore how we can help
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-center">
                  <span className="h-6 w-6 flex items-center justify-center rounded-full bg-sky-blue text-white">✓</span>
                  <span className="ml-3 text-gray-600">Initial Assessment</span>
                </li>
                <li className="flex items-center">
                  <span className="h-6 w-6 flex items-center justify-center rounded-full bg-sky-blue text-white">✓</span>
                  <span className="ml-3 text-gray-600">Basic Guidance</span>
                </li>
              </ul>
              <BookConsultation consultationType="free" className="mt-8 w-full bg-sky-blue text-white py-2 px-4 rounded-md hover:bg-sky-700" />
            </div>

            {/* Premium Consultation */}
            <div className="bg-midnight-blue rounded-lg p-8 transform scale-105">
              <h3 className="text-xl font-semibold text-white">Premium Consultation</h3>
              <p className="mt-4 text-gray-300">
                Comprehensive 60-minute session with detailed planning and guidance
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-center">
                  <span className="h-6 w-6 flex items-center justify-center rounded-full bg-sky-blue text-white">✓</span>
                  <span className="ml-3 text-gray-300">In-depth Assessment</span>
                </li>
                <li className="flex items-center">
                  <span className="h-6 w-6 flex items-center justify-center rounded-full bg-sky-blue text-white">✓</span>
                  <span className="ml-3 text-gray-300">Personalized Action Plan</span>
                </li>
                <li className="flex items-center">
                  <span className="h-6 w-6 flex items-center justify-center rounded-full bg-sky-blue text-white">✓</span>
                  <span className="ml-3 text-gray-300">University Shortlisting</span>
                </li>
              </ul>
              <BookConsultation consultationType="premium" className="mt-8 w-full bg-sky-blue text-white py-2 px-4 rounded-md hover:bg-sky-700" />
            </div>

            {/* VIP Consultation */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900">VIP Package</h3>
              <p className="mt-4 text-gray-600">
                Complete support package with multiple sessions and ongoing assistance
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-center">
                  <span className="h-6 w-6 flex items-center justify-center rounded-full bg-sky-blue text-white">✓</span>
                  <span className="ml-3 text-gray-600">Multiple Sessions</span>
                </li>
                <li className="flex items-center">
                  <span className="h-6 w-6 flex items-center justify-center rounded-full bg-sky-blue text-white">✓</span>
                  <span className="ml-3 text-gray-600">Application Review</span>
                </li>
                <li className="flex items-center">
                  <span className="h-6 w-6 flex items-center justify-center rounded-full bg-sky-blue text-white">✓</span>
                  <span className="ml-3 text-gray-600">Priority Support</span>
                </li>
              </ul>
              <BookConsultation consultationType="vip" className="mt-8 w-full bg-sky-blue text-white py-2 px-4 rounded-md hover:bg-sky-700" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;