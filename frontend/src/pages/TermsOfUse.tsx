import React from "react";

const TermsOfUse = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>
      <p className="mb-4">
        Welcome to Studien-Route. By accessing our website
        <a href="https://www.studien-route.com" className="text-blue-500">
          " studien-route.com "
        </a>
        , you agree to comply with these Terms of Use. Please read them
        carefully.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Use of Website</h2>
      <p className="mb-4">
        You may use our website for personal, non-commercial purposes.
        Unauthorized use of any content, including copying, distribution, or
        modification, is prohibited without prior written consent.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        Intellectual Property
      </h2>
      <p className="mb-4">
        All content, logos, graphics, and materials on this website are the
        property of Studien-Route or its licensors and are protected by
        copyright laws.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Disclaimers</h2>
      <p className="mb-4">
        We provide consultancy services to help students study in Germany. While
        we strive for accuracy, we do not guarantee that all information is
        complete, current, or error-free. Your use of the website is at your own
        risk.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        Limitation of Liability
      </h2>
      <p className="mb-4">
        Studien-Route shall not be liable for any direct, indirect, or
        consequential damages arising from the use of this website or reliance
        on the information provided.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Governing Law</h2>
      <p className="mb-4">
        These Terms of Use are governed by the laws of Germany. Any disputes
        will be subject to the exclusive jurisdiction of the courts in Berlin.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Information</h2>
      <p className="mb-4">
        If you have questions about these Terms of Use, please contact us:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Email: info@studien-route.com</li>
        <li>Phone: +49 1575 5661506</li>
        <li>Address: Berlin, Germany</li>
      </ul>

      <p className="text-sm text-gray-500 mt-8">
        Last updated: {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default TermsOfUse;
