import React, { useState, useMemo } from "react";
import { Badge, Button, Card, Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import avatar from "../img/avatar.svg";
import { getCommentsPost } from "../redux/actions/actionsCreator";
import Comments from "./Comments";
import Sorted from "./Sorted";
import PostsPagination from "./PostPagination";
import Search from "./Search";
import Spiner from "./Spinner";

const CardPosts = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [commentsVisible, setCommentsVisible] = useState(false);
    const [comments, setComments] = useState([]);
    const allPosts = useSelector((state) => state?.posts?.allPosts);
    const allComments = useSelector((state) => state?.posts?.allCommentsPost);
    const loading = useSelector((state) => state?.posts?.isLoading);
    const error = useSelector((state) => state?.posts?.error);
    // Добавляю состояние для cортировки
    const [sortType, setSortType] = useState(null);
    // Добавляю состояние для пагинации
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 10;
    // Добавляю  счетчик постов
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // Добавляю состояние для строки поиска
    const [searchTitle, setSearchTitle] = useState("");
    // const sortedPosts = useMemo(() => {
    //     return [...allPosts].sort(
    //         (a, b) =>
    //              // a.createdAt < b.createdAt ? 1 : -1
    //
    //              a.createdAt < b.createdAt
    //     );
    // }, [allPosts]);
    const currentPosts = useMemo(() => {
        // Фильтруем посты по заданному поисковому термину
        // сортировка сохраняется при переходе на другую страницу
        if (searchTitle) {
            return [...allPosts]
                .filter((post) =>
                    post.title.toLowerCase().includes(searchTitle.toLowerCase())
                )
                .slice(indexOfFirstPost, indexOfLastPost);
        }
        // Иначе выводим все посты
        return [...allPosts].slice(indexOfFirstPost, indexOfLastPost);
    }, [allPosts, searchTitle, indexOfFirstPost, indexOfLastPost]);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(allPosts.length / postsPerPage); i++) {
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
                sortedPosts={currentPosts}
            />

            <div className="d-flex flex-column align-self-center p-2 text-dark">
                <h3>Список постов</h3>
                {/* Добавил сортировку */}
                <Sorted sortedPosts={currentPosts} setSortType={setSortType} />
                {/* Добавил строку поиска */}
                <Search setSearchTitle={setSearchTitle} />
            </div>
            {loading ? <Spiner/> : null}
            {error && !loading && <p>{error}</p>}
            {!loading &&
                currentPosts.map((post, index) => {
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
                                {/* Добавил отображение комментариев */}
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
