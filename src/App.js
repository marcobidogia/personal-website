import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

const App = () => {
  return (
    <Router>
      <Routes> 
        <Route path="/landing" element={<Landing/>} />
        <Route path="/*" element={<NotFoundPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
