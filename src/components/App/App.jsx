import { Route, Routes } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../../pages/Home/Home";
import NotFound from "../../pages/NotFound/NotFound";
import Teachers from "../../pages/Teachers/Teachers";

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/teachers" element={<Teachers />} />
                <Route path="*" element={<NotFound />}  />
            </Routes>
        </Layout>
    )
}

export default App