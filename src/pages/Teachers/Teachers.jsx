import { useEffect, useState } from "react"
import { auth, database } from "../../firebase/firebase";
import { child, get, ref } from "firebase/database";
import { useAuth } from "../../firebase/AuthContext";
import { signOut } from "firebase/auth";
import icons from "/symbol-defs.svg";
import css from "./Teachers.module.css";
import MoreInfo from "../../components/MoreInfo/MoreInfo";

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    const [loading, setLoading] = useState(true);

    const { currentUser } = useAuth();
    const handleLogout = async () => {
        await signOut(auth);
        };

    useEffect(() => {
        const realtimeDatabase = ref(database);
        get(child(realtimeDatabase, "teachers")).then((snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                const teachersArray = Object.values(data);
                setTeachers(teachersArray);
                console.log(teachersArray);
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error("Data reception error:", error);
        }).finally(() => setLoading(false));
    },[])
    return (
        
        <div className={css.container}>
            <div>
                <p>Welcome {currentUser?.email}</p>
                <button onClick={handleLogout}>Logout</button>
            </div>
            <ul>
                {teachers.map((teacher, index) => (
                    <li key={index} className={css.card}>
                        <div className={css.circle}><img src={teacher.avatar_url} alt={teacher.name} width="96" className={css.img} /></div>
                        <div className="">
                            <div className={css.figures}>
                                <h3 className="">{teacher.name} {teacher.surname}</h3>
                                <p>Lessons done: {teacher.lessons_done}</p>
                                <svg className={css.star}>
                                    <use href={`${icons}#icon-star`} />
                                </svg>
                                <p className="">Rating: {teacher.rating}</p>
                                <p>Price / 1 hour: {teacher.price_per_hour}</p>
                            </div>
                            <p className="">Speaks: {teacher.languages.join(", ")}</p>
                            <p className="">Lesson Info: {teacher.lesson_info}</p>
                            <p className="">Conditions: {teacher.conditions.join(" ")}</p>

                            <p className="">{teacher.experience}</p>
                            <button className={css.heartBtn}>
                                <svg className={`${css.favorite}, ${css.icon}`}>
                                    <use href={`${icons}#icon-heart`} />
                                </svg>
                            </button>
                            {/* <button className={css.heartBtn} onClick={() => dispatch(toggleFavorite(camperId))}>
                                <svg className={`${ isFavorite ? `${css.favorite}` : ''} ${css.icon}`}>
                                    <use href={`${icons}#icon-heart`} />
                                </svg>
                            </button> */}
                        </div>
                        
                        <MoreInfo teacher={teacher}/>
                    </li>
                    
                ))}
            </ul>
        </div>
    )
}

export default Teachers