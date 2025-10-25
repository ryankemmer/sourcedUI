import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import PrivacyPolicy from './components/privacyPolicy/PrivacyPolicy';


function App() {
  return (
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
    </Routes>
  );
}

function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<WrappedApp />);