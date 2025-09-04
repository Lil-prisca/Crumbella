import React from "react";
// import car1 from "../assets/carousel-1.jpg";
import "../styles/Login.css";

const Login = () => {
  return (
    <div>
      <>
        <div className="main">
          <div className="leftsection">
            <form action="">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your firstname"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your lastname"
              />
              <input
                type="email"
                name=""
                id=""
                placeholder="enter your email"
              />
            </form>
          </div>
          <div className="rightsection"></div>
        </div>
      </>
    </div>
  );
};

export default Login;
