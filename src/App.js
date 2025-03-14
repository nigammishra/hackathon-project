import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HeroSection from '../src/Component/HeroSection';
// import HeroSection from './Component/HeroSection'; // Example for another page
import ParticleBackground from './Component/ParticleCanvas';
// import VantaWavesEffect from './Component/VantaWavesEffect';
// import KiplingPoem  from './Component/KiplingPoem.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<HeroSection />} /> */}
          {/* <Route path="/" element={<KiplingPoem />} /> */}
          <Route path="/" element={<ParticleBackground />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
