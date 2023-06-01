import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCommentsPost } from '../redux/actions/actionsCreator';


// Define the component that will render the comments
const Comments = ()  => {
  const dispatch = useDispatch();
  const comments = useSelector(state => state?.posts?.allCommentsPost);

  useEffect(() => {
    dispatch(getCommentsPost());
  }, [dispatch]);

  return (
    <div>
      {comments.map(comment => (
        <div key={comment.id}>
          <h3>{comment.author}</h3>
          <p>{comment.text}</p>
        </div>
      ))}
    </div>
  );
}
export default Comments;