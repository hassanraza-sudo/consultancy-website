import React from 'react';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-midnight-blue py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white">Contact Us</h1>
            <p className="mt-4 text-xl text-gray-300">
              We're here to help you with your study abroad journey
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-blue focus:border-sky-blue"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-blue focus:border-sky-blue"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-blue focus:border-sky-blue"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-sky-blue focus:border-sky-blue"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-sky-blue text-white py-2 px-4 rounded-md hover:bg-sky-700"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-sky-blue mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                    <p className="mt-1 text-gray-600">+49 (0) 30 1234 5678</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-sky-blue mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <p className="mt-1 text-gray-600">info@goabroad.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-sky-blue mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Office</h3>
                    <p className="mt-1 text-gray-600">
                      Friedrichstraße 123<br />
                      10117 Berlin, Germany
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MessageSquare className="h-6 w-6 text-sky-blue mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Social Media</h3>
                    <div className="mt-1 space-x-4">
                      <a href="#" className="text-gray-600 hover:text-sky-blue">WhatsApp</a>
                      <a href="#" className="text-gray-600 hover:text-sky-blue">Telegram</a>
                      <a href="#" className="text-gray-600 hover:text-sky-blue">LinkedIn</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Office Hours</h2>
              <div className="space-y-2">
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;