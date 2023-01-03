import React from 'react';
import './App.css';
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";


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
