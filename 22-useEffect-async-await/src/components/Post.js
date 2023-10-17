import "./Post.css";

function Post({ userId, id, title, body }) {
  console.log(id);

  return (
    <div className="post">
      <p>{id}</p>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
}

export default Post;
