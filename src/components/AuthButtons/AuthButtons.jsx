import React from 'react';
import icons from "/symbol-defs.svg";
import css from "./AuthButtons.module.css";


const AuthButtons = ({ onLoginClick, onRegisterClick }) => {
    return (
        <div className={css.box}>
            <button onClick={onLoginClick} className={css.logIn}>
                <svg className={css.svg}>
                    <use href={`${icons}#icon-log-in`} />
                </svg>
                Log in
            </button>
            <button onClick={onRegisterClick} className={css.registration}>Registration</button>
        </div>
    )
};

export default AuthButtons;