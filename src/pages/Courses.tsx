import React from "react";
import { Link } from "react-router-dom";
import { BookOpenCheck, ArrowLeft } from "lucide-react";

const Courses = () => {
  const [activeTab, setActiveTab] = React.useState("Bachelors Programs");

  const tabs = ["Bachelors Programs", "Masters Programs", "Top Universities"];

  const content = {
    "Bachelors Programs": (
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Engineering (Mechanical, Civil, Electrical)</li>
        <li>Computer Science</li>
        <li>Business Administration</li>
        <li>International Relations</li>
        <li>Media & Communication</li>
        <li>Environmental Science</li>
      </ul>
    ),
    "Masters Programs": (
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Data Science & AI</li>
        <li>Renewable Energy Systems</li>
        <li>International Management</li>
        <li>Cybersecurity</li>
        <li>Robotics</li>
        <li>Logistics & Supply Chain Management</li>
      </ul>
    ),
    "Top Universities": (
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Technical University of Munich (TUM)</li>
        <li>RWTH Aachen University</li>
        <li>Heidelberg University</li>
        <li>Freie Universität Berlin</li>
        <li>Ludwig Maximilian University of Munich (LMU)</li>
        <li>Karlsruhe Institute of Technology (KIT)</li>
      </ul>
    ),
  };

  return (
    <div className="p-6 md:p-12 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            <BookOpenCheck className="inline-block w-7 h-7 text-purple-600 mr-2" />
            Courses & Universities
          </h1>
          <Link
            to="/StudyInGermany"
            className="text-blue-600 hover:underline flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back
          </Link>
        </div>

        <div className="mb-6 flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md font-medium border transition ${
                activeTab === tab
                  ? "bg-purple-100 border-purple-600 text-purple-700"
                  : "bg-white border-gray-300 hover:bg-gray-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">{content[activeTab]}</div>
      </div>
    </div>
  );
};

export default Courses;
