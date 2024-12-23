import React, { useEffect, useState } from "react";
import FoodData from "../Data/Data";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../Redux/Slices/CatagorySlice";

export default function CatagoryMenu() {
  const [catagories, setCatagories] = useState([]);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) =>state.category.category);

  const listUniqueCatagories = () => {
    const uniqueCatagories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCatagories(uniqueCatagories);
    console.log(uniqueCatagories);
  };

  useEffect(() => {
    listUniqueCatagories();
  }, []);


  return (
    <div className="mx-6 ">
      <h3 className="text-xl font-semibold">Find the best food </h3>
      <div className="my-5 flex gap-3 overflow-x-hidden scroll-smooth lg:overflow-x-hidden ">


      <button onClick={()=> dispatch(setCategory("All"))}
              className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500
             hover:text-white  ${selectedCategory === "All" && "bg-green-500 text-white"  }`}
            >
              All
            </button>
        {catagories.map((category, index) => {
          return (
            <button onClick={() => dispatch(setCategory(category))}
              key={index}
              className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500
             hover:text-white  ${selectedCategory === category && "bg-green-500 text-white"}`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
