
import { Link } from "react-router-dom";

const StudyInGermany = () => {
  return (
    <div className="text-center py-16 px-6">
      <h1 className="text-4xl font-semibold mb-12">Study in Germany</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
          <Link to="/study-in-germany/requirements" className="text-blue-600">
            <h3 className="text-xl font-semibold mb-2">Requirements</h3>
            <p className="text-gray-600">
              Learn about the eligibility criteria to study in Germany.
            </p>
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
          <Link to="/study-in-germany/visa-process" className="text-blue-600">
            <h3 className="text-xl font-semibold mb-2">Visa Process</h3>
            <p className="text-gray-600">
              Understand the process to get a student visa.
            </p>
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
          <Link to="/study-in-germany/courses" className="text-blue-600">
            <h3 className="text-xl font-semibold mb-2">
              Courses & Universities
            </h3>
            <p className="text-gray-600">
              Explore courses and universities available for international
              students.
            </p>
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
          <Link to="/study-in-germany/cost-of-living" className="text-blue-600">
            <h3 className="text-xl font-semibold mb-2">Cost of Living</h3>
            <p className="text-gray-600">
              Get an estimate of living expenses while studying in Germany.
            </p>
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
          <Link
            to="/study-in-germany/work-opportunities"
            className="text-blue-600"
          >
            <h3 className="text-xl font-semibold mb-2">Work Opportunities</h3>
            <p className="text-gray-600">
              Learn about part-time jobs available for students.
            </p>
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
          <Link to="/study-in-germany/accommodation" className="text-blue-600">
            <h3 className="text-xl font-semibold mb-2">Accommodation</h3>
            <p className="text-gray-600">
              Find options for accommodation while studying in Germany.
            </p>
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
          <Link to="/study-in-germany/faq" className="text-blue-600">
            <h3 className="text-xl font-semibold mb-2">FAQ</h3>
            <p className="text-gray-600">
              Answers to frequently asked questions about studying in Germany.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudyInGermany;
