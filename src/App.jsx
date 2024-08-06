import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import Family from './pages/Family'
import Internship from './pages/Internship'
import AboutUs from './pages/AboutUs/AboutUsNew'
import Home from './pages/HomePage/Home'
import Programs from './pages/ProgramsPage/programs'
import { MeetingsPage } from './pages/meetingsPage'
import Social from './pages/Social'
import Board from './pages/Board'
import { AlumniPage } from './pages/AlumniPage'
import { MentorshipPage } from './pages/MentorshipPage'
import Projects from './pages/ProjectsPage/Projects'
import Fundraising from './pages/ProgramsPage/FundraisingPage/Fundraising'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Board" element={<Board />} />
        <Route path="/" element={<Home />} />
        <Route path="/Family" element={<Family />} />
        <Route path="/Internship" element={<Internship />} />
        <Route path="/programs" element={<Programs/>} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/meetingsPage" element={<MeetingsPage />} />
        <Route path="/Social" element={<Social />} />
        <Route path="/alumni" element={<AlumniPage />} />
        <Route path="/mentorship" element={<MentorshipPage />} />
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/programs/fundraising" element={<Fundraising/>}/>
      </Routes>
    </Router>
  )
}