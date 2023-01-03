import React from 'react';
import './App.css';
import Technologies from "./Components/Technologies";
import Header from "./Components/Header";
import Footer from "./Components/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Technologies/>
            <Footer/>
        </div>
    );
}

export default App;
