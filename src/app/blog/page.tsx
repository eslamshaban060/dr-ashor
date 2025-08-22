import React from "react";

interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const FetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  if (!response.ok) {
    throw new Error(
      "عذراً، حدث خطأ اثناء تحميل البوستات . يرجى المحاولة مرة أخرى."
    );
  }

  return (
    <div>
      <div>
        {posts.map((post: PostType) => (
          <div key={post.id}>{post.id <= 3 && post.body}</div>
        ))}
      </div>
    </div>
  );
};

export default FetchData;
