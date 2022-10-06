import { doc } from "firebase/firestore";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserAuth } from "../AuthContext";
import Buy from "../components/Buy";
import FAQ from "../components/FAQ";
import Featured from "../components/Featured";
import ProductImageThumbnail from "../components/ProductImageThumbnail";
import { db } from "../firebase";

function ProductPage({ products }) {
  const { url } = useParams();
  const shoe = products.find((elem) => elem.url === url);
  const [mainImg, setMainImg] = useState(shoe.images[0]);

  useEffect(() => {
    setMainImg(shoe.images[0]);
  }, [shoe]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});



  return (
    <div className="flex flex-col items-center justify-center p-5 sm:p-10 md:p-20">
      <div className="flex w-[100%] justify-center sm:flex-col xl:flex-row space-x-8 space-y-8 ">
        <div className="p-8 bg-[#f5f5f5] rounded-2xl space-y-6 max-w-[600px]">
          <img src={mainImg} alt="" />
          <div className="flex space-x-8 md:w-[540px] justify-center">
            {
                shoe.images.map((img, index) => <ProductImageThumbnail key={index} setMainImg={setMainImg} image={img} selected={img === mainImg} />)
            }
          </div>
        </div>

        <div className="flex flex-col space-y-2 max-w-[600px]">
          <h1 className="">footlocker.</h1>
          <p className="text-3xl font-bold">{shoe.brand}</p>
          <p className="text-5xl font-medium">{shoe.title}</p>          
          <p className="flex text-clip overflow-x-auto w-[480px] text-xl text-gray-500">
            {shoe.description}
          </p>

          {shoe.salePrice ? (
            <>
              <h1 className="text-xl">${shoe.salePrice}</h1>
              <h1 className="line-through text-gray-400 text-lg">${shoe.price}</h1>
            </>
          ) : (
            <>
              <h1 className="">${shoe.price}</h1>
            </>
          )}
          <div>
            <Buy shoe={shoe} />
          </div>
        </div>
      </div>
      

      <div>
        <Featured />
        <FAQ />
      </div>
    </div>
  );
}

export default ProductPage;
