import s from './DialogsItem.module.css';
import {NavLink} from 'react-router-dom';
import React from 'react';
import {DialogPropsType} from '../Dialogs';


const DialogItem = (props:DialogPropsType) => {

    return (<div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem