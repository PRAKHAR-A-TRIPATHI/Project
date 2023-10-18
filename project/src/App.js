import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LogIn from './Component/Registration/LogIn';
import Registration from './Component/Registration/Registration';
import Home from './Component/Registration/HomeLogInBtn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;