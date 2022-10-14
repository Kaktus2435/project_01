import React from "react";
import Post from "./posts/Post";
import m from "./myPosts.module.css";

const MyPosts = () => {
    return (
        <div>
            <div>
                <textarea className={m.area} name='posts' id="" cols="30" rows="10"></textarea>
                <button>Add post</button>
            </div>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );

}
export default MyPosts;