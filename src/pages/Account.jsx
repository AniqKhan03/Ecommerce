import React, { useEffect, useState } from "react";
import { Modal, PasswordInput } from "@mantine/core";
import { UserAuth } from "../AuthContext";
import { setDoc, doc } from "firebase/firestore";
import { db, auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Refresh } from "@mui/icons-material";

const Account = () => {
  const [registerOpen, setRegisterOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const { user, signUp, logIn } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loadingAuth, setLoadingAuth] = useState(true);

  async function handleSignUp(e) {
    setLoading(true);
    e.preventDefault();
    try {
      await signUp(email, password);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  async function handleLogIn(e) {
    setLoading(true);
    e.preventDefault();
    try {
      await logIn(email, password);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  function switchModal() {
    setError("");
    setLoginOpen(!loginOpen);
    setRegisterOpen(!registerOpen);
    setEmail("");
    setPassword("");
  }

  useEffect(() => {
    if (error === "Firebase: Error (auth/user-not-found).") {
      return setErrorMessage(
        "There is no account with the entered email address. Please register."
      );
    }
    if (error === "Firebase: Error (auth/wrong-password).") {
      return setErrorMessage("Wrong password.");
    }
    if (error === "Firebase: Error (auth/email-already-in-use).") {
      return setErrorMessage("Entered email is already in use, please log in");
    } else {
      return setErrorMessage("");
    }
  }, [error]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoadingAuth(false);
    });
  }, []);

  return (
    <>
      <Modal
        centered
        opened={registerOpen}
        onClose={() => {
          setRegisterOpen(false);
          setError("");
          setEmail("");
          setPassword("");
        }}
        title="Register"
        className="text-2xl"
        size="460px"
      >
        <div className="flex flex-col justify-center">
          {loading ? (
            <div className="m-[4rem] flex justify-center items-center text-3xl">
              <Refresh className="animate-spin" />
            </div>
          ) : (
            <>
              <form className="auth__modal--form" onSubmit={handleSignUp}>
                <input
                  type="email"
                  className="rounded text-base w-full mb-4 outline-none border border-black py-[10px] px-[8px]"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  className="rounded text-base w-full mb-4 outline-none border border-black py-[10px] px-[8px]"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="submit"
                  className=" flex justify-center items-center text-center text-black font-bold text-base cursor-pointer mx-auto py-2 px-4"
                >
                  Register
                </button>
                <p className="my-2 text-red-600 flex justify-center">
                  {errorMessage}
                </p>
                <p className="w-full leading-normal mb-4 text-sm">
                  Already have an account?{" "}
                  <span className="cursor-pointer " onClick={switchModal}>
                    Login
                  </span>{" "}
                </p>
              </form>
            </>
          )}
        </div>
      </Modal>

      <Modal
        centered
        opened={loginOpen}
        onClose={() => {
          setLoginOpen(false);
          setError("");
          setEmail("");
          setPassword("");
        }}
        title="Login"
        className="text-2xl "
        size="460px"
      >
        <div className="flex flex-col justify-center">
          {loading ? (
            <div className="m-[4rem] flex justify-center items-center text-3xl">
              <Refresh className="animate-spin" />
            </div>
          ) : (
            <>
              <form className="auth__modal--form" onSubmit={handleLogIn}>
                <input
                  type="email"
                  className="rounded text-base w-full mb-4 outline-none border border-black py-[10px] px-[8px]"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  className="rounded text-base w-full mb-4 outline-none border border-black py-[10px] px-[8px]"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="submit"
                  className=" flex justify-center items-center text-center text-black font-bold text-base cursor-pointer mx-auto py-2 px-4"
                >
                  Login
                </button>
                <p className="my-2  text-red-600 flex justify-center">
                  {errorMessage}
                </p>
                <p className="w-full leading-normal mb-4 text-sm ">
                  Already have an account?
                  <span className="cursor-pointer" onClick={switchModal}>
                  {" "}
                    Register
                  </span>
                </p>
              </form>
            </>
          )}
        </div>
      </Modal>

      {loadingAuth ? (
        <>
          <div className="nav__login--skeleton"></div>
          <div className="nav__register--skeleton"></div>
        </>
      ) : (
        <>
          <button
            className="border-b-2 hover:border-gray-500 border-transparent"
            onClick={() => setLoginOpen(true)}
          >
            Log In
          </button>
          <button
            className="border-b-2 hover:border-gray-500 border-transparent"
            onClick={() => setRegisterOpen(true)}
          >
            Register
          </button>
        </>
      )}
    </>
  );
};

export default Account;
