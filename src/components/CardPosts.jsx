import React, { useState } from "react";
import { Badge, Button, Card, Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import avatar from "../img/avatar.svg";
import { getCommentsPost } from "../redux/actions/actionsCreator";
import Comments from "./Comments";
import Sorted from "./Sorted";
import PostsPagination from "./PostPagination";

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
    const sortedPosts = [...allPosts];
    // реализую пагинацию
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 10;
    // счетчик постов
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(sortedPosts.length / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

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
    //сортировка на текущей странице
    // сделать изменение массива постов через стэйт
    const sortPosts = (type) => {
        if (type === "up") {
            currentPosts.sort((a, b) => a.title.localeCompare(b.title));
        } else if (type === "down") {
            currentPosts.sort((a, b) => b.title.localeCompare(a.title));
        }
    };
    if (sortType) {
        sortPosts(sortType);
    }

    return (
        <Stack gap={2} className=" p-5">
            <PostsPagination
                handlePageChange={handlePageChange}
                currentPage={currentPage}
                pageNumbers={pageNumbers}
                postsPerPage={postsPerPage}
                sortedPosts={sortedPosts}
            />

            <div className="d-flex flex-column align-self-center p-2 text-dark">
                <h3>Список постов</h3>
                <Sorted sortedPosts={sortedPosts} setSortType={setSortType} />
            </div>
            {loading && <p>Loading...</p>}
            {error && !loading && <p>{error}</p>}
            {currentPosts.map((post, index) => {
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
