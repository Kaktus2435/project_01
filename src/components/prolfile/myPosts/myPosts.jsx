import React from "react";
import Post from "./posts/Post";
import m from "./myPosts.module.css";
import Like from "./posts/Like";

const MyPosts = () => {
    return (
        <div>
            <div>
                <textarea className={m.area} name='posts' id="" cols="30" rows="10"></textarea>
                <button>Add post</button>
            </div>
            <Post message='Here is a comment' />
            <Post like='like-20' />
            <Post message='I learn to react' />
            <Post like='like-15' />
        </div>
    );

}
export default MyPosts;