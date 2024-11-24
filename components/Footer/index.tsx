import React from "react";

export default function Footer() {
 return (
  <footer className="bg-DarkBlue text-[#ffffff] hover:text-AccentColor py-6">
   <div className="max-w-7xl mx-auto px-4 text-center">
    <p className="text-sm">© 2024 Your Company Name. All rights reserved.</p>
    <div className="mt-4 flex justify-center space-x-6">
     <a href="#" className="text-blue-400 hover:text-blue-300 transition duration-300">
      Home
     </a>
     <a href="#" className="text-blue-400 hover:text-blue-300 transition duration-300">
      About
     </a>
     <a href="#" className="text-blue-400 hover:text-blue-300 transition duration-300">
      Contact
     </a>
    </div>
   </div>
  </footer>
 );
}
