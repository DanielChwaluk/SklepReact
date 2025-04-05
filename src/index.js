import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Koszyk from "./pages/Koszyk";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element = {<Home />} />
            <Route path="Koszyk" element = {<Koszyk />}/>
        </Route>
      </Routes>
    </BrowserRouter>  
    </CartProvider>
  </React.StrictMode>
);
