// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Render Home component for both '/' and '/home' */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
