import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Education from '../pages/Education/Education';
import Experiences from '../pages/Experiences/Experiences';
import Projects from '../pages/Projects/Projects';
import Contact from '../pages/Contact/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Experiences" element={<Experiences />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;