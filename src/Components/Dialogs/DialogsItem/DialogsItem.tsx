import s from './DialogsItem.module.css';
import {NavLink} from 'react-router-dom';
import React from 'react';
import {dialogType} from '../../../App';




const DialogItem = (props: dialogType) => {

    return (<div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem