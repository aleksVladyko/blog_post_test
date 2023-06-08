import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, getUserPosts } from "../redux/actions/actionsCreator";
import { useParams } from "react-router-dom";
import { Button, Card, Stack } from "react-bootstrap";
import avatar from "../img/avatar.svg";

const Post = () => {
    const dispatch = useDispatch();
    const { userId } = useParams();

    // console.log(userId);
    useEffect(() => {
        dispatch(getUser({ userId }));
        dispatch(getUserPosts({ userId }));
    }, [dispatch, userId]);
    const userPosts = useSelector((store) => store?.posts?.allUserPosts);
    const user = useSelector((store) => store?.posts?.user);
    console.log(user);
    console.log(userPosts);

    return (
        <Stack gap={2} className="p-2">
            <div className="d-flex flex-column align-self-center p-2 text-dark">
                <h3>Автор: {user.name}</h3>
                <Button variant="info" href="/">
                    GO BACK
                </Button>
            </div>
            {userPosts.map((post) => {
                const colorClass = post.id % 2 === 0 ? "even" : "odd";
                return (
                    <Card
                        key={post.id}
                        className={`p-2 text-white d-flex flex-row align-items-center ${colorClass}`}
                        border="dark"
                    >
                        <Card.Img
                            key={post.userId}
                            src={avatar}
                            className="post-image"
                        />
                        <Card.Body>
                            <Card.Title className="text-center">
                                {post.title.toUpperCase()}
                            </Card.Title>
                            <Card.Text>{post.body}</Card.Text>
                        </Card.Body>
                    </Card>
                );
            })}
        </Stack>
    );
};
export default Post;
