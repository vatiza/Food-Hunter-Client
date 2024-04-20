import React from "react";
import { Link } from "react-router-dom";
import { FaClock, FaRegStar, FaStar } from "react-icons/fa6";
import Rating from "react-rating";

const FoodCard = ({ food }) => {
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
  } = food;
  return (
    <div className="card w-96 bg-base-100 shadow-xl mt-5">
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
        <Link to={`/food/${id}`} className="btn btn-outline btn-warning">
          Details
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
          <div className="badge badge-outline text-orange-600">{category}</div>
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
  );
};

export default FoodCard;
