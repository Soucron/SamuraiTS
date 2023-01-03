import React from 'react';
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    alt=""
                    src="https://avatars.mds.yandex.net/i?id=4b1477cc376651ce8aebd92c185407f2e1d00240-4665500-images-thumbs&n=13"/>
            </div>
            <div>
                Ava + description
            </div>
            <MyPosts/>
        </div>

    )
        ;
};

export default Profile;