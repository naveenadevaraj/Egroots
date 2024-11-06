// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App'; // Import your App component

ReactDOM.render(
    <BrowserRouter> {/* Wrap App in BrowserRouter */}
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
