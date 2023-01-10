import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div>
                    <NavLink  to="/dialogs/1"  className={s.dialog}>Dimych</NavLink>
                </div>
                <div >
                    <NavLink to="/dialogs/2" className={s.dialog}>Andrey</NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs/3" className={s.dialog}>Sveta</NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs/4" className={s.dialog}>Sasha</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    );
};

export default Dialogs;