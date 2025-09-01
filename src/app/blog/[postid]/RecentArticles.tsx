// src/components/RecentArticles.tsx
import Link from "next/link";
import Image from "next/image";
import { Article } from "@/types/articles"; // تأكد من استيراد النوع الصحيح

type RecentArticlesProps = {
  articles: Article[];
};

const RecentArticles = ({ articles }: RecentArticlesProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="font-bold text-xl mb-4 text-right">أحدث المقالات</h3>
      {articles.map((article) => (
        <Link key={article.id} href={`/blog/${article.id}`}>
          <div className="flex items-center gap-4 mb-4 cursor-pointer hover:bg-gray-100 rounded-lg p-2 transition-colors duration-200">
            <div className="relative w-16 h-16 rounded-md overflow-hidden">
              <Image src={article.image} alt={article.title} layout="fill" objectFit="cover" />
            </div>
            <p className="flex-1 font-semibold text-sm text-right">{article.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RecentArticles;