import React from "react";

const FoodCard = ({ food }) => {
  const {
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
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
