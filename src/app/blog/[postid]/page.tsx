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
import { articles } from "../page"; // استيراد المقالات من صفحة المدونة الرئيسية

interface PostPageProps {
  params: {
    postid: string;
  };
}

const PostPage = ({ params }: PostPageProps) => {
  // البحث عن المقال باستخدام الـ ID
  const article = articles.find(
    (item) => item.id.toString() === params.postid
  );

  // إذا لم يتم العثور على المقال، عرض صفحة 404
  if (!article) {
    notFound();
  }

  // عرض المقال
  return (
    <div className="container mx-auto p-4 max-w-3xl">
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
  );
};

export default PostPage;