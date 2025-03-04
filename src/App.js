import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/Homepage';
import Aboutme from './components/Aboutme.js';
import Projects from './components/Projects.js';
import Education from './components/Education.js'


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
        </Routes>
          
      </div>
    </Router>
    
  );
}

export default App;
