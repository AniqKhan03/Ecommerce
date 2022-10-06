import React from "react";

function BrandsList() {
  return (
    <div className="bg-gray-100">
      <div className="w-full">
        <div className="flex flex-wrap items-center justify-center space-x-12 py-8 grayscale opacity-75">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
            alt=""
            className="w-32 my-12 mb-16px"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg"
            alt=""
            className="w-32 my-12 mb-16px"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/1200px-Jumpman_logo.svg.png"
            alt=""
            className="w-32 my-12 mb-16px"
          />
          <img
            src="https://i.pinimg.com/originals/c0/49/c8/c049c866c97ce8cab98fdff432e8497d.png"
            alt=""
            className="w-40 my-2 mb-8px"
          />
          
        </div>
      </div>
    </div>
  );
}

export default BrandsList;
