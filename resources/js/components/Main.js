import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import Login from './Login';

function Main() {
  
    return (
        <div class="main-wrapper">
            <Routes>
                <Route path="/" element={ <Dashboard /> } />
                <Route path="/home" element={ <Home/> } />
                <Route path="/login" element={ <Login/> } />
            </Routes>
        </div>
    );
}

export default Main;

if (document.getElementById('app')) {
    ReactDOM.render(
        <BrowserRouter>
            <Main />
        </BrowserRouter>, 
        document.getElementById('app')
    );
}
