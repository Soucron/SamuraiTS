import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';



const MyPosts = () => {

    let postsData = [{id: 1, message: 'Hi, how are you?', likeCount: 15},
        {id: 2, message: 'Its my first post', likeCount: 20}]


    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post message={postsData[0].message} likeCount={postsData[0].likeCount}/>
            <Post message={postsData[1].message} likeCount={postsData[1].likeCount}/>

        </div>

    )
        ;
};

export default MyPosts;