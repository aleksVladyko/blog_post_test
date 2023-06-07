import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAllPosts, setAllUsers } from "../redux/actions/actionsCreator";
import CardPosts from "../components/CardPosts";

const Posts = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setAllPosts());
        dispatch(setAllUsers());
    }, [dispatch]);
    return <CardPosts />;
};
export default Posts;
