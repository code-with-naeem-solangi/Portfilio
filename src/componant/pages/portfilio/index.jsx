import React from "react";
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
        <div style={{textAlign: "center", }}>
        <h1 style={{fontSize: "40px",color: "purple" }}>
          What Service You Will Get From Me
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <hr style={{ width: "100px" }} />
        </div>
        <div>
            <iframe
            src="https://laibrary-manegment.vercel.app/"
            frameborder="0"
            height={"300px"}
            width={"45%"}
            style={{marginLeft:"40px"}}
            ></iframe>
            <iframe
            src="https://eaxpensive-tracker.vercel.app/text"
            frameborder="0"
            height={"300px"}
            width={"45%"}
            style={{marginLeft:"40px"}}
          ></iframe>

          </div>
        <div style={{padding:"20px"}}>
            <iframe
            src="https://dice-game-jet-psi.vercel.app/"
            frameborder="0"
            height={"300px"}
            width={"70%"}
            style={{marginRight:"40px"}}
          ></iframe>
            <iframe
            src="https://counter-app-ten-xi.vercel.app/"
            frameborder="0"
            height={"300px"}
            width={"25%"}
          ></iframe>
          </div>
          <div>
            <iframe
            src="https://to-do-app-rust-iota.vercel.app/"
            frameborder="0"
            height={"400px"}
            width={"100%"}
          ></iframe>

          </div>
          
      </section>
      {/* last section */}
      <section>
        <div style={{ backgroundColor: "violet", padding: "30px", marginTop:"50px" }}>
          <div className="flex">
            <div style={{ fontSize: "40px" }}>
              <FacebookFilled style={{ margin: "10px", color: "blue", cursor:"pointer"}} />
              <TwitterSquareFilled style={{ margin: "10px", color: "aqua", cursor:"pointer" }} />
              <InstagramFilled style={{ margin: "10px", color: "purple", cursor:"pointer" }} />
              <YoutubeFilled style={{ margin: "10px", color: "red", cursor:"pointer" }} />
              <GithubFilled style={{ margin: "10px", cursor:"pointer" }} />
            </div>
            <div>
              <h1>PORTFILIO</h1>
            </div>
            <div>
              <h1>naeemsolangi604@gmail.com</h1>
            </div>
          </div>
          <div style={{textAlign:"center", padding:"40px"}}>
            <p><b>Copyright © 2023 Personal Portfolio</b></p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
