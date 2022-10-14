import React from "react";
import s from './nav.module.css';
const Nav = () => {
    return (
        <div className={s.navbar}>
            <button className={s.button}>
                Home
            </button>
            <button className={s.button}>
                Profile
            </button>
            <button className={s.button}>
                Messages
            </button>
            <button className={s.button}>
                News
            </button>
            <button className={s.button}>
                Settings
            </button>
        </div>
    );
}
export default Nav;  