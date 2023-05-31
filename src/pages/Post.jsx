import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, getUserPosts } from "../redux/actions/actionsCreator";
import { useParams } from "react-router-dom";

const Post = () => {
    const dispatch = useDispatch();
    const { userId } = useParams();

    console.log(userId);
    useEffect(() => {
        dispatch(getUser({userId}));
    }, [dispatch, userId]);

    const userPosts = useSelector((store) => store?.posts?.allUserPosts)
    // const allUsers = useSelector((store) => store?.posts?.allUsers);
    const user = useSelector((store) => store?.posts?.user);
    console.log(userPosts);
    console.log(user);

    return <div>kj</div>;
};
export default Post;
