import logo from './logo.svg';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About/Index';
import Contact from './pages/Contact/Index';

import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles

function App() {
  AOS.init()
  return (
      <Router>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/contact" element={ <Contact /> } />
        </Routes>
      </Router>
  );
}

export default App;
