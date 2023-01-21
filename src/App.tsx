import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';

export type dialogType = {
    id: number,
    name: string
}
export type messageType = {
    id?: number,
    message: string
}
export type postType = {
    id?: number,
    message: string,
    likeCount: number
}
export type profileDataType = {
    postsData:
        postType[],
}
export type dialogsDataType = {
    dialogsData: dialogType[],

    messageData: messageType[],
}
export type MyAppPropsType = {
    postsData:
        postType[],
    dialogsData: dialogType[],

    messageData: messageType[],
}


function App(props: MyAppPropsType) {
    return (<BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/dialogs/*"
                               element={<Dialogs dialogsData={props.dialogsData} messageData={props.messageData}/>}/>
                        <Route path="/profile/" element={<Profile postsData={props.postsData}/>}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;








