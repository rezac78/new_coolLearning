"use client";

import ButtonSections from "@/components/Shared/Button/ButtonSections";
import Image from "next/image";
import React from "react";

export default function RightSections() {
 return (
  <div>
   <div className="border-2 border-gray-200 rounded-md px-4 py-12 bg-white shadow-sm relative mb-5">
    <Image
     src="/Home/Web_Programmer_01_generated (1).jpg"
     className="w-full h-auto rounded-lg mb-4"
     width={1080}
     height={720}
     alt="notfound"
    />
    <p className="text-sm text-gray-700 leading-relaxed">
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis fuga est consequatur blanditiis id, eveniet
     dolorem ea inventore expedita sunt impedit, error vero quidem. Voluptates perspiciatis vero molestiae aspernatur
     cupiditate impedit hic harum quo, sapiente ullam expedita minus dolorem repellendus quod earum commodi autem nulla
     sunt voluptatum. Eaque pariatur natus recusandae hic quos quasi ipsam consequuntur a illum cum ullam, aliquam
     placeat vitae incidunt numquam magni tempore illo assumenda alias, dolor aperiam neque ad consequatur? Voluptatibus
     fuga placeat officia ipsum quam quas accusantium consequuntur sit magni facere dolorum veritatis possimus
     voluptates vero sed saepe exercitationem, consequatur assumenda expedita? Ipsum, ducimus earum suscipit
     perspiciatis quo magnam voluptates minima dolor architecto id velit ut! Quia labore aspernatur eum excepturi nihil
     vero, consequuntur eos reiciendis nisi omnis dolore, consectetur ex cupiditate sit animi ducimus? Mollitia, illum
     ex architecto quidem officiis, deleniti blanditiis accusamus sint exercitationem debitis eos sed id rerum. Mollitia
     laudantium dicta saepe laboriosam? Suscipit deleniti iusto aliquid fugiat, dolorem officiis eaque, quae dolore
     repudiandae inventore id. Quisquam expedita tempore illo odit provident, optio ipsa consequatur repudiandae,
     nostrum porro fugiat minima numquam laboriosam aspernatur harum. Asperiores tempora molestias saepe natus vel alias
     ipsam officiis similique, reprehenderit dolores officia quis fugit iste non praesentium architecto tenetur
     accusamus cumque quas nisi? Quam saepe, harum ab molestiae facilis tempore iusto magni numquam laborum quae nobis
     consequatur inventore, vel veniam ullam libero officiis maxime error amet. Incidunt, fugiat ducimus. Labore esse,
     minus rerum et sint perferendis illo corporis quia mollitia repudiandae laborum temporibus ipsum dicta sapiente.
     Possimus delectus, reiciendis quas ipsa ex quam doloribus molestiae adipisci architecto commodi provident maiores
     similique aliquam laborum, sit dolor culpa illum voluptate omnis obcaecati necessitatibus eaque facilis. Asperiores
     facere dicta quisquam impedit eum explicabo labore optio voluptatum cupiditate iusto soluta qui corporis dolorum
     possimus, id magnam illo voluptates. Dignissimos, in culpa! Culpa laboriosam, ipsam temporibus unde magni velit
     iure sequi quas excepturi inventore consequatur, doloremque alias dicta quasi praesentium nobis enim illum dolores
     eaque veritatis esse autem placeat debitis impedit. Aliquam impedit voluptate vero eaque nam nobis assumenda magni
     dolor sit ea officia libero voluptatem laborum, aut itaque ex ducimus sint temporibus iusto nulla amet eos! Sequi
     et modi quisquam hic, dolorum, adipisci id facilis necessitatibus labore temporibus minus quos itaque quidem
     maiores, autem rerum? Ullam assumenda quo cum dicta rem odit, optio quidem labore, ducimus maxime veritatis
     reprehenderit quasi a explicabo ut placeat at corporis mollitia aliquam. Modi est fugit sapiente cupiditate maxime
     unde quaerat at ex aut minus tenetur quis dolorum nulla nostrum earum hic non enim magnam, illo repudiandae nam,
     facilis amet. Reiciendis animi in perspiciatis error laudantium, recusandae facilis cumque inventore est
     consequatur dignissimos dolorem possimus enim repudiandae natus nam quam omnis quo assumenda cum, eum quisquam
     aspernatur. Aliquam eum fuga ex id, eius eaque. Aliquam iure aspernatur officiis, natus voluptate cupiditate ullam
     facere libero! Impedit asperiores iure quae id delectus perferendis corrupti qui suscipit cupiditate. Illo
     obcaecati explicabo quisquam nulla, unde nemo quas? Delectus ex itaque tenetur nobis minima quas architecto,
     mollitia excepturi maxime saepe!
    </p>
    <div className="p-4">
     <h3 className="text-gray-700 font-semibold mb-4">پیش‌نیازهای دوره:</h3>
     <ol className="list-decimal list-inside space-y-2 text-right">
      {["socketIO", "WebRTC", "express", "nodejs", "React", "mongodb"].map((item, index) => (
       <li key={index} className="flex items-center gap-2">
        <span className="border-2 border-[#10b981] text-[#10b981] rounded-full w-6 h-6 flex items-center justify-center">
         {index + 1}
        </span>
        <span className="text-gray-800">{item}</span>
       </li>
      ))}
     </ol>
    </div>
    <div className="absolute -right-1 ">
     <ButtonSections className="px-4 py-6 rounded-tl-[40%] " Title="مشاهده نظرات">
      مشاهده نظرات
     </ButtonSections>
    </div>
   </div>
   <div className="border-2 border-gray-200 rounded-md px-4 py-12 bg-white shadow-sm relative">
    <span>reza</span>
   </div>
  </div>
 );
}
