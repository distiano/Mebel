import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import './App.css';
import SearchPage from './Pages/SearchPage';
import ProductDetailPage from './Pages/ProductDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/productdetail/:slug" element={<ProductDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
