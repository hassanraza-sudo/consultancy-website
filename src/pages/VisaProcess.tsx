import { useState } from "react";
import { Link } from "react-router-dom";
import { FileText, ArrowLeft } from "lucide-react";

const VisaProcess = () => {
  const steps = [
    {
      title: "Step 1: Offer Letter",
      content:
        "Secure an admission/offer letter from a German university before applying for a visa.",
    },
    {
      title: "Step 2: Blocked Account",
      content:
        "Open a blocked account with approx. €11,208 to prove your financial stability.",
    },
    {
      title: "Step 3: Visa Appointment",
      content:
        "Book an appointment with the German Embassy and prepare your documents.",
    },
    {
      title: "Step 4: Attend Interview",
      content:
        "Attend the visa interview and answer questions related to your study plan.",
    },
    {
      title: "Step 5: Visa Issuance",
      content: "Once approved, collect your visa and prepare for your journey.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="p-6 md:p-12 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            <FileText className="inline-block w-7 h-7 text-blue-500 mr-2" />
            Visa Process for Germany
          </h1>
          <Link
            to="/StudyInGermany"
            className="text-blue-600 hover:underline flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back
          </Link>
        </div>

        <img
          src="https://www.daad.de/image/daad_de/preview_visa.jpg"
          alt="Visa Process"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        <div className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 font-medium"
              >
                {step.title}
              </button>
              {activeIndex === index && (
                <div className="px-4 py-2 text-gray-700 bg-white">
                  {step.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisaProcess;
