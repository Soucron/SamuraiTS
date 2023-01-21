import s from './Message.module.css';
import React from 'react';
import {messageType} from '../../../App';


const Message = (props: messageType ) => {
    return (<div className={s.message}>{props.message}</div>)
}

export default Message