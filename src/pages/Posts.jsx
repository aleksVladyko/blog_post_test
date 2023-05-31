import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getCommentsPost, getUser, getUserPosts, setAllPosts, setAllUsers } from "../redux/actions/actionsCreator";
import CardPosts from "../components/CardPosts";


const Posts = () => {
    const dispatch = useDispatch();
    const allPosts = useSelector((state) => state?.posts?.allPosts);
    useEffect(() => {
        dispatch(setAllPosts());
        dispatch(setAllUsers());
        dispatch(getCommentsPost());
        dispatch(getUserPosts());
        // dispatch(getUser());
    }, [dispatch]);
console.log(allPosts);
    return <CardPosts />;
};
export default Posts;
