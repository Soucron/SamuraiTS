import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogPropsType = {
    id: number
    name: string
}

type MessagePropsType = {
    message: string
}

const DialogItem = (props: DialogPropsType) => {

    return (<div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: MessagePropsType ) => {
    return (<div className={s.message}>{props.message}</div>)
}


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name = {"Dimych"} id= {1}/>
                <DialogItem name = {"Andrey"} id= {2}/>
                <DialogItem name = {"Sveta"} id= {3}/>
                <DialogItem name = {"Sasha"} id= {4}/>


            </div>
            <div className={s.messages}>
                <Message message={"Hi"}/>
                <Message message={"How are you"}/>
                <Message message={"Yo"}/>
                <Message message={"Yo"}/>
                <Message message={"Yo"}/>
            </div>
        </div>
    );
};

export default Dialogs;