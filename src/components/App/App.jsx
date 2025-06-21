import { Route, Routes } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../../pages/Home/Home";
import NotFound from "../../pages/NotFound/NotFound";
import Teachers from "../../pages/Teachers/Teachers";
import AuthProvider from "../../firebase/AuthContext.jsx";
import Registration from "../Registration/Registration.jsx";
import Login from "../Login/Login.jsx";

const App = () => {
    return (
        <AuthProvider>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/teachers" element={<Teachers />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Registration />} />
                    <Route path="*" element={<NotFound />}  />
                </Routes>
            </Layout>
        </AuthProvider>
    )
};

export default App;