import { Card, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
const Comments = ({ postId, commentsVisible }) => {
    const allComments = useSelector((state) => state?.posts?.allCommentsPost);

    const postComments = allComments?.filter(
        (comment) => comment.postId === postId
    );

    if (
        !commentsVisible[postId] ||
        !postComments ||
        postComments.length === 0
    ) {
        return null;
    }

    return (
        <div>
            {postComments.map((comment) => (
                <Card border="dark" key={comment.id}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>{comment.email}</ListGroup.Item>
                        <ListGroup.Item>{comment.body}</ListGroup.Item>
                    </ListGroup>
                </Card>
            ))}
        </div>
    );
};

export default Comments;
