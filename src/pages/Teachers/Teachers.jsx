import { useEffect, useState } from "react"
import { auth, database } from "../../firebase/firebase";
import { child, get, ref } from "firebase/database";
import { useAuth } from "../../firebase/AuthContext";
import { signOut } from "firebase/auth";
import css from "./Teachers.module.css";

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
                        <div className=""><img src={teacher.avatar_url} alt={teacher.name} width="100" /></div>
                        <div className="">
                            <h3 className="">{teacher.name} {teacher.surname}</h3>
                            <p className="">Speaks: {teacher.languages.join(", ")}</p>
                            <p className="">Rating: {teacher.rating}</p>
                            <p className="">Price per hour: ${teacher.price_per_hour}</p>
                            <p className="">{teacher.experience}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Teachers