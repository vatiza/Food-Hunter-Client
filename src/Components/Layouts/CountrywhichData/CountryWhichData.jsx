import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import FoodCard from "../Home/FoodCard/FoodCard";

const CountryWhichData = () => {
  const { id } = useParams();
  const countryFood = useLoaderData();

  return (
    <div>
      {id && <h1>Country Which Data{countryFood.length}</h1>}
      <div className="grid grid-cols-3 gap-3 ms-6">
        {countryFood.map((food) => (
          <FoodCard key={countryFood.id} food={food}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default CountryWhichData;
