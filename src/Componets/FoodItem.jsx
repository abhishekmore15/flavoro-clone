import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../Data/Data";
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from "react-redux";

export default function FoodItem() {
  const Category = useSelector((state)=>state.category.category)
  const Search = useSelector((state)=>state.search.search)


  const handleToast =(name) => toast.success(`Added ,${name}`);
  
  return (
    <>
    <Toaster position="top-center" reverseOrder={false}/>
    <div className="flex flex-wrap gap-10 mx-6 justify-center lg:justify-start my-6 ">

    {
      FoodData.filter((food)=>{
        if(Category === "All"){
          return food.name.toLowerCase().includes(Search.toLowerCase());
        }else{
          return Category === food.category && 
          food.name.toLowerCase().includes(Search.toLowerCase());
        }
      }).map((food)=>(
        <FoodCard 
        key={food.id}
        id={food.id} 
        name={food.name}
        price={food.price}
        desc={food.desc}
        rating={food.rating}
        img= {food.img}
        handleToast={handleToast}
        />
      ))
    }
    </div>
    </>
  );
}
