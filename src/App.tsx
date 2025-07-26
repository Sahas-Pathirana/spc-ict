import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Competitions from './pages/Competitions';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;