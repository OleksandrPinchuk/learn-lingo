import { Route, Routes } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../../pages/Home/Home";
import NotFound from "../../pages/NotFound/NotFound";

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />}  />
            </Routes>
        </Layout>
    )
}

export default App