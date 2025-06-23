import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.js";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import css from "../Registration/Registration.module.css";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    
    const onSubmit = async (data) => {
        try {
            await signInWithEmailAndPassword(auth, data.email, data.password);
            navigate("/teachers");
            console.log("signed in")
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className={css.header}>Log In</h2>
            <p className={css.text}>Welcome back! Please enter your credentials to access your account and continue your search for an teacher.</p>
            {errors.email && <p className={css.error}>{errors.email.message}</p>}
            <input placeholder="Email" {...register("email", { required: "Email is required", pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Invalid email address"
            }
            })} className={css.input} />
            {errors.password && <p className={css.error}>{errors.password.message}</p>}
            <input placeholder="Password" {...register("password", { required: "Password is required", minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters"
                        }
                        })} className={css.input} />
            <button type="submit" className={css.button}>Login</button>
        </form>
    );
};

export default Login;