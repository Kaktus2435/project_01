import React from "react";
import p from './Post.module.css';

const Post = () => {
    return (
        <div className={p.posts}>
            <div className={p.item}>
                <img src="https://static8.depositphotos.com/1207999/1027/i/950/depositphotos_10274377-stock-photo-business-man-suit-avatar.jpg" alt="" />
                post 1
            </div>
            <span>like</span>
        </div>
    );
}

export default Post;