import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ShopProvider>
  );
}

export default App;
