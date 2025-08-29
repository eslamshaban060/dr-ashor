import Link from "next/link";
import { Article } from "@/types/articles";
import React from "react";
import Image from "next/image";

type BlogCardProps = {
  article: Article;
};

// const BlogCard = ({ article }: BlogCardProps) => {
//   return (
//     <div className="bg-white px-5 rounded-2xl shadow-md overflow-hidden border-[2px] border-white  hover:border-[var(--color-primary)] hover:shadow-xl transition-all duration-500 group">
//       <div className="relative w-full h-48 overflow-hidden">
//         <Image
//           src={article.image}
//           alt={article.title}
//           fill
//           className="object-cover transition-all duration-500 group-hover:scale-110"
//           sizes="(max-width: 768px) 100vw, 
//                  (max-width: 1200px) 50vw, 
//                  33vw"
//         />
//       </div>

//       <div className="p-5">
//         <h4 className="font-bold text-xl mb-2 line-clamp-1">{article.title}</h4>
//         <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
//         <a
//           href="#"
//           className="inline-block text-[var(--color-primary)] font-semibold hover:underline"
//         >
//           اقرأ المزيد →
//         </a>
//       </div>
//     </div>
//   );
// };

// ... الكود اللي فوق
const BlogCard = ({ article }: BlogCardProps) => {
  return (
    <Link href={`/blog/${article.id}`}>
      <div className="bg-white px-5 rounded-2xl shadow-md overflow-hidden border-[2px] border-white  hover:border-[var(--color-primary)] hover:shadow-xl transition-all duration-500 group">
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 
                       (max-width: 1200px) 50vw, 
                       33vw"
          />
        </div>

        <div className="p-5">
          <h4 className="font-bold text-xl mb-2 line-clamp-1">{article.title}</h4>
          <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
          <div
            className="inline-block text-[var(--color-primary)] font-semibold hover:underline"
          >
            اقرأ المزيد →
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

