import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CategoryData = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://food-hunder-js-server.vercel.app/country")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h1 className="text-yellow-500 text-2xl font-bold text-center mb-6">
        Choose Country
      </h1>
      {categories.map((category) => (
        <span
          className="ms-20 tooltip"
          data-tip={category.name}
          key={category.id}
        >
          <div className="avatar">
            <div className="ms-4 w-20 rounded-full">
              <Link to={`/category/${category.id}`}>
                <img src={category.img}></img>
              </Link>
            </div>
          </div>
        </span>
      ))}
    </div>
  );
};

export default CategoryData;
