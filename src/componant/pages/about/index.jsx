import React from "react";
import "./index.css";
import {
  FacebookFilled,
  TwitterSquareFilled,
  InstagramFilled,
  YoutubeFilled,
  GithubFilled,
} from "@ant-design/icons";
const About = () => {
  return (
    <>
      {/* heading */}
      <section>
        <div className="clor">
          <h1
            style={{ textAlign: "center", fontSize: "40px", color: "purple" }}
          >
            About Me
          </h1>
          <hr style={{ width: "100px" }} />
        </div>
        {/* first section */}
        <div
          className="flex"
          style={{ paddingTop: "50px", paddingBottom: "30px" }}
        >
          <img src="a.png" alt="" height={"500px"} className="imgmedia" />

          <div className="media2">
            <h1 style={{ color: "purple" }}>
              Designing With Passion While Exploring The World
            </h1>
            <hr style={{ width: "100px" }} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              molestiae expedita repellat dolorem reprehenderit quaerat omnis
              dolores numquam deleniti non a.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              debitis ipsa.
            </p>
            <p>Let's talk with me.</p>
            <b style={{ cursor: "pointer", color: "blue" }}>
              contact@domain.com
            </b>
          </div>

          <div className="media2">
            <h1 style={{ color: "purple" }}>I Create Products Not Just Arts</h1>
            <hr style={{ width: "100px" }} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              molestiae expedita repellat dolorem reprehenderit dolores numquam
              deleniti non a.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              debitis vel praesentium cupiditate ex harum ut sunt recusandae?
              Porro, ipsa.
            </p>
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
          </div>
        </div>
      </section>
      {/* second section */}
      <section>
        <div
        className="media3"
        
        >
          <div className="mediawidth" >
            <h1>Frontend and Backend Developer</h1>
            <hr style={{ width: "100px" }} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              reprehenderit officia alias. Saepe nostrum, debitis cupiditate
              porro dolore unde officiis! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ipsa reprehenderit officia alias. Saepe nostrum,
              debitis cupiditate porro dolore unde officiis!
            </p>
            <button
              style={{
                width: "150px",
                height: "50px",
                backgroundColor: "purple",
                color: "white",
                border: "1px solid",
                cursor: "pointer",
              }}
            >
              Download CV
            </button>
          </div>
          <div className="media4">
            <div
              style={{
                backgroundColor: "blanchedalmond",
                width: "100%",
                borderRadius: "10px",
                margin: "50px",
              }}
            >
              <div className="color">
                <span>JavaScript</span>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "blanchedalmond",
                width: "100%",
                borderRadius: "10px",
                margin: "50px",
              }}
            >
              <div className="color">
                <span>HTML</span>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "blanchedalmond",
                width: "100%",
                borderRadius: "10px",
                margin: "50px",
              }}
            >
              <div className="color">
                <span>CSS</span>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "blanchedalmond",
                width: "100%",
                borderRadius: "10px",
                margin: "50px",
              }}
            >
              <div className="color">
                <span>Photoshop</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* third section */}
      <section>
        <div className="crnt">
          <h1 style={{ color: "darkblue", marginTop: "10%" }}>
            What My Clients Says
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, illo!
          </p>
          <hr style={{ width: "200px" }} />
        </div>
        <div className="flex">
          <div className="cardone4">
            <img
              src="./a.png"
              alt=""
              width={"80px"}
              style={{
                border: "1px solid",
                borderRadius: "50%",
                backgroundColor: "azure",
              }}
            />

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa,
              rerum, nihil cumque perspiciatis obcaecati a iste accusantium
              ducimus minima ratione facere repellendus quisquam Lorem ipsum
              dolor sit, amet consectetur adipisicing elit.
            </p>
            <hr style={{ width: "70px" }} />
            <p>Muhammad Naeem Solangi</p>
          </div>
          <div className="cardone4">
            <img
              src="./a.png"
              alt=""
              width={"80px"}
              style={{
                border: "1px solid",
                borderRadius: "50%",
                backgroundColor: "azure",
              }}
            />

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa,
              rerum, nihil cumque perspiciatis obcaecati a iste accusantium
              ducimus minima ratione facere repellendus quisquam Lorem ipsum
              dolor sit, amet consectetur adipisicing elit.
            </p>
            <hr style={{ width: "70px" }} />
            <p>Muhammad Naeem Solangi</p>
          </div>
          <div className="cardone4">
            <img
              src="./a.png"
              alt=""
              width={"80px"}
              style={{
                border: "1px solid",
                borderRadius: "50%",
                backgroundColor: "azure",
              }}
            />

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa,
              rerum, nihil cumque perspiciatis obcaecati a iste accusantium
              ducimus minima ratione facere repellendus quisquam Lorem ipsum
              dolor sit, amet consectetur adipisicing elit.
            </p>
            <hr style={{ width: "70px" }} />
            <p>Muhammad Naeem Solangi</p>
          </div>
        </div>
        <div
          className="flex"
          style={{ marginTop: "80px", textAlign: "center" }}
        >
          <div className="cardone2">
            <img
              src="./a.png"
              alt=""
              width={"80px"}
              style={{
                border: "1px solid",
                borderRadius: "50%",
                backgroundColor: "azure",
              }}
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa,
              rerum, nihil cumque perspiciatis obcaecati a iste accusantium
              ducimus minima ratione facere repellendus quisquam !
            </p>
            <hr style={{ width: "100px" }} />
            <p>Muhammad Naeem Solangi</p>
          </div>
          <div className="cardone2">
            <div
              style={{
                backgroundColor: "purple",
                width: "70px",
                height: "10px",
                borderRadius: "10px",
                margin: "auto",
              }}
            ></div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa,
              rerum, nihil cumque perspiciatis obcaecati a iste accusantium
              ducimus minima ratione facere repellendus quisquam !
            </p>
            <hr style={{ width: "100px" }} />
            <p>Muhammad Naeem Solangi</p>
          </div>
        </div>
      </section>
      {/* last section */}
      <section>
        <div
          className="crnt"
          style={{ marginTop: "30px", paddingBottom: "10%" }}
        >
          <h1 style={{ color: "darkblue" }}>Stay In Touch</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>
            Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <hr style={{ width: "100px" }} />
          <div style={{ marginTop: "50px" }}>
            <input
              type="email"
              name="email"
              className="inp"
              placeholder="Enter Email Addrees"
            />
            <button
             className="medibtn"
            >
              Subscribe
            </button>
          </div>
        </div>
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

export default About;
