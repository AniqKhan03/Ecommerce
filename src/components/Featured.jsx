import React, { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import products from "../products";
import ShoeThumbnail from "./ShoeThumbnail";

const Featured = () => {
  const [shoes, setShoes] = useState(
    products.filter((shoe) => shoe.rating >= 10).slice(4, 8)
  );

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});

  return (
    <div className="flex flex-col items-center justify-center p-12 lg:p-28">
      <h1 className="text-4xl py-4">Featured Shoes</h1>

      <div className="flex flex-nowrap justify-center flex-col lg:flex-row lg:w-[1000px]">
        {shoes.map((item) => (
          <ShoeThumbnail key={item.id} shoe={item} slider={true} />
        ))}
      </div>
      <Link to="/shop" state={{ "brandLink": null}}>
        <p className="text-lg bg-black border-2 text-white p-3 rounded-2xl">Browse All Shoes</p>
      </Link>
    </div>
  );
};

export default Featured;
