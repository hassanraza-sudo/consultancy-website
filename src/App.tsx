import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import FreeConsultation from "./pages/FreeConsultation";
import StudyInGermany from "./pages/StudyInGermany";
import Requirements from "./pages/Requirements";
import VisaProcess from "./pages/VisaProcess";
import Courses from "./pages/Courses";
import CostOfLiving from "./pages/CostOfLiving";
import WorkOpportunities from "./pages/WorkOpportunities";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/free-consultation" element={<FreeConsultation />} />
          <Route path="/StudyInGermany" element={<StudyInGermany />} />
          <Route
            path="/study-in-germany/requirements"
            element={<Requirements />}
          />
          <Route
            path="/study-in-germany/visa-process"
            element={<VisaProcess />}
          />
          <Route path="/study-in-germany/courses" element={<Courses />} />
          <Route
            path="/study-in-germany/cost-of-living"
            element={<CostOfLiving />}
          />
          <Route
            path="/study-in-germany/work-opportunities"
            element={<WorkOpportunities />}
          />
          {/* <Route
            path="/study-in-germany/accommodation"
            component={Accommodation}
          />
          <Route path="/study-in-germany/faq" component={FAQ} /> */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
