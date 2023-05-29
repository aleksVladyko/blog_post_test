import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllPosts } from "../redux/actions/actionsCreator";
import CardPosts from "../components/CardPosts";

const Posts = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAllPosts());
    }, [dispatch]);

    return <CardPosts />;
};
export default Posts;
