import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaClock, FaRegStar, FaStar } from "react-icons/fa6";
import Rating from "react-rating";
import { GiCampCookingPot, GiCook } from "react-icons/gi";

const FoodDetails = () => {
  const food = useLoaderData();
  const {
    id,
    name,
    photo,
    category,
    description,
    cook_time,
    rating,
    chef_name,
    chef_profile_photo,
    ingredients,
    instructions,
    country_name
  } = food;
  return (
    <div className="grid grid-cols-3">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>

          <Rating
            className="text-orange-600"
            placeholderRating={rating}
            readonly
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar />}
            fullSymbol={<FaStar></FaStar>}
          />

          <p className="mb-5">{description}</p>
          <Link to='' className="btn btn-outline btn-warning">
            Order Now
          </Link>
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full"
              src={chef_profile_photo}
              alt=""
            />
            <p className="ms-4">
              By{" "}
              <span className="font-bold text-l text-orange-700">
                {chef_name}
              </span>
            </p>
          </div>
          <div className="card-actions justify-end">
          <div className="badge badge-outline text-orange-600">
              {country_name}
            </div>
            <div className="badge badge-outline text-orange-600">
              {category}
            </div>
            <div className="text-orange-600 badge badge-outline">
              {" "}
              Cook Time :{" "}
              <span className="">
                <FaClock className="inline-block w-3 h-4 mb-1  ms-2 items-center"></FaClock>{" "}
                <span className=""> {cook_time}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-3xl text-yellow-500 font-bold">Ingredients</h1>
        <ul className="text-2xl text-orange-500 ">
          {ingredients.map((ingredient) => (
            <li>
              <GiCook className="inline-block"></GiCook> {ingredient}
            </li>
            
          ))}
        </ul>
        
      </div>
      <div className="text-center ">
        <h1 className="text-3xl text-yellow-500 font-bold">Instructions</h1>
        <div className="grid justify-items-center items-center">
          <div>
            <ul className=" text-xl text-orange-500 ">
              {instructions.map((inst) => (
                <li>
                  <GiCampCookingPot className="inline-block"></GiCampCookingPot>{" "}
                  {inst}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <Link to={`/food/${id}`} className="btn btn-outline btn-error">
            Go Back
          </Link>
         
    </div>
  );
};

export default FoodDetails;
