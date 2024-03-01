import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import ManagermentUser from './pages/managermentUser/ManagermentUser';
import Navbar from './components/navigate/Navbar';
import ManagermentDevice from './pages/managermentDevice/ManagermentDevice';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/managerment/user" element={<ManagermentUser />} />
          <Route path="/managerment/device" element={<ManagermentDevice />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
