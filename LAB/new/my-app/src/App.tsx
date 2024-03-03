import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/auth/Login';
import UserManagement from './pages/userManagement/UserManagement';
import DeviceManagement from './pages/deviceManagement/DeviceManagement';
import Home from './pages/home/Home';
import SettingManagement from './pages/deviceManagement/SettingManagement';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Routes>
        <Route element={<Header />}>
        <Route path='/home' element={<Home />} />
        <Route path='/users' element={<UserManagement />} />
        <Route path='/devices' element={<DeviceManagement />} />
        <Route path='/setting' element={<SettingManagement />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;