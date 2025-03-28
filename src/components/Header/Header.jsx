import { NavLink } from "react-router";
import css from "./Header.module.css";
import icons from "/symbol-defs.svg";

const Header = () => {
    return (
        <header className={css.header}>
            <a href="/">
                <img src="/logo.svg" alt="logo" width="133" height="28"/>
            </a>
            <nav className={css.nav}>
                <NavLink to="/" className={css.link}>Home</NavLink>
                <NavLink to="/teachers" className={css.link}>Teachers</NavLink>
            </nav>
            <div className={css.box}>
                <button className={css.logIn}>
                    <svg className={css.svg}>
                        <use href={`${icons}#icon-log-in`} />
                    </svg>
                    Log in
                </button>
                <button className={css.registration}>Registration</button>
            </div>
        </header>
    )
}

export default Header