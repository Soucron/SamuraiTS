import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';


type DialogPropsType = {
    id: number
    name: string
}

type MessagePropsType = {
    message: string
}

const DialogItem = (props:DialogPropsType) => {

    return (<div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: MessagePropsType) => {
    return (<div className={s.message}>{props.message}</div>)
}


const Dialogs = () => {

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

        let dialogsElements = dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)

        let messagesElements = messagesData.map(message => <Message message={message.message}/>)


        return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}

                </div>
            </div>
        );
    }
;

export default Dialogs;