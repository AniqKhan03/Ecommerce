import React, { useEffect } from "react";

function Sidebar({ filteredBrands, setFilteredBrands, shoes, setShoes, preFilter }) {
  const brandsInit = shoes.map((item) => item.brand);
  const brands = [...new Set(brandsInit)];

  const filterBrands = (e) => {
    const filter = e.target.firstChild.textContent
    if (filteredBrands === filter) {
      setFilteredBrands("");
      return;
    }
    setFilteredBrands(filter);
  };

  const masterFilter = () => {
    setShoes(
      shoes
        .slice()
        .filter(
          (item) =>
            item.brand === (preFilter || filteredBrands ? filteredBrands || preFilter : item.brand)
        )
    );
  };

  useEffect(() => {
    masterFilter();
    console.log(filteredBrands)
  }, [filteredBrands]);

  return (
    <div className="w-[360px] flex flex-col p-4 pt-0 space-y-4">
      <h1 className="text-3xl">Shop Brands</h1>
      <div className="space-y-2 text-2xl">
        {brands.sort().map((brand, index) => (
          <div
          key={index}
            className={filteredBrands === brand ? "font-bold transition-all ease-in-out flex text-gray-500" : 'text-gray-500'}
            onClick={filterBrands}
          >
            <span className="cursor-pointer hover:font-bold hover:text-black transition-all ease-in-out">{brand}</span>
          </div>
        ))}

      </div>
      
    </div>
  );
}

export default Sidebar;
