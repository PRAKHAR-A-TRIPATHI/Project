import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LogIn from './Component/Registration/LogIn';
import Registration from './Component/Registration/Registration';
<<<<<<< HEAD
// import Home from './Component/Registration/HomeLogInBtn';
import UserMainPage from './Component/User/UserMainPage';
import PrivateUserRoute from './Component/PrivateRoutes/PrivateUserRoute';
import PrivateLogInRoute from './Component/PrivateRoutes/PrivateLogInRoute';
=======
import Home from './Component/Registration/HomeLogInBtn';
import Header from './Component/Header';
>>>>>>> dbdc43408d81abf9cf1c3113cf92a20016021222

function App() {
  return (
    <BrowserRouter>
    <Header/>
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