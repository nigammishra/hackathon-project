import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HeroSection from '../src/Component/HeroSection';
import HeroSection from './Component/HeroSection'; // Example for another page
import ParticleBackground from './Component/ParticleCanvas';
import Header from './HeadAndFoot/Header.js';
 
// import KiplingPoem  from './Component/KiplingPoem.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
         
          {/* <Route path="/" element={<KiplingPoem />} /> */}
          <Route path="/" element={<ParticleBackground />} />
          <Route path="/herosection" element={<HeroSection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
