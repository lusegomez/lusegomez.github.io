import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/Homepage';
import Aboutme from './components/Aboutme.js';
import Projects from './components/Projects.js';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
          
      </div>
    </Router>
    
  );
}

export default App;
