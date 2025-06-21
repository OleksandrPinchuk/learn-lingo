import { NavLink } from "react-router";
import { useState } from "react";
import AuthButtons from "../AuthButtons/AuthButtons";
import ModalWrap from "../ModalWrap/ModalWrap";
import css from "./Header.module.css";
import Login from "../Login/Login";
import Registration from "../Registration/Registration.jsx";

const Header = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);

    return (
        <header className={css.header}>
            <a href="/">
                <img src="/logo.svg" alt="logo" width="133" height="28"/>
            </a>
            <nav className={css.nav}>
                <NavLink to="/" className={css.link}>Home</NavLink>
                <NavLink to="/teachers" className={css.link}>Teachers</NavLink>
            </nav>
            <AuthButtons
                onLoginClick={() => { setIsLoginOpen(true) }}
                onRegisterClick={() => { setIsRegisterOpen(true) }} 
            />
            <ModalWrap isOpen={isLoginOpen} handleClose={() => { setIsLoginOpen(false) }}>
                <Login />
            </ModalWrap>
            <ModalWrap isOpen={isRegisterOpen} handleClose={() => { setIsRegisterOpen(false) }}>
                <Registration />
            </ModalWrap>
        </header>
    )
}

export default Header