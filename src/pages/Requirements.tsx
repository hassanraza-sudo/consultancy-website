import { Link } from "react-router-dom";
import { CheckCircle, ArrowLeft } from "lucide-react";

const Requirements = () => {
  return (
    <div className="p-6 md:p-12 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            <CheckCircle className="inline-block w-7 h-7 text-green-500 mr-2" />
            Requirements to Study in Germany
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
          src="https://www.choiceinternational.in/wp-content/uploads/2024/03/Study-in-Germany-1-1024x683.webp"
          alt="Study in Germany"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            If you're planning to study in Germany, here are the general
            requirements you need to fulfill:
          </p>

          <ul className="list-disc list-inside">
            <li>
              <strong>Academic Records:</strong> High school diploma or
              equivalent (FSC/A-Levels)
            </li>
            <li>
              <strong>Language Proficiency:</strong> IELTS (6.0+) or TestDaF/DSH
              for German-taught programs
            </li>
            <li>
              <strong>University Entrance Qualification (HZB):</strong> For
              direct or indirect admission
            </li>
            <li>
              <strong>Blocked Account:</strong> Proof of financial resources
              (approx. €11,208/year)
            </li>
            <li>
              <strong>Motivation Letter & CV:</strong> Required for most
              programs
            </li>
            <li>
              <strong>Valid Passport & Visa Documents</strong>
            </li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg mt-4">
            <p className="font-medium text-blue-700">
              🎓 Tip: You can apply through uni-assist or directly on the
              university website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requirements;
