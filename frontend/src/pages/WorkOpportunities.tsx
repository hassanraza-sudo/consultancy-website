import { Link } from "react-router-dom";
import { Briefcase, ArrowLeft } from "lucide-react";

const WorkOpportunities = () => {
  const germanyDetails = [
    "Students can work up to 120 full days or 240 half days per year.",
    "Minimum wage: €12/hour (as of 2024).",
    "You do not need permission from the Federal Employment Agency for student jobs.",
    "Jobs related to your field of study (like student assistant roles) can be especially helpful.",
    "You can find part-time work through university job portals, websites like StepStone and Indeed, or local postings.",
    "Popular student jobs include working in cafes, supermarkets, research assistant roles, and internships.",
    "Non-EU students are generally not allowed to be self-employed or work freelance.",
    "Tax exemption: If your monthly earnings remain below €520, you usually don’t pay taxes.",
    "Make sure your employer is aware of your student visa restrictions.",
    "Note: Your studies should remain the top priority and working should not interfere with your academic performance.",
  ];

  return (
    <div className="p-6 md:p-12 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            <Briefcase className="inline-block w-7 h-7 text-green-600 mr-2" />
            Part-time Work Opportunities in Germany
          </h1>
          <Link
            to="/StudyInGermany"
            className="text-blue-600 hover:underline flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back
          </Link>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Germany</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            {germanyDetails.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkOpportunities;
