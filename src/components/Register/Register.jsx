import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { auth, database } from "../../firebase/firebase.js";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
        const userCred = await createUserWithEmailAndPassword(auth, email, password);
        await set(ref(database, "users/" + userCred.user.uid), {
            username,
            email
        });
        navigate("/dashboard");
        } catch (error) {
        alert(error.message);
        }
    };

    return (
        <form onSubmit={handleRegister}>
        <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Register</button>
        </form>
    );
}

export default Register;