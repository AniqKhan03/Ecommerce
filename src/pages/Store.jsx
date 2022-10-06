import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Results from "../components/Results";
import Sidebar from "../components/Sidebar";
import StoreHeader from "../components/StoreHeader";

function Store({ products }) {
  const location = useLocation();
  const { brandLink } = location.state;

  const filterRef = useRef("");

  const [shoes, setShoes] = useState(products);
  const [filteredBrands, setFilteredBrands] = useState("");

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  function filterShoes(filter) {
    if (filter === "LOW_TO_HIGH") {
      setShoes(
        shoes
          .slice()
          .sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price))
      );
    } else if (filter === "HIGH_TO_LOW") {
      setShoes(
        shoes
          .slice()
          .sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price))
      );
    } else if (filter === "RATING") {
      setShoes(shoes.slice().sort((a, b) => b.rating - a.rating));
    }
  }

  useEffect(() => {
    document.getElementById("filter").selectedIndex = 0;
  }, [filteredBrands]);

  return (
    <div className="flex flex-col justify-center px-10">
      <StoreHeader />

      <div className="flex flex-col lg:flex-row justify-center p-10">
        <Sidebar
          shoes={products}
          setShoes={setShoes}
          filteredBrands={filteredBrands}
          setFilteredBrands={setFilteredBrands}
          preFilter={brandLink}
        />

        <div className="flex flex-col justify-center">
          <div className="flex justify-center lg:justify-between px-10 max-w-[1230px] flex-1">
            <p></p>
            <select
              name=""
              id="filter"
              defaultValue="DEFAULT"
              onChange={(e) => filterShoes(e.target.value)}
              className="border p-2"
            >
              <option value="DEFAULT" disabled>
                Sort
              </option>
              <option ref={filterRef} value="LOW_TO_HIGH">
                Price, Low to High
              </option>
              <option ref={filterRef} value="HIGH_TO_LOW">
                Price, High to Low
              </option>
              <option ref={filterRef} value="RATING">
                Rating
              </option>
            </select>
          </div>
          <Results shoes={shoes} />
        </div>
      </div>
    </div>
  );
}

export default Store;
