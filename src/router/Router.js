import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Education from '../pages/Education/Education';
import Works from '../pages/Works/Works';
import Projects from '../pages/Projects/Projects';
import Contact from '../pages/Contact/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Works" element={<Works />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;