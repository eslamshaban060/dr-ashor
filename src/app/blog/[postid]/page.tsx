// import React from "react";

// const PostPage = async ({
//   params,
// }: {
//   params: Promise<{ postid: string }>;
// }) => {
//   const { postid } = await params;
//   return <div>My Post: {postid}</div>;
// };

// export default PostPage;


"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import { articles } from "../page";
import RecentArticles from "./RecentArticles"

interface PostPageProps {
  params: {
    postid: string;
  };
}

const PostPage = ({ params }: PostPageProps) => {
  const article = articles.find((item) => item.id.toString() === params.postid);

  if (!article) {
    notFound();
  }

  // فلترة المقالات لعرض الأحدث في الشريط الجانبي (مثلاً، المقالات الثلاثة الأخيرة)
  const recentArticles = articles.filter(item => item.id !== article.id).slice(0, 3);

  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row gap-8 mb-10 pt-40">
      
      {/* عمود المقال الرئيسي */}
      <div className="flex-1">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
          <div className="relative w-full h-80 mb-6">
            <Image
              src={article.image}
              alt={article.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="prose max-w-none text-gray-700 leading-relaxed">
            <div dangerouslySetInnerHTML={{ __html: article.body }} />
          </div>
        </div>
      </div>
      
      {/* الشريط الجانبي */}
      <div className="w-full md:w-1/3">
        <RecentArticles articles={recentArticles} />
      </div>

    </div>
  );
};

export default PostPage;