import { addDoc, collection } from "firebase/firestore";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";
import { UserAuth } from "../AuthContext";
import Price from "../components/Price";
import { db } from "../firebase";
import "../App.css";

function Cart() {
  const { cart } = useContext(AppContext);
  const { removeFromCart } = useContext(AppContext);

  // const { user } = UserAuth();

  async function addUserCart() {
    console.log("Test");
    // const userData = {
    //   userCart: cart,
    //   userEmail: user?.email,
    // };
    // await addDoc(collection(db, "userCarts"), userData);
  }

  const subTotal = () => {
    let price = 0;
    cart.forEach((item) => {
      price += +((item.salePrice || item.price) * item.quantity).toFixed(2);
    });
    return price.toFixed(2);
  };

  return (
    <>
      {cart.length !== 0 ? (
        <div className="flex flex-col row container px-10">
          <h1 className="text-2xl md:text-4xl mb-4 px-6">My Cart</h1>
          <div className="border-t-2 border-b-2 space-y-2 py-2 border-gray-200">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex p-10 cursor-default justify-between"
              >
                <Link to={`/shop/${item.url}`}>
                  <div className="flex">
                    <img
                      src={item.images[0]}
                      alt=""
                      className="w-56 mr-6 cursor-pointer"
                    />
                    <div className="flex flex-col cursor-default">
                      <p className=" text-xl m:text-2xl font-bold cursor-pointer">
                        {item.title}
                      </p>
                      <Price salePrice={item.salePrice} price={item.price} />
                      <p className="text-sm md:text-lg cursor-default">
                        Quantity: {item.quantity}
                      </p>
                      <button
                        className="flex justify-start p-4 cursor-pointer text-red-600 text-xl"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </Link>
                <div className="flex">
                  <p className="text:md md:text-xl">
                    $
                    {(item.quantity * (item.salePrice || item.price)).toFixed(
                      2
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end pt-12 pr-12">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <h1 className="mb-6 w-full flex justify-between">
                  Subtotal: ${subTotal()}
                </h1>
                <h1 className="mb-6 w-full flex justify-between">
                  Tax: ${(subTotal() * 0.13).toFixed(2)}
                </h1>
                <h1 className="mb-6 w-full flex justify-between">
                  Total: ${(subTotal() * 1.13).toFixed(2)}
                </h1>
                <button
                  onClick={() => addUserCart()}
                  className="p-3 bg-black text-white rounded-full text-xl"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="row container">
            <h1 className="text-2xl md:text-4xl mb-4 px-6">My Cart</h1>
            <div className="flex flex-col p-16">
              <div className="flex justify-center">
                <div className="flex flex-col space-y-4">
                  <h1>Your cart is empty.</h1>
                  <Link
                    to="/shop"
                    state={{ brandLink: null }}
                    className="flex justify-center"
                  >
                    <button className="p-4 bg-black text-white rounded-full text-sm">
                      Browse Shoes
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Cart;
