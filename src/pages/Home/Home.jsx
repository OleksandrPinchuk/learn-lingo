import css from "./Home.module.css";
import icons from "/symbol-defs.svg";

const Home = () => {
    return (
        <div className="container">
            <div>
                <div>
                    <div>
                        <h2>Unlock your potential with the best  language tutors</h2>
                        <p>Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors.</p>
                        <button>Get started</button>
                    </div>
                    <div>
                        {/* <img src="/public/home-orange.svg" alt="logo" width="568" height="530" className={css.svg}/> */}
                        <img src={`${icons}#icon-home-blue`} alt="logo" width="568" height="530" className={css.svg}/>
                        <svg className={css.svg}>
                            {/* <use href={`${icons}#icon-home-blue`} /> */}
                            {/* <use href="/public/home-orange.svg" /> */}
                        </svg>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Home