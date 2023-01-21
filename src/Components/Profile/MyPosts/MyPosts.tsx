import React from 'react';
import Post from './Post/Post';


export type MyPostsPropsType = {
    postsData: {
        id?: number,
        message: string,
        likeCount: number
    }[],
}



const MyPosts = (props: MyPostsPropsType) => {


    let postsElement = props.postsData.map(p => <Post message={p.message} likeCount={p.likeCount}/>)

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