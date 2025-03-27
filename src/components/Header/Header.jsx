import css from "./Header.module.css";

const Header = () => {
    return (
        <header>
            <a href="/">
                <svg className={css.svg} >
                    <use href="/logo.svg" />
                </svg>
                <img src="/logo.svg" alt="logo"/>
            </a>
        </header>
    )
}

export default Header