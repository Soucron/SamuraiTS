import React from 'react';
import './App.css';
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";


function App() {
    return (
        <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <Profile/>
                <Footer/>
        </div>
    );
}

export default App;
