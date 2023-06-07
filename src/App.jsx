import { Route, Routes } from "react-router-dom";
// import { useSelector } from "react-redux";
import Layout from "./components/Layout";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import About from "./pages/About";


function App() {
    
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Posts />} />
                <Route path=":userId" element={<Post />} />
                <Route path="about" element={<About />} />
            </Route>
        </Routes>
    );
}

export default App;
