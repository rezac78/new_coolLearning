"use client";
import SectionsPart from "@/components/Shared/SectionsPart";
import BlogsCart from "./common/BlogsCart";
import HeroSection from "./common/HeroSection";
import ProductsCart from "./common/ProductsCart";
import QuseCart from "./common/QuseCart";
import AOS from "aos";
import {useEffect} from "react";
import TotalSection from "./common/TotalSection";
import CommentSections from "./common/commentSections";
import HeaderTitle from "@/components/Shared/HeaderTitle";

export default function HomeSections() {
 useEffect(() => {
  AOS.init();
 }, []);
 return (
  <div className="overflow-x-hidden">
   <div className="container">
    <HeroSection />
    <SectionsPart
     Title="دوره‌های جامع برنامه‌نویسی"
     Description={`
    ما در این سایت مجموعه‌ای از دوره‌های برنامه‌نویسی حرفه‌ای و کاربردی را برای شما گردآوری کرده‌ایم. 
    این دوره‌ها شامل آموزش زبان‌های برنامه‌نویسی محبوب مثل 
    JavaScript،Python و React.js هستند و از سطح مبتدی تا پیشرفته طراحی شده‌اند.
    تمامی دوره‌ها به همراه پروژه‌های عملی و مثال‌های واقعی ارائه می‌شوند تا شما بتوانید مهارت‌های برنامه‌نویسی خود را تقویت کنید و برای ورود به بازار کار آماده شوید. 
    همچنین، مربیان باتجربه و پشتیبانی ۲۴ در تمامی مراحل یادگیری همراه شما خواهند بود.
  `}
     ButtonTitle="مشاهده دوره‌ها"
     ImagePart="/Home/3657664.jpg"
     Dir={"rtl"}
    />
    <HeaderTitle Title="آخرین دوره ها" Button="مشاهده بیشتر" typeHeader="course" />
    <ProductsCart />
    <SectionsPart
     Title="آزمون‌های تخصصی برنامه‌نویسی"
     Description={`
    آزمون‌های تخصصی برنامه‌نویسی در این سایت به شما کمک می‌کنند تا مهارت‌های خود را در زمینه برنامه‌نویسی به چالش بکشید و پیشرفت خود را بسنجید. 
    این آزمون‌ها شامل سوالات متنوع از سطح مبتدی تا پیشرفته بوده و به گونه‌ای طراحی شده‌اند که شما را برای شرایط واقعی بازار کار آماده کنند.
    زبان‌ها و تکنولوژی‌های مورد آزمون شامل 
   JavaScript،Python،React.js وSQL
    هستند.
    پس از شرکت در آزمون، می‌توانید نتایج خود را مشاهده کرده و از بازخوردهای تخصصی برای بهبود توانایی‌هایتان استفاده کنید. 
    همچنین، گواهینامه‌های معتبر پس از موفقیت در آزمون‌ها ارائه می‌شود که می‌تواند به عنوان مدرک ارزشمند در رزومه شما مورد استفاده قرار گیرد.
  `}
     ButtonTitle="شروع آزمون"
     ImagePart="/Home/3426526.jpg"
     Dir={"ltr"}
    />
    <HeaderTitle Title="آخرین آزمون ها" Button="مشاهده بیشتر" typeHeader="medal" />
    <QuseCart />
    <SectionsPart
     Title="مقالات و وبلاگ‌های تخصصی برنامه‌نویسی"
     Description={`
    بخش مقالات و وبلاگ‌های تخصصی ما به شما کمک می‌کند تا اطلاعات خود را در زمینه برنامه‌نویسی و تکنولوژی به‌روز نگه دارید. 
    این بخش شامل مقالات آموزشی، راهنماهای کاربردی، و بررسی‌های عمیق از زبان‌ها و تکنولوژی‌های مختلف مثل 
    JavaScript،Python، React.js وNode.js است.
    همچنین، در این بخش می‌توانید با بهترین روش‌ها، ابزارها، و تکنیک‌های برنامه‌نویسی آشنا شوید و نکات مفیدی را برای بهبود مهارت‌های خود پیدا کنید.
    مقالات ما توسط متخصصین با تجربه نوشته شده‌اند و به شما کمک می‌کنند تا همواره یک گام جلوتر از دیگران باشید. 
    از تازه‌ترین اخبار دنیای برنامه‌نویسی گرفته تا مقالات پیشرفته برای حرفه‌ای‌ها، همه در اینجا در دسترس شماست.
  `}
     ButtonTitle="مطالعه مقالات"
     ImagePart="/Home/3929637.jpg"
     Dir={"rtl"}
    />
    <HeaderTitle Title="آخرین بلاگ ها" Button="مشاهده بیشتر" />
    <BlogsCart />
    <CommentSections />
    <TotalSection />
   </div>
  </div>
 );
}
