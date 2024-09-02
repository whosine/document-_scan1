import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreateCollection from './pages/CreateCollection';
import ViewCollection from './pages/ViewCollection';
import UploadFile from './pages/UploadFile';
import './App.css'; // Make sure to import the CSS file

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' && <Navbar />}

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateCollection />} />
          <Route path="/view" element={<ViewCollection />} />
          <Route path="/upload" element={<UploadFile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
