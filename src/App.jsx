import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './Page/LoginPage';
import DashBoard from './Page/DashBoard';
import UserPage from './Page/UserPage';

function App() {
    return (
        <div className='app'>
            <NavBar />
            <div className="pages">
                <Routes>
                    <Route path="/" element={<DashBoard />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path="/user/:id" element={<UserPage />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;

