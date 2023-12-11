import { HomeTwoTone, MailTwoTone, MobileTwoTone } from "@ant-design/icons";
import React from "react";
import "./index.css";
import {
    FacebookFilled,
    TwitterSquareFilled,
    InstagramFilled,
    YoutubeFilled,
    GithubFilled,
  } from "@ant-design/icons";
const Contact = () => {
  return (
    <>
      {/* heading */}
      <section>
        <div
          style={{
            padding: "20px",
            paddingBottom: "100",
            backgroundColor: "violet",
          }}
        >
          <h1 style={{ textAlign: "center", fontSize: "40px", color: "white" }}>
            Contact
          </h1>
          <hr style={{ width: "100px" }} />
        </div>
      </section>
      {/* contact section */}
      <section>
        <div className="flex">
          <div className="cardone5">
            <MobileTwoTone style={{ fontSize: "100px" }} />

            <h1>0316-2554686</h1>
            <p>Monday - Friday from 7am - 5pm</p>
          </div>
          <div className="cardone5">
            <HomeTwoTone style={{ fontSize: "100px" }} />

            <h2>Karachi Sindh Pakistan</h2>
            <p>Korangi Crosing</p>
          </div>
          <div className="cardone5">
            <MailTwoTone style={{ fontSize: "100px" }} />

            <h2>naeemsolangi604</h2>
            <p>Contact me every time!</p>
          </div>
        </div>
        <div style={{display:"flex", justifyContent:"space-evenly"}}>
          <div className="cardone6">
            <h1 style={{ fontSize: "40px", color: "purple" }}>Get In Touch</h1>
            <hr style={{ width: "100px", float: "left" }} />
            <input
              type="text"
              placeholder="Enter Your Name"
              style={{
                width: "90%",
                height: "40px",
                fontSize: "20px",
                backgroundColor: "azure",
                border: "1px solid",
                paddingLeft: "10px",
                marginTop: "20px",
              }}
            />
            <input
              type="email"
              placeholder="Enter Email Address"
              style={{
                width: "90%",
                height: "40px",
                fontSize: "20px",
                backgroundColor: "azure",
                border: "1px solid",
                paddingLeft: "10px",
                marginTop: "20px",
              }}
            />
            <textarea
              placeholder="Enter Your Massege"
              cols="78"
              rows="10"
              style={{
                backgroundColor: "azure",
                border: "1px solid",
                paddingLeft: "10px",
                marginTop: "20px",
              }}
            ></textarea>
            <p>0 of 1 max characters.</p>
            <button
              type="submit"
              style={{
                width: "150px",
                height: "40px",
                backgroundColor: "violet",
                border: "none",
                cursor: "pointer",
                borderRadius: "7px",
                fontSize: "18px",
              }}
            >
              Send Message
            </button>
          </div>
          <div
            style={{ width: "200px", fontSize: "20px", marginTop:"5%"}}
          >
            <h1 style={{ color: "purple" }}>Message Me</h1>
            <hr style={{ width: "60px" }} />
            <p style={{ letterSpacing: "4px"}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              molestiae expedita repellat dolorem reprehenderit dolores numquam
              deleniti non a.
            </p>
          
            <div style={{ fontSize: "25px" }}>
              <FacebookFilled
                style={{ margin: "10px", color: "blue", cursor: "pointer" }}
              />
              
              <InstagramFilled
                style={{ margin: "10px", color: "purple", cursor: "pointer" }}
              />
              <YoutubeFilled
                style={{ margin: "10px", color: "red", cursor: "pointer" }}
              />
              <GithubFilled style={{ margin: "10px", cursor: "pointer" }} />
            </div>
          </div>
        </div>
      </section>
      {/* last section */}
      <section>
        <div style={{ backgroundColor: "violet", padding: "30px", marginTop:"100px"}}>
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

export default Contact;
