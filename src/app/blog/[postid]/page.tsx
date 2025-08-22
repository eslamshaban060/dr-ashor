import React from "react";

const PostPage = async ({
  params,
}: {
  params: Promise<{ postid: string }>;
}) => {
  const { postid } = await params;
  return <div>My Post: {postid}</div>;
};

export default PostPage;
