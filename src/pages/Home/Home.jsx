import css from "./Home.module.css";
import icons from "/symbol-defs.svg";

const Home = () => {
    return (
        <div className="container">
            <div className={css.wrapper}>
                <div className={css.box}>
                    <div className={css.content}>
                        <h2 className={css.title}>Unlock your potential with the best  language tutors</h2>
                        <p className={css.message}>Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors.</p>
                        <button className={css.button}>Get started</button>
                    </div>
                    <img src="/home-orange.svg" alt="girl at the computer" className={css.svg} />
                </div>
                <ul className={css.statistic}>
                    <li className={css.item}>
                        <p className={css.number}>32,000 +</p>
                        <p className={css.text}>Experienced tutors</p>
                    </li>
                        <li className={css.item}>
                        <p className={css.number}>300,000 +</p>
                        <p className={css.text}>5-star tutor reviews</p>
                    </li>
                    <li className={css.item}>
                        <p className={css.number}>120 +</p>
                        <p className={css.text}>Subjects taught</p>
                    </li>
                    <li className={css.item}>
                        <p className={css.number}>200 +</p>
                        <p className={css.text}>Tutor nationalities</p>
                    </li>
                </ul>
                
            </div>
        </div>
    )
}

export default Home