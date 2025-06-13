import { useState } from "react";
import { Link } from "react-router-dom";
import { DollarSign, ArrowLeft } from "lucide-react";

const countries = ["Germany", "USA", "UK", "Canada", "Australia"];

const livingCosts: Record<string, { title: string; value: string }[]> = {
  Germany: [
    { title: "Accommodation (shared flat)", value: "€300 - €500/month" },
    { title: "Groceries", value: "€150 - €250/month" },
    { title: "Transport (public)", value: "€30 - €60/month" },
    { title: "Health Insurance", value: "€100 - €120/month" },
    { title: "Leisure/Other", value: "€50 - €100/month" },
  ],
  USA: [
    { title: "Accommodation", value: "$500 - $1000/month" },
    { title: "Groceries", value: "$200 - $300/month" },
    { title: "Transport", value: "$50 - $100/month" },
    { title: "Health Insurance", value: "$150 - $250/month" },
    { title: "Leisure/Other", value: "$100 - $150/month" },
  ],
  UK: [
    { title: "Accommodation", value: "£400 - £800/month" },
    { title: "Groceries", value: "£150 - £250/month" },
    { title: "Transport", value: "£50 - £100/month" },
    { title: "Health Insurance", value: "Free (NHS) or private" },
    { title: "Leisure/Other", value: "£50 - £100/month" },
  ],
  Canada: [
    { title: "Accommodation", value: "CAD 600 - 1000/month" },
    { title: "Groceries", value: "CAD 200 - 300/month" },
    { title: "Transport", value: "CAD 50 - 100/month" },
    { title: "Health Insurance", value: "CAD 50 - 100/month" },
    { title: "Leisure/Other", value: "CAD 50 - 100/month" },
  ],
  Australia: [
    { title: "Accommodation", value: "AUD 600 - 1000/month" },
    { title: "Groceries", value: "AUD 200 - 300/month" },
    { title: "Transport", value: "AUD 50 - 100/month" },
    { title: "Health Insurance", value: "AUD 50 - 100/month" },
    { title: "Leisure/Other", value: "AUD 50 - 100/month" },
  ],
};

const CostOfLiving = () => {
  const [selectedCountry, setSelectedCountry] = useState("Germany");

  return (
    <div className="p-6 md:p-12 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            <DollarSign className="inline-block w-7 h-7 text-green-600 mr-2" />
            Cost of Living for Students
          </h1>
          <Link
            to="/StudyInGermany"
            className="text-blue-600 hover:underline flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back
          </Link>
        </div>

        <div className="mb-4 flex gap-3 flex-wrap">
          {countries.map((country) => (
            <button
              key={country}
              onClick={() => setSelectedCountry(country)}
              className={`px-4 py-2 rounded-md font-medium border transition ${
                selectedCountry === country
                  ? "bg-green-100 border-green-600 text-green-700"
                  : "bg-white border-gray-300 hover:bg-gray-50"
              }`}
            >
              {country}
            </button>
          ))}
        </div>

        <div className="bg-gray-50 p-4 rounded-lg space-y-2">
          {livingCosts[selectedCountry].map((item, index) => (
            <div
              key={index}
              className="flex justify-between border-b border-dashed py-2"
            >
              <span className="text-gray-700">{item.title}</span>
              <span className="text-gray-900 font-medium">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CostOfLiving;
