"use client";
import ButtonSections from "@/components/Shared/Button/ButtonSections";
import HeaderTitle from "@/components/Shared/HeaderTitle";
import DisLikeIcon from "@/public/Icon/DisLikeIcon";
import LikeIcon from "@/public/Icon/LikeIcon";
import Image from "next/image";
import React from "react";

export default function SectionFoure() {
 const sampleComments = [
  {
   userName: "کاربر ۱",
   userLevel: "سطح ۱",
   text: "این یک نظر نمونه است",
   image: "https://avatars.githubusercontent.com/u/22263436?v=4",
   replies: [
    {
     userName: "کاربر ۲",
     userLevel: "سطح ۱",
     text: "این یک پاسخ نمونه است",
     image: "https://avatars.githubusercontent.com/u/22263436?v=4",
    },
    {
     userName: "کاربر ۳",
     userLevel: "سطح ۱",
     text: "یک پاسخ دیگر به این نظر",
     image: "https://avatars.githubusercontent.com/u/22263436?v=4",
    },
   ],
  },
  {
   userName: "کاربر ۴",
   userLevel: "سطح ۱",
   text: "یک نظر دیگر بدون پاسخ",
   image: "https://avatars.githubusercontent.com/u/22263436?v=4",
   replies: [],
  },
 ];
 return (
  <div className="border-2 border-gray-200 rounded-md px-4 bg-white relative">
   <HeaderTitle Title="نظرات کاربران" Button="" typeHeader="comment" />
   <div>
    <div className="flex flex-col gap-5 m-3">
     {sampleComments.map((comment, index) => (
      <div key={index}>
       <div className="flex w-full justify-between border rounded-md">
        <div className="p-3">
         <div className="flex gap-3 items-center">
          <Image
           width={80}
           height={80}
           src={comment.image}
           alt={`${comment.userName}'s profile`}
           className="object-cover w-10 h-10 rounded-full border-2 border-emerald-400 shadow-emerald-400"
          />
          <h3 className="font-bold">
           {comment.userName}
           <br />
           <span className="text-sm text-gray-400 font-normal">{comment.userLevel}</span>
          </h3>
         </div>
         <p className="text-gray-600 mt-2">{comment.text}</p>
         <button className="text-right text-blue-500">پاسخ</button>
        </div>
        <div className="flex flex-col items-end gap-3 pl-3 py-3">
         <div className="hover:text-SecondaryColor cursor-pointer transition duration-300">
          <LikeIcon />
         </div>
         <div className="hover:text-red-400 cursor-pointer transition duration-300">
          <DisLikeIcon />
         </div>ّ
        </div>
       </div>
       {comment.replies && comment.replies.length > 0 && (
        <div className="ml-5">
         {comment.replies.map((reply, replyIndex) => (
          <div key={replyIndex} className="flex justify-between border rounded-md mt-3">
           <div className="p-3">
            <div className="flex gap-3 items-center">
             <Image
              src={reply.image}
              alt={`${reply.userName}'s profile`}
              width={80}
              height={80}
              className="object-cover w-10 h-10 rounded-full border-2 border-emerald-400 shadow-emerald-400"
             />
             <h3 className="font-bold">
              {reply.userName}
              <br />
              <span className="text-sm text-gray-400 font-normal">{reply.userLevel}</span>
             </h3>
            </div>
            <p className="text-gray-600 mt-2">{reply.text}</p>
           </div>
          </div>
         ))}
        </div>
       )}
      </div>
     ))}
    </div>
    <div className="w-full px-3 mb-2 mt-6">
     <textarea
      className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-400 focus:outline-none focus:bg-white"
      name="body"
      placeholder="کامنت"
     />
    </div>
    <div className="w-full flex justify-end px-3 my-3">
     <ButtonSections Title="ثبت نظر">ثبت نظر</ButtonSections>
    </div>
   </div>
  </div>
 );
}
