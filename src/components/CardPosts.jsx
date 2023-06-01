import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Stack, Card, Button, Badge } from "react-bootstrap";
import avatar from "../img/avatar.svg";

const CardPosts = () => {
    const navigate = useNavigate();

    const allPosts = useSelector((state) => state?.posts?.allPosts);
    const allUsers = useSelector((state) => state?.posts?.allUsers);
    const allCommentsPost = useSelector(
        (state) => state?.posts?.allCommentsPost
    );
    const allUserPosts = useSelector((state) => state?.posts?.allUserPosts);
    const user = useSelector((state) => state?.posts?.user);
    const loading = useSelector((state) => state?.posts?.isLoading);
    const error = useSelector((state) => state?.posts?.error);

    // console.log(allPosts);
    // console.log(allUsers);
    // console.log(allPosts);
    // console.log(allUserPosts);
    // console.log(user);

    // if (!allPosts || !allUsers) return null;

    return (
        <Stack gap={2} className="mt- p-5">
            <div className="d-flex flex-column align-self-center p-2 text-dark">
                <h3>Список постов</h3>
            </div>
            {allPosts.loading && <p>Loading...</p>}
            {error && !loading && <p>{error}</p>}
            {allPosts.length > 0 &&
                allPosts.map((post, index) => {
                    const colorClass = index % 2 === 0 ? "even" : "odd";
                    return (
                        <Card
                            key={post.id}
                            className={`p-2 text-white d-flex flex-row align-items-center ${colorClass}`}
                            border="dark"
                        >
                            <Card.Img
                                key={post.userId}
                                onClick={() => navigate(`${post.userId}`)}
                                // onClick={getUserProfile}
                                src={avatar}
                                style={{
                                    height: "70px",
                                    width: "70px",
                                    cursor: "pointer",
                                }}
                            />

                            <Card.Body>
                                <Card.Title className="text-center">
                                    {post.title.toUpperCase()}
                                </Card.Title>
                                <Card.Text>{post.body}</Card.Text>
                                <Button variant="info">
                                    Comments
                                    <Badge bg="secondary">9</Badge>
                                </Button>
                            </Card.Body>
                        </Card>
                    );
                })}
        </Stack>
    );
};
export default CardPosts;
