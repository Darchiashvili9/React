import { useEffect, useState } from "react";
import Post from "./Post";

function Posts() {
  const [posts, setPost] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPost(json))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // }

  if (error) {
    return <h1>Error:{error}</h1>;
  }

  return (
    <>
      <h1>POSTS</h1>
      <hr />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        posts &&
        posts.map((post, index) => {
          return <Post key={index} {...post} />;
        })
      )}
    </>
  );
}

export default Posts;
