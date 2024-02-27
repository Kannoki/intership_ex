import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/auth/Login';
import UserManagement from './pages/userManagement/UserManagement';
import { registerCharts } from 'utils/registerCharts';
import DeviceManagement from 'pages/deviceManagement/DeviceManagement';
import Home from 'pages/home/Home';
import SettingManagement from 'pages/deviceManagement/SettingManagement';

registerCharts();

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>

      {/* <Header /> */}
      <Routes>
      <Route path='/overview' element={<Home />} />
        <Route path='/users' element={<UserManagement />} />
        <Route path='/devices' element={<DeviceManagement />} />
        <Route path='/setting' element={<SettingManagement />} />
      </Routes>
    </div>
  );
}

export default App;
