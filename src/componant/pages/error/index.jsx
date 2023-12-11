import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
const Eroor = () => {
  return (
    <>
      <body class="bg-purple">
        <div class="stars">
          <div class="custom-navbar"></div>
          <div class="central-body">
            <img
              class="image-404"
              src="http://salehriaz.com/404Page/img/404.svg"
              width="300px"
            />
            <a
              
              class="btn-go-home"
              
            >
              <Link to={"/"}>GO BACK HOME</Link>
            </a>
          </div>
          <div class="objects">
            <img
              class="object_rocket"
              src="http://salehriaz.com/404Page/img/rocket.svg"
              width="40px"
            />
            <div class="earth-moon">
              <img
                class="object_earth"
                src="http://salehriaz.com/404Page/img/earth.svg"
                width="100px"
              />
              <img
                class="object_moon"
                src="http://salehriaz.com/404Page/img/moon.svg"
                width="80px"
              />
            </div>
            <div class="box_astronaut">
              <img
                class="object_astronaut"
                src="http://salehriaz.com/404Page/img/astronaut.svg"
                width="140px"
              />
            </div>
          </div>
          <div class="glowing_stars">
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
            <div class="star"></div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Eroor;
