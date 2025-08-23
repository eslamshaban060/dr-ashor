import React from "react";

const BlogCard = () => {
  return (
    <div className=" bg-white px-5 rounded-2xl shadow-md overflow-hidden hover:border-1  border-[var(--color-primary)]  hover:shadow-xl transition-all duration-500 group">
      <img
        src="/asets/blog-test.svg"
        alt="Medical Blog"
        className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110"
      />

      <div className="p-5">
        <h4 className="font-bold text-xl mb-2">عنوان المقال</h4>
        <p className="text-gray-600 mb-4 line-clamp-3">
          هذا نص تجريبي لمقال طبي يوضح بعض المعلومات الصحية المفيدة للقراء. يمكن
          أن يتضمن نصاً قصيراً لعرض المحتوى.
        </p>
        <a
          href="#"
          className="inline-block text-[var(--color-primary)] font-semibold hover:underline"
        >
          اقرأ المزيد →
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
