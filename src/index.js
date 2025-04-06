import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Your global styles (if any)
import App from './App'; // Main app component
import reportWebVitals from './reportWebVitals';

// This part creates a root element for rendering the React app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your app inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to measure performance, you can pass a function to log the results
reportWebVitals();
