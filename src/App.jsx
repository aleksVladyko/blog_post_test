import { Route, Routes } from "react-router-dom";
import Layout from "./Layout"
import Posts from "./pages/Posts";
import About from "./pages/About";
import Comments from "./pages/Comments";


function App() {

  return (
<Routes>
  <Route  path="/" element={<Layout />}>
    <Route index element={<Posts/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/comments" element={<Comments/>}/>
  </Route>
</Routes>
    
  )
}

export default App;
