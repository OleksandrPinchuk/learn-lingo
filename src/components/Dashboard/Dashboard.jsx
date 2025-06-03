import { useAuth } from "../../firebase/AuthContext.jsx";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.js";

const Dashboard = () => {
    const { currentUser } = useAuth();

    const handleLogout = async () => {
    await signOut(auth);
        };

    return (
        <div>
            <h1>Welcome {currentUser?.email}</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Dashboard;