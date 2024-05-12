// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ProductDetail from './ProductDetail';
import Navigation from './Navigation';
import Box from '@mui/material/Box';

const App = () => (
  <Router>
    <Box sx={{ display: 'flex' }}>
      <Navigation />
      <Box sx={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:title" element={<ProductDetail />} />
        </Routes>
      </Box>
    </Box>
  </Router>
);

export default App;
