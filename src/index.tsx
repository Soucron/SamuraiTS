import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let dialogsData = [{id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'}]

let messagesData = [{id: 1, message: 'Hi'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
    {id: 6, message: 'Yo'}]

let postsData = [{id: 1, message: 'Hi, how are you?', likeCount: 15},
    {id: 2, message: 'Its my first post', likeCount: 20}]





ReactDOM.render(
    <App
        postsData={postsData}
        messageData={messagesData}
        dialogsData={dialogsData}
    />,
    document.getElementById('root')
);