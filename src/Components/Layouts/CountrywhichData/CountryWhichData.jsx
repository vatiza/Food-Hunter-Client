import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import FoodCard from "../Home/FoodCard/FoodCard";

const CountryWhichData = () => {
  const countryFood = useLoaderData();

  return (
    <div>
      <div className="grid grid-cols-3 gap-3 ms-6 mt-5">
        {countryFood.map((food) => (
          <FoodCard key={countryFood.id} food={food}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default CountryWhichData;
