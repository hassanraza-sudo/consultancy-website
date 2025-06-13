import { Link } from "react-router-dom";
import {
  GraduationCap,
  Globe,
  Euro,
  Briefcase,
  Home,
  HelpCircle,
  FileText,
  CheckCircle,
} from "lucide-react";

const sections = [
  {
    title: "Requirements",
    description:
      "Learn about the eligibility criteria for studying in Germany.",
    icon: <CheckCircle className="w-8 h-8 text-sky-600 mb-4" />,
    link: "/study-in-germany/requirements",
  },
  {
    title: "Visa Process",
    description: "Understand the steps for obtaining your German student visa.",
    icon: <FileText className="w-8 h-8 text-sky-600 mb-4" />,
    link: "/study-in-germany/visa-process",
  },
  {
    title: "Courses & Universities",
    description:
      "Explore top programs and universities for international students.",
    icon: <GraduationCap className="w-8 h-8 text-sky-600 mb-4" />,
    link: "/study-in-germany/courses",
  },
  {
    title: "Cost of Living",
    description: "Plan your finances with accurate living cost insights.",
    icon: <Euro className="w-8 h-8 text-sky-600 mb-4" />,
    link: "/study-in-germany/cost-of-living",
  },
  {
    title: "Work Opportunities",
    description:
      "Discover part-time jobs and internship options during your studies.",
    icon: <Briefcase className="w-8 h-8 text-sky-600 mb-4" />,
    link: "/study-in-germany/work-opportunities",
  },
  {
    title: "Accommodation",
    description: "Find suitable and affordable housing solutions in Germany.",
    icon: <Home className="w-8 h-8 text-sky-600 mb-4" />,
    link: "/study-in-germany/accommodation",
  },
  {
    title: "FAQ",
    description: "Get answers to common queries about studying in Germany.",
    icon: <HelpCircle className="w-8 h-8 text-sky-600 mb-4" />,
    link: "/study-in-germany/faq",
  },
];

const StudyInGermany = () => {
  return (
    <div className="bg-gray-50 py-20 px-6 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Study in Germany
      </h1>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
        Get expert advice and personalized guidance for your academic journey in
        Germany. Explore all you need to know—from requirements to work
        opportunities.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {sections.map((section, index) => (
          <Link
            to={section.link}
            key={index}
            className="bg-white hover:bg-sky-50 rounded-xl p-6 shadow transition-all hover:shadow-lg text-left group"
          >
            {section.icon}
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-sky-700 mb-2">
              {section.title}
            </h3>
            <p className="text-gray-600 text-sm">{section.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StudyInGermany;
