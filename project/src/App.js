import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LogIn from './Component/Registration/LogIn';
import Registration from './Component/Registration/Registration';
import UserMainPage from './Component/User/UserMainPage';
import PrivateUserRoute from './Component/PrivateRoutes/PrivateUserRoute';
import PrivateLogInRoute from './Component/PrivateRoutes/PrivateLogInRoute';
import Header from './Component/Common/Header';
import Rout from './Component/User/Rout';

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;