// import { useSelector, useDispatch } from "react-redux";
// import { getAllPosts } from "../redux/actions/actionsCreator";

import CardPosts from "../components/CardPosts";


const Post = () => {
// const allPosts = useSelector(store => store?.posts?.allPosts || []);
// const userPost = useSelector(store => store?.posts?.userPost || []);
// const dispatch = useDispatch();
  
//   const handlePosts = () => {
//    dispatch(getAllPosts());
//   };

   return (
    <div>
      {/* <button onClick={handlePosts}> getPosts</button>
      {allPosts} */}
      <CardPosts />
    </div>
  );
};
export default Post;