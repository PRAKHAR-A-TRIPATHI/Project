import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LogIn from './Component/Registration/LogIn';
import Registration from './Component/Registration/Registration';


// import Home from './Component/Registration/HomeLogInBtn';
import UserMainPage from './Component/User/UserMainPage';
import PrivateUserRoute from './Component/PrivateRoutes/PrivateUserRoute';
import PrivateLogInRoute from './Component/PrivateRoutes/PrivateLogInRoute';

import Home from './Component/Registration/HomeLogInBtn';
import Header from './Component/Header';


import UserMainPage from './Component/User/UserMainPage';
import PrivateUserRoute from './Component/PrivateRoutes/PrivateUserRoute';
import PrivateLogInRoute from './Component/PrivateRoutes/PrivateLogInRoute';
import Rout from './Component/User/Rout';
import Profile from './Component/User/Profile/Profile';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={
          <PrivateLogInRoute>
            <LogIn />
          </PrivateLogInRoute>
        } />
        <Route path="/login" element={
          <PrivateLogInRoute>
            <LogIn />
          </PrivateLogInRoute>
        } />
        <Route path="/register" element={
          <PrivateLogInRoute>
            <Registration />
          </PrivateLogInRoute>
        } />

        <Route path="/" element={<Rout/>} >
          <Route path="/user" element={
            <PrivateUserRoute>
              <UserMainPage />
            </PrivateUserRoute>
          } />
          <Route path="/profile" element={
            <PrivateUserRoute>
              <Profile />
            </PrivateUserRoute>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;