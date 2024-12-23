import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';
import SignUp from './pages/Register';

const App = () => {
  return (
    <Router>
            <ToastContainer />
            <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/Register' element={<SignUp/>}/>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;