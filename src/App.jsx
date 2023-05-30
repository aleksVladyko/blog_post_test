import { Route, Routes } from "react-router-dom";
// import { useSelector } from "react-redux";
import Layout from "./components/Layout";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import About from "./pages/About";


function App() {
    // const store = useSelector((store) => store);
    // console.log(store);
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Posts />} />
                <Route path="post/:id" element={<Post />} />
                <Route path="about" element={<About />} />
            </Route>
        </Routes>
    );
}

export default App;
