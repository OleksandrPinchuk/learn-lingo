import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.js";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unSub = onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
        });
        return unSub;
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser }}>
        {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;

export const useAuth = () => useContext(AuthContext);