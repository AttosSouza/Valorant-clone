import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/styles/global.css';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
