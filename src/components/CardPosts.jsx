import PropTypes from "prop-types";
import React, { useState } from "react";
import { Badge, Button, Card, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import avatar from "../img/avatar.svg";

const CardPosts = (props) => {
    const [commentsVisible, setCommentsVisible] = useState(false);
    const navigate = useNavigate();
    const { allPosts, loading, error } = props;

    if (!allPosts) return null;

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
                                <Button
                                    variant="info"
                                    onClick={() =>
                                        setCommentsVisible(!commentsVisible)
                                    }
                                >
                                    Comments
                                    <Badge bg="secondary">9</Badge>
                                    {commentsVisible && <div>ddddddd</div>}
                                </Button>
                            </Card.Body>
                        </Card>
                    );
                })}
        </Stack>
    );
};
CardPosts.propTypes = {
    allPosts: PropTypes.array,
    allComments: PropTypes.array,
    loading: PropTypes.bool,
    error: PropTypes.string,
};

export default CardPosts;
