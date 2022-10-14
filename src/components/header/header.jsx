import React from "react";
import hed from './header.module.css';
const Header = () => {
    return (
        <div className={hed.header}>
            <div>
                <img className={hed.logo} src="https://png.pngtree.com/png-vector/20190217/ourmid/pngtree-smile-vector-template-design-illustration-png-image_555080.jpg" alt="logo" />
            </div>
            <div className={hed.menu}>
                <button className={hed.button}>
                    Home
                </button>
                <button className={hed.button}>
                    Concept
                </button>
                <button className={hed.button}>
                    About
                </button>
                <button className={hed.button}>
                    Alerts
                </button>
                <button className={hed.button}>
                    Account
                </button>
                <button className={hed.button}>
                    More
                </button>
            </div>
        </div>
    );
}
export default Header;