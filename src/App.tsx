import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Resources from './pages/Resources';
import Events from './pages/Events';
import ScrollToTop from './components/ScrollToTop';
import EarlyMilestones from './pages/EarlyMilestones';
import Music from './components/Music';
import AboutMusic from './pages/AboutMusic';
import { MusicProvider } from './context/MusicContext';
import Hackathon from './pages/Hackathon';

const App: React.FC = () => {
  return (
    <BrowserRouter basename="/website">
      <ScrollToTop />
      <MusicProvider>
        <Music />
        <Routes>
          <Route
            path="/*"
            element={
              <>
                <NavbarBootstrap />
                <div className="d-flex flex-column min-vh-100">
                  <main className="flex-grow-1">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/events" element={<Events />} />
                      <Route path="/resources" element={<Resources />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/earlyMilestones" element={<EarlyMilestones />} />
                      <Route path="/aboutMusic" element={<AboutMusic />} />
                      <Route path="/hackathon" element={<Hackathon />} />
                    </Routes>
                  </main>
                  <Footer />
                </div>
              </>
            }
          />
        </Routes>
      </MusicProvider>
    </BrowserRouter>
  );
};

export default App;