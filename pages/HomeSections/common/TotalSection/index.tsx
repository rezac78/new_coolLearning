"use client";

import BlogIcon from "@/public/Icon/BlogIcon";
import UsersIcon from "@/public/Icon/ClockIcon";
import CommentIcon from "@/public/Icon/CommentIcon";
import CourseIcon from "@/public/Icon/CourseIcon";
import React, {useEffect, useRef, useState} from "react";

const statsData = [
 {
  id: 1,
  bgColor: "bg-[#10b981]",
  title: "تعداد کاربران",
  value: 120,
  icon: <UsersIcon width="3rem" height="3rem" />,
 },
 {
  id: 2,
  bgColor: "bg-[#3b82f6]",
  title: "تعداد بلاگ ها",
  value: 51,
  icon: <BlogIcon width="3rem" height="3rem" />,
 },
 {
  id: 3,
  bgColor: "bg-[#6d28d9]",
  title: "تعداد نظرات",
  value: 142,
  icon: <CommentIcon width="3rem" height="3rem" />,
 },
 {
  id: 4,
  bgColor: "bg-[#0f172a]",
  title: "تعداد دوره ها",
  value: 34,
  icon: <CourseIcon width="3rem" height="3rem" />,
 },
];

export default function TotalSection() {
 const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
 const sectionRef = useRef<HTMLDivElement>(null);
 const [hasAnimated, setHasAnimated] = useState(false);

 useEffect(() => {
  const observer = new IntersectionObserver(
   (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting && !hasAnimated) {
     setHasAnimated(true);
     statsData.forEach((stat, index) => {
      let count = 0;
      const interval = setInterval(() => {
       count += 1;
       setCounts((prev) => {
        const updatedCounts = [...prev];
        updatedCounts[index] = count;
        return updatedCounts;
       });
       if (count >= stat.value) {
        clearInterval(interval);
       }
      }, 40);
     });
    }
   },
   {threshold: 0.5}
  );

  if (sectionRef.current) observer.observe(sectionRef.current);

  return () => {
   // eslint-disable-next-line react-hooks/exhaustive-deps
   if (sectionRef.current) observer.unobserve(sectionRef.current);
  };
 }, [hasAnimated]);

 return (
  <div ref={sectionRef} className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-4 sm:px-8">
   {statsData.map((stat, index) => (
    <div
     key={stat.id}
     className="flex items-center bg-[#ffffff] border rounded-sm overflow-hidden shadow hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
    >
     <div className={`p-4 text-white ${stat.bgColor}`}>{stat.icon}</div>
     <div className="px-4 text-[#374151]">
      <h3 className="text-sm tracking-wider">{stat.title}</h3>
      <p className="text-3xl">{counts[index]}</p>
     </div>
    </div>
   ))}
  </div>
 );
}
