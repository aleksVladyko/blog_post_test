// import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import avatar from "../img/avatar.svg";
import { useLocation} from "react-router-dom";
import { useSelector } from "react-redux";
// import { getUsers } from "../redux/actions/actionsCreator";
// import { getUsers } from "../api";
// import axios from "axios";
const CardPosts = () => {
    // const navigate = useNavigate();
    const location = useLocation();

    const allPosts = useSelector((store) => store?.posts?.allPosts || []);
    const allUsers = useSelector((store) => store?.posts?.allUsers || []);
    // const users = useSelector((store) => store?.posts.users || [] );
    console.log(allUsers); 
//получаю автора по клику на аватарку 
// перенести в редюсер
    // const getUserProfile = async (id) => {
    //     navigate("/posts/:id");
    //       try {
    //        const uId = await axios.get(
    //             `https://jsonplaceholder.typicode.com/users/${id}/posts`
    //         );
    //         console.log(uId);
    //         return uId;
    //     } catch (error) {
    //         console.error(error);
    //     }
    //     // getUsers();
    // };

    return (
        <Stack gap={2} className="mt- p-5">
            <div className="d-flex flex-column align-self-center p-2 text-dark">
                {location.pathname === "/posts/:id" ? (
                    <h3>Автор: name author</h3>
                ) : (
                    <h3>Список постов</h3>
                )}
            </div>
            {allPosts.map((post) => {
                const getColor = post.id % 2 === 0;
                let style = {};
                {
                    getColor
                        ? (style = {
                              overflow: "auto",
                              background: "#898888d4",
                          })
                        : (style = { overflow: "auto", background: "#FF9473" });
                }
                return (
                    <Card
                        key={post.id}
                        className="p-2 text-white d-flex flex-row align-items-center "
                        border="dark"
                        style={style}
                        // style={{ overflow: "auto", background: "#898888d4" }}
                    >
                        <Card.Img
                            key={post.userId}
                            // onClick={() => {getUsers(post.userId)}}
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
                            <Button variant="info">Comments</Button>
                        </Card.Body>
                    </Card>
                );
            })}
        </Stack>
    );
};
export default CardPosts;
