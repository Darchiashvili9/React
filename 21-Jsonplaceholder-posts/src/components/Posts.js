import { useEffect, useState } from "react";
import Post from "./Post";

function Posts() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPost(json))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {posts &&
        posts.map((post, index) => {
          return <Post key={index} {...post} />;
        })}
    </div>
  );
}

export default Posts;
