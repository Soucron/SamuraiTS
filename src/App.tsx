import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import './App.css';
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";




function App() {
    return (<BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                    <Route path="/dialogs/*" element={<Dialogs/>}/>
                    <Route path="/profile/" element={<Profile/>}/>
                </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;








