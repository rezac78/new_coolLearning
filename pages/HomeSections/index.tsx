"use client";

import HeroSection from "./common/HeroSection";
import ProductsCart from "./common/ProductsCart";
import QuseCart from "./common/QuseCart";

export default function HomeSections() {
 return (
  <div className="container">
   <HeroSection />
   <ProductsCart />
   <QuseCart />
  </div>
 );
}