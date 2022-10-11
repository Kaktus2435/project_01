import React from "react";

const Header = () => {
    return (
        <div className="Header">
            <div className="header__logo">
                <img src="https://png.pngtree.com/png-vector/20190217/ourmid/pngtree-smile-vector-template-design-illustration-png-image_555080.jpg" alt="logo" />
            </div>
            <div className="Header__menu">
                <button className="Header__button">
                    Home
                </button>
                <button className="Header__button">
                    Concept
                </button>
                <button className="Header__button">
                    About
                </button>
                <button className="Header__button">
                    Profile
                </button>
                <button className="Header__button">
                    Alerts
                </button>
                <button className="Header__button">
                    Account
                </button>
                <button className="Header__button">
                    More
                </button>
            </div>
        </div>
    );
}
export default Header;