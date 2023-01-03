import React from 'react';
import './App.css';
import Footer from "./Components/Footer";


function App() {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img src="./Components/Logo.svg" alt=""/>
            </header>
            <nav className="navbar">
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>

            </nav>
            <div className="content">
                <div>
                    <img
                       alt="" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fyandex.ru%2Fimages%2F&psig=AOvVaw0ZT-8lLbYOHbj86M5nwL2i&ust=1672835119332000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCICu08myq_wCFQAAAAAdAAAAABAJ"/>
                </div>
                <div>
                    Ava + description
                </div>
                <div>
                    My posts
                </div>
                <div>
                    Post 1
                </div>
                <div>
                    Post 2
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
