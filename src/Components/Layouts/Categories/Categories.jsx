import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://food-hunder-js-server.vercel.app/country")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h1 className="text-center text-4xl font-bold text-yellow-500">
        Country Food
      </h1>
      {categories.map((category) => (
        <div
          className="tooltip ms-14 mt-5 "
          data-tip={category.name}
          key={category.id}
        >
          <div className="avatar">
            <div className="ms-4 w-24 rounded-full">
              <Link to="">
                {" "}
                <img className=" " src={category.img} />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
