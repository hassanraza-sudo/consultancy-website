import React from 'react';
import { CheckCircle, Clock, Calendar, Users } from 'lucide-react';
import BookConsultation from '../components/BookConsultation';

const FreeConsultation = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-midnight-blue py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white">Free Consultation</h1>
            <p className="mt-4 text-xl text-gray-300">
              Start your study abroad journey with a free consultation session
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What's Included</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-sky-blue mt-1" />
                  <span className="ml-3">
                    <strong className="block text-gray-900">Initial Assessment</strong>
                    <span className="text-gray-600">Evaluation of your academic background and goals</span>
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-sky-blue mt-1" />
                  <span className="ml-3">
                    <strong className="block text-gray-900">University Options</strong>
                    <span className="text-gray-600">Overview of potential universities matching your profile</span>
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-sky-blue mt-1" />
                  <span className="ml-3">
                    <strong className="block text-gray-900">Cost Estimation</strong>
                    <span className="text-gray-600">Basic breakdown of study and living expenses</span>
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-sky-blue mt-1" />
                  <span className="ml-3">
                    <strong className="block text-gray-900">Next Steps Guidance</strong>
                    <span className="text-gray-600">Clear action plan for your application process</span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Session Details</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-sky-blue" />
                  <span className="ml-2 text-gray-600">30-minute session</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-sky-blue" />
                  <span className="ml-2 text-gray-600">Available Monday to Saturday</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-sky-blue" />
                  <span className="ml-2 text-gray-600">One-on-one with an education consultant</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Book Your Free Session</h3>
              <p className="text-gray-600 mb-6">
                Take the first step towards your international education journey. Schedule your free 
                consultation session with our expert advisors.
              </p>
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="font-medium text-gray-900">What to Prepare:</h4>
                  <ul className="mt-2 space-y-2 text-gray-600">
                    <li>• Your academic transcripts</li>
                    <li>• English proficiency test scores (if available)</li>
                    <li>• List of preferred universities/programs</li>
                    <li>• Questions about the application process</li>
                  </ul>
                </div>
                <BookConsultation 
                  consultationType="free" 
                  className="w-full bg-sky-blue text-white py-3 px-4 rounded-md hover:bg-sky-700 text-center font-medium"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900">What should I expect in the free consultation?</h3>
                <p className="mt-2 text-gray-600">
                  During the session, we'll discuss your academic background, career goals, and study abroad preferences. 
                  Our consultant will provide initial guidance and outline potential pathways.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">How should I prepare for the consultation?</h3>
                <p className="mt-2 text-gray-600">
                  Have your academic documents ready and prepare questions about universities, programs, and the application process. 
                  The more information you provide, the better guidance we can offer.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Is there any obligation after the free consultation?</h3>
                <p className="mt-2 text-gray-600">
                  No, the consultation is completely free and without obligation. It's an opportunity for you to learn 
                  about our services and decide if we're the right fit for your needs.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Can I book additional sessions if needed?</h3>
                <p className="mt-2 text-gray-600">
                  Yes, after your free consultation, you can choose from our premium consultation packages for more 
                  comprehensive guidance and support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeConsultation;