const Comments = (props) => {
    return (
        <div id='comments'>
            <h3>Comments</h3>
            <ul>
            { props.comments.map((comment, index) => {
                return (
                    <li key={index}>
                    <span>Id of Post: {comment.postId}</span>
                    <br /> 
                    <span>Id of Comment:{comment.id} </span>
                    <br /> 
                    <span>Name of Comment: {comment.name} </span>
                    <br /> 
                    <span>Email: {comment.email} </span>
                    <br /> 
                    <span>Comment: {comment.body}</span>
                    <br />
                    <br />
                    </li>
                )
            })
            }
            </ul>
        </div>
    )
};

export default Comments;