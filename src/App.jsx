import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import './App.css';
import SearchPage from './Pages/SearchPage';
import ProductDetailPage from './Pages/ProductDetailPage';
import PekerjaanPage from './Pages/PekerjaanPage';
import DetailPekerjaan from './Components/Pekerjaan/DetailPekerjaan';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/productdetail/:slug" element={<ProductDetailPage />} />
        <Route path="/pekerjaan" element={<PekerjaanPage />} />
        <Route path="/pekerjaan/:slug" element={<PekerjaanPage />} />
      </Routes>
    </Router>
  );
}

export default App;
