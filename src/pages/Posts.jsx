import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getCommentsPost, getUser, getUserPosts, setAllPosts, setAllUsers } from "../redux/actions/actionsCreator";
import CardPosts from "../components/CardPosts";


const Posts = () => {
    const dispatch = useDispatch();
    // const allPosts = useSelector((state) => state?.posts?.allPosts);
    // const posts = useSelector((state) => state.posts);
    // const {allPosts, allCommentsPost} = posts;
    // const postId = allPosts.map(postId => postId.id);
    useEffect(() => {
        dispatch(setAllPosts());
        // dispatch(setAllUsers());
        // dispatch(getCommentsPost({postId}));
        // dispatch(getUserPosts());
        // dispatch(getUser());
    }, []);
// console.log(allPosts);
// console.log(allCommentsPost);
// console.log(getCommentsPost({postId}));
    return <CardPosts />;
};
export default Posts;
