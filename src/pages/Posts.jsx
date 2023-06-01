import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
    // getCommentsPost,
    // getUser,
    // getUserPosts,
    setAllPosts,
    setAllUsers,
} from "../redux/actions/actionsCreator";
import CardPosts from "../components/CardPosts";

const Posts = () => {
    const dispatch = useDispatch();
    const allPosts = useSelector((state) => state?.posts?.allPosts);
    const loading = useSelector((state) => state?.posts?.isLoading);
    const error = useSelector((state) => state?.posts?.error);
    // const allComments = useSelector((state) => state?.posts?.allCommentsPost);
    // const allUsers = useSelector((state) => state?.posts?.allUsers);
    // const postId = 1;
    useEffect(() => {
        dispatch(setAllPosts());
        dispatch(setAllUsers());
        // dispatch(getCommentsPost({postId}));
        // dispatch(getUserPosts());
        // dispatch(getUser());
    }, []);
// console.log(allComments);
// console.log(allUsers);
// console.log(allComments);
    return <CardPosts allPosts={allPosts} loading={loading} error={error} />;
};
export default Posts;
