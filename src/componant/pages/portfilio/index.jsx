import React from "react";
import "./index.css";
import {
  FacebookFilled,
  TwitterSquareFilled,
  InstagramFilled,
  YoutubeFilled,
  GithubFilled,
} from "@ant-design/icons";

const Portfolio = () => {
  return (
    <>
      {/* heading sectiom */}
      <div className="clor">
        <h1 style={{ textAlign: "center", fontSize: "40px", color: "purple" }}>
          Portfolio
        </h1>
        <hr style={{ width: "100px" }} />
      </div>
      {/* websitea section */}
      <section>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "40px", color: "purple" }}>
            What Service You Will Get From Me
          </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <hr style={{ width: "100px" }} />
        </div>
        <div className="flex2">
          <img src="./expensive.png" className="laibimg" />
          <img src="./expensive.png" className="laibimg" />
          <img src="./laibrary.png" className="laibimg" />
          <img src="./laibrary.png" className="laibimg" />
          <img src="./dice game img.png" className="laibimg" />
          <img src="./dice game img.png" className="laibimg" />
        </div>
      </section>
      {/* last section */}
      <section>
        <div className="lastmedia">
          <div className="flex">
            <div style={{ fontSize: "40px" }}>
              <FacebookFilled
                style={{ margin: "10px", color: "blue", cursor: "pointer" }}
              />
              <TwitterSquareFilled
                style={{ margin: "10px", color: "aqua", cursor: "pointer" }}
              />
              <InstagramFilled
                style={{ margin: "10px", color: "purple", cursor: "pointer" }}
              />
              <YoutubeFilled
                style={{ margin: "10px", color: "red", cursor: "pointer" }}
              />
              <GithubFilled style={{ margin: "10px", cursor: "pointer" }} />
            </div>
            <div>
              <h1>PORTFILIO</h1>
            </div>
            <div>
              <h1>naeemsolangi604@gmail.com</h1>
            </div>
          </div>
          <div style={{ textAlign: "center", padding: "40px" }}>
            <p>
              <b>Copyright © 2023 Personal Portfolio</b>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
