import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Family from "./pages/Family";
import Internship from "./pages/Internship";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/HomePage/Home";
import Programs from "./pages/ProgramsPage/programs";
import { MeetingsPage } from "./pages/meetingsPage";
import Social from "./pages/Social";
import Board from "./pages/Board";
import { AlumniPage } from "./pages/AlumniPage";
import { MentorshipPage } from "./pages/MentorshipPage";
import Projects from "./pages/ProjectsPage/Projects";
import Fundraising from "./pages/ProgramsPage/FundraisingPage/Fundraising";
import StudyHours from "./pages/StudyHours";
import Workshops from "./pages/ProgramsPage/WorkshopsPage/Workshops.jsx";
import FuFit from "./pages/FuFit";
import FEPPage from "./pages/ProjectsPage/FEPPage/FEPPage"

import Credits from "./pages/CreditsPage/Credits";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board" element={<Board />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/meetings" element={<MeetingsPage />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/social" element={<Social />} />
        <Route path="/programs/alumni" element={<AlumniPage />} />
        <Route path="/programs/mentorship" element={<MentorshipPage />} />
        <Route path="/programs/family" element={<Family />} />
        <Route path="/programs/internship" element={<Internship />} />
        <Route path="/programs/studyHours" element={<StudyHours />} />
        <Route path="/programs/fundraising" element={<Fundraising />} />
        <Route path="/programs/workshops" element={<Workshops />} />
        <Route path="/programs/fufit" element={<FuFit />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/projects/FEP" element={<FEPPage />} />
      </Routes>
    </Router>
  );
}
