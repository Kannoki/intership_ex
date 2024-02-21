import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home';
import Login from './pages/login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
