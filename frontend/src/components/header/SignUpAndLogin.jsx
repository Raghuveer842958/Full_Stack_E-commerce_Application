import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUpAndLogin = () => {
  const [inOutValue, setInOutValue] = useState("Sign In");
  const [errorMessage, setErrorMessage] = useState(null);
  const userName = useRef(null);
  const userEmail = useRef(null);
  const userPassword = useRef(null);
  const navigate = useNavigate();

  const changeInputForm = () => {
    setInOutValue(inOutValue === "Sign In" ? "Sign Up" : "Sign In");
  };

  const userSignUp = async (name, email, password) => {
    try {
      const data = {
        name: userName.current.value,
        email: userEmail.current.value,
        password: userPassword.current.value,
      };
      const url = "http://localhost:5000/user/signUp";
      const res = await axios.post(url, data);
      if (res.data.result) {
        setInOutValue("Sign In");
      }
    } catch (err) {
      console.log("Error in User SignUp");
      console.log("Error is :", err);
    }
  };

  const userLogin = async (email, password) => {
    try {
      const data = {
        email: userEmail.current.value,
        password: userPassword.current.value,
      };
      const url = "http://localhost:5000/user/login";
      const res = await axios.post(url, data);
      if (res.data.result) {
        const userToken = res.data.token;
        localStorage.setItem("token", userToken);
        navigate("/");
      }
    } catch (err) {
      console.log("Error in User Login");
      console.log("Error is :", err);
    }
  };

  return (
    <div className="absolute bg-white left-1/3 top-20 border-black border-2">
      <form onSubmit={(e) => e.preventDefault()}>
        <p className="mt-6 ml-4 mb-4 text-4xl font-bold">{inOutValue}</p>
        {inOutValue === "Sign Up" && (
          <div>
            <input
              ref={userName}
              className="m-4 p-2 w-64 border border-black "
              type="text"
              placeholder="Full Name"
            />
            <br></br>
          </div>
        )}
        <input
          ref={userEmail}
          className="m-4 p-2 w-64 border border-black "
          type="email"
          placeholder="email"
        />
        <br></br>
        <input
          ref={userPassword}
          className="m-4 p-2 w-64 border border-black"
          type="password"
          placeholder="Password"
        />
        <br></br>
        {errorMessage && <p className="m-4 text-red-500">{errorMessage}</p>}
        <button
          className="h-11 w-64 border border-black m-4"
          type="submit"
          onClick={() => {
            inOutValue === "Sign Up" ? userSignUp() : userLogin();
          }}
        >
          {inOutValue}
        </button>
        <p
          className="m-10 cursor-pointer"
          onClick={() => {
            changeInputForm();
          }}
        >
          {inOutValue === "Sign In"
            ? "New to Netflix? Sign up now."
            : "Allready Have an Account."}
        </p>
      </form>
    </div>
  );
};

export default SignUpAndLogin;
