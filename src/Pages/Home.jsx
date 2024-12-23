import React from "react";
import Navbar from "../Componets/Navbar";
import CatagoryMenu from "../Componets/CatagoryMenu";
import FoodItem from "../Componets/FoodItem";
import Cart from "../Componets/Cart";

export default function Home() {
  return (
    <>
      <Navbar />
      <CatagoryMenu/>
      <FoodItem/>
      <Cart/>
    </>
  );
}
