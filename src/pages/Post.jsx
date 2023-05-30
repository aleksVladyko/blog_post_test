// import { useSelector, useDispatch } from "react-redux";
import CardPosts from "../components/CardPosts";
// import { getUsers } from "../redux/actions/actionsCreator";

const Post = () => {
    // const dispatch = useDispatch();
    // const users = useSelector((store) => store?.posts?.users || []);
    // console.log(users);
    // const handleUsers = () => {
    //     dispatch(getUsers());
    // };

    return (
        <div>
            {/* <button onClick={handleUsers}> users</button> */}
            <CardPosts />
        </div>
    );
};
export default Post;
