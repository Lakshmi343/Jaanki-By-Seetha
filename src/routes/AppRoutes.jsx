import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

// Pages import
import Home from '../pages/Home';
import Categories from '../pages/Categories';
import ProductListing from '../pages/ProductListing';
import ProductDetails from '../pages/ProductDetails';
import Reels from '../pages/Reels';
import CustomerDashboard from '../pages/CustomerDashboard';
import About from '../pages/About';
import Contact from '../pages/Contact';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="categories" element={<Categories />} />
        <Route path="shop" element={<ProductListing />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="reels" element={<Reels />} />
        <Route path="dashboard" element={<CustomerDashboard />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        
        {/* Elegant Fallback redirect to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
