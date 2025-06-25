import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home.jsx';
import About from './About/About.jsx'; 
import Navbar from './Navbar/Navbar.jsx'; 
import FAQPage from './Rules/FAQPage.jsx';
import Cultural from './Events/Cultural.jsx';
import Sports from './Events/Sports.jsx';

import Merchandise from './Merchandise/Merchandise.jsx';
import Sponsors from './Sponsors/Sponsors.jsx';
import Events from './Events/Events.jsx';
import EventDetail from './Events/EventDetail.jsx';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

function App() {
  return (
    <Router  >
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/cultural" element={<Cultural />} />
          <Route path="/sports" element={<Sports />} />

          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/merchandise" element={<Merchandise />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/rules" element={<FAQPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;