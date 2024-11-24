"use client";
import Button from "@/components/Shared/Button/ButtonSections";
import Menu from "@/components/Shared/HamburgerMenu/Menu";
import ImagePart from "@/components/Shared/ImgPart/Image";
import Links from "@/components/Shared/Link/Link";
import MenuIcon from "@/public/Icon/MenuIcon";
import UserIcon from "@/public/Icon/UserIcon";
import {useState} from "react";
const navbar = [
 {id: 1, name: "خانه", Link: "/"},
 {id: 2, name: "فروشگاه", Link: "/courses"},
 {id: 3, name: "آزمون‌ها", Link: "/blog"},
 {id: 4, name: "دوره‌ها", Link: "/about"},
 {id: 5, name: "درباره ما", Link: "/about"},
 {id: 6, name: "تماس با ما", Link: "/about"},
];
export default function Header() {
 const [isMenuOpen, setIsMenuOpen] = useState(false);

 const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
 };
 return (
  <nav className="bg-DarkBlue text-[#ffffff]  p-4 mb-6">
   <div className="mx-auto flex items-center justify-between flex-wrap">
    <div className="flex items-center flex-shrink-0 text-white">
     <Links Href={"/"} type={"icon"}>
      <ImagePart Src="/Logo1.png" className="w-full" width={60} height={80} />
     </Links>
    </div>
    <div className="hidden md:block">
     <div className="text-base flex-grow flex ">
      {navbar.map((e) => (
       <Links
        IdName={e.name}
        type="icon"
        Href={e.Link}
        key={e.id}
        className="px-3 hover:text-SecondaryColor transition duration-300"
       >
        {e.name}
       </Links>
      ))}
     </div>
    </div>
    <div className="md:hidden">
     <Button Type="child" IdName="Bars3Icon" Click={toggleMenu}>
      <MenuIcon />
     </Button>
    </div>
    <div className="relative hidden md:flex items-center">
     <Links
      type="icon"
      // Href={props.Role === "admin" ? "/admin/dashboard" : props.Role === "user" ? "/user/dashboard" : "/login"}
      Href={"user"}
      key={"Search"}
      className="mr-4"
      IdName={"Search"}
     >
      <UserIcon />
     </Links>
     <Links type="icon" Href={"/Cart"} key={"Shopping"} className="mr-4" IdName={"Shopping"}>
      {/* <ShoppingCartIcon className="h-6 w-6 text-light-color-Font dark:text-dark-color-Font" /> */}
      {/* {cartItems.length > 0 && (
       <span className="absolute -top-2 -right-1 bg-dark-red dark:bg-light-red text-dark-color-Font rounded-full text-xs w-5 h-5 flex items-center justify-center">
        {cartItems.length}
       </span>
      )} */}
     </Links>
    </div>
   </div>
   <Menu Role={"user"} isMenuOpen={isMenuOpen} />
  </nav>
 );
}
