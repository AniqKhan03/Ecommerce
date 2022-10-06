import React from "react";
import { Link } from "react-router-dom";

function ShoeThumbnail({ shoe }) {
  return (
    <div className="flex p-4 max-w-[280px]">
      <Link to={`/shop/${shoe.url}`}>
        <div className="group hover:scale-105 transition-all ease-in-out">
          <div className="bg-gray-100 rounded-3xl">
            <img
              className="w-80 p-4"
              src={shoe.images[0]}
              alt=""
            />
          </div>

          <div className="py-2">
            <p className="text-md text-[#68707D]">{shoe.brand}</p>
            <p className="text-2xl text-gray-600 font-bold text-clip overflow-hidden group-hover:text-black transition-all ease-in">
              {shoe.title}
            </p>
            <div className="flex">
              {shoe.salePrice ? (
                <>
                  <p className="pr-2">${shoe.salePrice}</p>
                  <p className="line-through text-gray-400">
                    ${shoe.price}
                  </p>
                </>
              ) : (
                <p className="">${shoe.price}</p>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ShoeThumbnail;
