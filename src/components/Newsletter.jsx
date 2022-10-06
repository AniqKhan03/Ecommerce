import React, { useRef, useState } from "react";
import "./Newsletter.css";
import { Refresh } from "@mui/icons-material";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function Newsletter() {
  const [loading, setLoading] = useState(false);
  const [signedUpForNotifs, setSignedUpForNotifs] = useState(false);

  const inputRef = useRef(null);

  async function addEmailForNewsletter() {
    setLoading(true);
    const email = {
      email: inputRef.current.value,
    };
    await addDoc(collection(db, "emailList"), email);
    setTimeout(() => {
      setLoading(false);
      setSignedUpForNotifs(true);
      inputRef.current.value = "";
    }, 2400);
  }

  return (
    <div className="w-full py-[5rem] p-10">
      <section id="cta">
        <div className="row row__cta ">
          <div className="cta__inside">
            <div className="cta__description flex-1 md:w-[60%]">
              <h1 className="cta__title">Sign Up For Our Newsletter</h1>
              <p className="cta__para">
                Receive all the latest stock and sales updates in your inbox!
                <br />
                You also get a 20% Discount Code when you sign up!
              </p>
              <div className="cta__input--wrapper max-w-[500px]">
                <input
                  type="email"
                  className="cta__input"
                  placeholder="Enter your E-Mail..."
                  ref={inputRef}
                />
                <button className="cta__btn" onClick={addEmailForNewsletter}>
                  {loading ? (
                    <div className="fa-spinner-account">
                      <Refresh />
                    </div>
                  ) : (
                    "Sign Up"
                  )}
                </button>
              </div>
              <div
                className={
                  signedUpForNotifs
                    ? "success__message success__message--shown"
                    : "success__message"
                }
              >
                Thanks for subscribing to our Newsletter!
              </div>
            </div>
            <figure className="cta__img--wrapper">
              {/* <img src="" alt="" className="cta__img" /> */}
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Newsletter;
