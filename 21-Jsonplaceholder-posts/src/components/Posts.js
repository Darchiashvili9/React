import { useEffect, useState } from "react";
import Post from "./Post";

function Posts() {
  const [posts, setPost] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, []);

  return (
    posts && (
      <div>
        {posts &&
          posts.map((post, index) => {
            return <Post key={index} {...post} />;
          })}
      </div>
    )
  );
}

export default Posts;
