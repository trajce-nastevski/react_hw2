const Posts = (props) => {
    return (
        <div id='posts'>
            <h3>Posts</h3>
            <ul>
                {props.posts.map((post, index) => {
                    return (
                        <li key={index}>
                            <span>ID of User: {post.userId}</span>
                            <br />
                            <span>ID of Post: {post.id}</span> 
                            <br />
                            <span>Post Title: {post.title}</span> 
                            <br />
                            <span>Post body: {post.body}</span>
                            <br />
                            <br />
                        </li>
                    )
                })
                }
            </ul>
        </div>
    );
};

export default Posts;