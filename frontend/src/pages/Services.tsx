import React from "react";
import { ArrowRight } from "lucide-react";
import BookConsultation from "../components/BookConsultation";

const Services = () => {
  const packages = [
    {
      title: "Starter Package",
      price: "€199",
      description: "Ideal for students starting their application process.",
      features: [
        "Motivation letter writing (1 draft + 1 revision)",
        "University/course consultation (25 mins)",
        "Email support (up to 5 follow-ups)",
      ],
      type: "starter",
    },

    {
      title: "Language & Culture Package",
      price: "€249",
      description: "Start learning German and understand local life.",
      features: [
        "A1 & A2 language course (20 sessions)",
        "Cultural orientation (1 hr)",
        "Everyday German PDF guide",
      ],
      type: "language",
    },
    {
      title: "Arrival & Settle-in Package",
      price: "€299",
      description: "Support for your first days in Berlin.",
      features: [
        "Airport pick-up & drop-off",
        "Anmeldung assistance",
        "Health insurance help",
        "SIM card setup",
        "Basic accommodation help",
      ],
      type: "arrival",
    },
    {
      title: "Full Support Package",
      price: "€599",
      description: "Complete solution from application to settlement.",
      features: [
        "All services from Starter, Arrival & Language",
        "Priority support",
        "Visa extension/document support",
        "Accommodation assistance",
        "WhatsApp/email support (30 days)",
      ],
      type: "full",
      highlight: true,
    },
  ];

  const alaCarteServices = [
    { title: "Motivation Letter (w/ revisions)", price: "€79" },
    { title: "CV Editing", price: "€39" },
    { title: "German Language Course (10 sessions)", price: "€149" },
    { title: "Airport Pick-up", price: "€50" },
    { title: "City Registration (Anmeldung)", price: "€30" },
    { title: "Health Insurance Setup", price: "€30" },
    { title: "Accommodation Assistance", price: "€199" },
    { title: "University Consultation (1 hour)", price: "€49" },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-midnight-blue py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white">Our Services</h1>
            <p className="mt-4 text-xl text-gray-300">
              Personalized support to help you succeed in Germany
            </p>
          </div>
        </div>
      </div>

      {/* Bundled Packages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Bundled Packages
            </h2>
            <p className="mt-2 text-gray-600">
              Get complete support with our customized service bundles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`flex flex-col justify-between rounded-xl shadow-lg p-6 transition-transform duration-300 hover:scale-105 text-center ${
                  pkg.highlight
                    ? "bg-midnight-blue text-white"
                    : "bg-white text-gray-900"
                }`}
              >
                <div>
                  <h3 className="text-xl font-semibold">
                    {pkg.title} – {pkg.price}
                  </h3>
                  <p className="mt-2 text-sm opacity-80">{pkg.description}</p>
                  <ul className="mt-4 space-y-2 text-sm list-none">
                    {pkg.features.map((f, i) => (
                      <li
                        key={i}
                        className={`${
                          pkg.highlight ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        ✓ {f}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* <BookConsultation
                  consultationType={pkg.type}
                  className="mt-6 w-full bg-sky-blue text-white py-2 px-4 rounded-md hover:bg-sky-700"
                /> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* À la Carte */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              À la Carte Services
            </h2>
            <p className="mt-2 text-gray-600">
              Pick and choose individual services to suit your needs.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {alaCarteServices.map((service, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col justify-between text-center"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-700 mb-4">
                  Price: <strong>{service.price}</strong>
                </p>
                <button className="mt-auto inline-flex items-center justify-center text-sky-blue hover:text-sky-700">
                  Learn more
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
