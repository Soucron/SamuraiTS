import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {message} from 'antd';

type MyPostsPropsType = {
    message: string
    likeCount: number
}

const MyPosts = () => {

    let postsData = [{id: 1, message: 'Hi, how are you?', likeCount: 15},
        {id: 2, message: 'Its my first post', likeCount: 20}]
    let postsElement = postsData.map(post => <Post message={post.message} likeCount={post.likeCount}/>)

    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            {postsElement}

        </div>

    )
        ;
};

export default MyPosts;