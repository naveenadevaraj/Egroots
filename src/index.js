// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App'; // Import your App component
import { CartProvider } from './pages/CartProvider';

ReactDOM.render(
    <BrowserRouter> {/* Wrap App in BrowserRouter */}
         <CartProvider>
            <App />
        </CartProvider>
    </BrowserRouter>,
    document.getElementById('root')
);
