import React from 'react';
import s from "./Post.module.css"

import {postType} from '../../../../App';


const Post = (props: postType) => {
    return (
        <div className={s.item}>
            <img src="https://www.reduceimages.com/img/char-1.png"/>
                {props.message}
            <div>
                <span>like: {props.likeCount}</span>
            </div>
        </div>


    )

};

export default Post;