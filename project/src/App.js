import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LogIn from './Component/Registration/LogIn';
import Registration from './Component/Registration/Registration';
// import Home from './Component/Registration/HomeLogInBtn';
import UserMainPage from './Component/User/UserMainPage';
import PrivateUserRoute from './Component/PrivateRoutes/PrivateUserRoute';
import PrivateLogInRoute from './Component/PrivateRoutes/PrivateLogInRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route index element={<LogIn />} />
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
        <Route path="/user" element={
          <PrivateUserRoute>
            <UserMainPage />
          </PrivateUserRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;