import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

import {dialogsDataType} from '../../App';











const Dialogs = (props: dialogsDataType) => {



        let dialogsElements = props.dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)

        let messagesElements = props.messageData.map(message => <Message message={message.message} id={message.id}/>)


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