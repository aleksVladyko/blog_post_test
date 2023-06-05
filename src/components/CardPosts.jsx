import React, { useState } from "react";
import { Badge, Button, Card, Stack, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import avatar from "../img/avatar.svg";
import Comments from "./Comments";
import { getCommentsPost } from "../redux/actions/actionsCreator";
import Sorted from "./Sorted";

const CardPosts = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [commentsVisible, setCommentsVisible] = useState(false);
    const [comments, setComments] = useState([]);
    const allPosts = useSelector((state) => state?.posts?.allPosts);
    const allComments = useSelector((state) => state?.posts?.allCommentsPost);
    const loading = useSelector((state) => state?.posts?.isLoading);
    const error = useSelector((state) => state?.posts?.error);
    const [sortType, setSortType] = useState(null);

    if (!allPosts) return null;

    const handleGetComments = (postId) => {
        dispatch(getCommentsPost({ postId }));
        setComments((prevComments) => ({
            ...prevComments,
            [postId]: allComments,
        }));
        // убрать повторную отправку запроса на сервер при закрытии комментариев
        // или изменить логику запроса на получение всех комментов и фильтрацию по id
        setCommentsVisible((prevCommentsVisible) => ({
            ...prevCommentsVisible,
            [postId]: !prevCommentsVisible[postId],
        }));
    };
    // реализую сортировку по возрастанию и убыванию
    // сделать изменение массива постов через стэйт
    const sortPosts = (type) => {
        if (type === "up") {
            allPosts.sort((a, b) => a.title.localeCompare(b.title));
        } else if (type === "down") {
            allPosts.sort((a, b) => b.title.localeCompare(a.title));
        }
    };

    if (sortType) {
        sortPosts(sortType);
    }
    const handleChansge = (e) => {
        setSortType(e.target.value);
    };

    return (
        <Stack gap={2} className=" p-5">
            <div className="d-flex flex-column align-self-center p-2 text-dark">
                <h3>Список постов</h3>
                <Sorted handleChansge={handleChansge} />
            </div>
            {loading && <p>Loading...</p>}
            {error && !loading && <p>{error}</p>}
            {allPosts.map((post, index) => {
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
                                onClick={() => handleGetComments(post.id)}
                            >
                                Comments
                                <Badge bg="secondary">
                                    {(comments[post.id] || []).length}
                                </Badge>
                            </Button>
                            <Comments
                                postId={post.id}
                                commentsVisible={commentsVisible}
                            />
                        </Card.Body>
                    </Card>
                );
            })}
        </Stack>
    );
};

export default CardPosts;
