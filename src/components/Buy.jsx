import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Buy = ({ shoe }) => {
  const [quantity, setQuantity] = useState(1);

  const { cart, setCart, addToCart } = useContext(AppContext);

  function handleQuantity(dir) {
    if (dir === "+") {
      setQuantity(quantity + 1);
    } else {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    }
  }

  function handleInput(e) {
    setQuantity(parseInt(e.target.value));
  }

  useEffect(() => {
    setQuantity(1)
  }, [addToCart])

  return (
    <div className="mt-4 flex w-full justify-start space-x-4">
      <div className="flex items-center relative w-[33%] max-w-[200px] bg-gray-100 rounded-lg px-2">
        <RemoveIcon
          className="cursor-pointer"
          onClick={() => handleQuantity("-")}
        />

        <input
          type="number"
          className="text-center w-full p-4 text-base font-bold border-none outline-none bg-gray-100"
          value={quantity}
          min-value="1"
          onChange={handleInput}
        />
        <AddIcon
          className="cursor-pointer"
          onClick={() => handleQuantity("+")}
        />
      </div>
      <button
        className="flex justify-center items-center text-center text-black font-bold text-base cursor-pointer bg-gray-200 rounded-full w-[33%] max-w-[200px] border-none"
        onClick={(e) => {
          addToCart(shoe, quantity);
        }}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Buy;
