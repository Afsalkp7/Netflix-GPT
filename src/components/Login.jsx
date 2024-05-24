import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
const Login = () => {
  const [isSignInPage, setIsSignInPage] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleSignInPage = () => {
    setIsSignInPage(!isSignInPage);
  };
  const handleButtonClick = () => {
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;
    const enteredName = name.current.value || null;
    const message = checkValidData(enteredEmail, enteredPassword, enteredName);
    setErrorMessage(message);
    if (message) return;
    if (!isSignInPage) {
      //Sign Up logic

      createUserWithEmailAndPassword(auth, enteredEmail, enteredPassword)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });

    } else {

      console.log("else is working.....");
      //Sign In logic
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="logo"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 p-12 my-36 mx-auto right-0 left-0 bg-black text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInPage ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInPage && (
          <input
            ref={name}
            type="text"
            name="name"
            id="name"
            placeholder="User name"
            className="p-2 my-4 w-full bg-gray-900"
          />
        )}
        <input
          ref={email}
          type="email"
          name="email"
          id="email"
          placeholder="email"
          className="p-2 my-4 w-full bg-gray-900"
        />
        <input
          ref={password}
          type="password"
          name="password"
          id="password"
          placeholder="password"
          className="p-2 my-4 w-full bg-gray-900"
        />
        <p className="text-sm font-bold text-red-800">{errorMessage}</p>
        <button
          className="p-4 my-6 w-full bg-red-800 rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInPage ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer">
          {isSignInPage ? "New to Netflix" : "Already registered "} ?{" "}
          <a onClick={handleSignInPage}>
            {isSignInPage ? "Sign Up Now " : "Sign In Now "}
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
