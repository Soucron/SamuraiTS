import React from 'react';
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {profileDataType} from '../../App';




const Profile = (props: profileDataType) => {
    return (
        <div className={s.content}>

            <ProfileInfo />
            <MyPosts postsData = {props.postsData}/>
        </div>

    )
        ;
};

export default Profile;