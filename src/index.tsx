import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './redux/state';







ReactDOM.render(
    <App
        postsData={state.profilePage.postsData}
        messageData={state.dialogsPage.messagesData}
        dialogsData={state.dialogsPage.dialogsData}
    />,
    document.getElementById('root')
);