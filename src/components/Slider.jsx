import React from "react";
import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Slider.css";

function Slider() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const timeoutRef = useRef(null);

  const delay = 4000;

  const slideContent = [
    {
      title: "The #1 Online Store to find your new pair of Kicks",
      button: "Shop Now",
      img: "https://www.mensjournal.com/wp-content/uploads/2020/04/BeginnerRunner.jpg?quality=86&strip=all",
      link: "/shop",
      brand: "",
    },
    {
      title: "Shop the latest Jordan collection",
      button: "Shop Jordans",
      img: "https://s.yimg.com/uu/api/res/1.2/pQhy8IwYJ1XY9g5jX3tc_A--~B/aD0xMDY3O3c9MTYwMDthcHBpZD15dGFjaHlvbg--/https://o.aolcdn.com/hss/storage/midas/7b2f6d61d5e0dc55163bd719ec839da9/206682832/nike-ed.jpg",
      link: "/shop",
      brand: "Jordan",
    },
    {
      title: "Shop the latest Nike collection",
      button: "Shop Nike",
      img: "https://static.nike.com/a/images/w_1920,c_limit/7543470b-9ad1-4e8b-8d39-8f9609e6a0d0/tips-for-buying-the-right-shoe-for-your-next-run.jpg",
      link: "/shop",
      brand: "Nike",
    },
  ];

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slideContent.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="relative overflow-hidden hidden sm:block">
      <div
        className="slideshow__wrapper"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {slideContent.map((item, index) => (
          <div className="hero__slideshow--frame" key={index}>
            <div className="home__backdrop"></div>
            <img src={item.img} alt="" className="home__slideshow--img" />
            <div className="slideshow__description">
              <h1 className="slideshow__title sm:text-sm">{item.title}</h1>
              <Link to="/shop" state={{ brandLink: item.brand }}>
                <button className="btn hero__btn">{item.button}</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="slideshow__indexes">
        {slideContent.map((_, idx) => (
          <button
            key={idx}
            className="slideshow__index--btn"
            id={idx === index ? "slideshow__index--active" : undefined}
            onClick={() => setIndex(idx)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Slider;
