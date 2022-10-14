import React from "react";
import MyPosts from "./myPosts/myPosts";
import p from './profile.module.css';

const Profile = () => {
    return (
        <div>
            <div className={p.profile}>Hello. Welcome to my page. It was created to apply the knowledge gained while studying React!
            </div>
            <MyPosts />
        </div>
    );
}
export default Profile;