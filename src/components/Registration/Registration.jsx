import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { auth, database } from "../../firebase/firebase.js";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import css from "./Registration.module.css";


const Registration = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const userCred = await createUserWithEmailAndPassword(auth, data.email, data.password);
            await set(ref(database, "users/" + userCred.user.uid), {
                username: data.username,
                email: data.email,
            });
            navigate("/dashboard");
        } catch (error) {
        alert(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className={css.header}>Registration</h2>
            <p className={css.text}>Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information</p>
            <input placeholder="Name" {...register("username", { required: "Name is required" })} className={css.input} />
            {errors.username && <p className={css.error}>{errors.username.message}</p>}
            <input placeholder="Email" {...register("email", { required: "Email is required", pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address"
                    } })} className={css.input} />
            {errors.email && <p className={css.error}>{errors.email.message}</p>}
            <input placeholder="Password" {...register("password", { required: "Password is required", minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters"
            }
            })} className={css.input} />
            {errors.password && <p className={css.error}>{errors.password.message}</p>}
            <button type="submit" className={css.button}>Sign Up</button>
        </form>
    );
}

export default Registration;