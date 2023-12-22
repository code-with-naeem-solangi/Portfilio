import React from "react";
import "./index.css";
import {
  GoogleOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  GithubOutlined,
  FacebookOutlined,
  DesktopOutlined,
  RightSquareOutlined,
  WhatsAppOutlined,
  SoundOutlined,
  SettingOutlined,
  PlayCircleOutlined,
  FacebookFilled,
  TwitterSquareFilled,
  InstagramFilled,
  YoutubeFilled,
  GithubFilled,
} from "@ant-design/icons";

const Index = () => {
  return (
    <>
      
      {/* section one */}
      <section>
        <div className="main">
          <div className="icon">
            <InstagramOutlined
              className="media"
              style={{
                color: "purple",
                marginTop: "30px",
                cursor: "pointer",
              }}
            />
            <GithubOutlined
              className="media"
              style={{
                color: "black",
                marginTop: "30px",
                cursor: "pointer",
              }}
            />
            <FacebookOutlined
              className="media"
              style={{
                color: "blue",
                marginTop: "30px",
                cursor: "pointer",
              }}
            />
            <GoogleOutlined
              className="media"
              style={{
                color: "red",
                marginTop: "30px",
                cursor: "pointer",
              }}
            />
            <WhatsAppOutlined
              className="media"
              style={{
                color: "green",
                marginTop: "30px",
                cursor: "pointer",
              }}
            />
          </div>
          <div className="text">
            <h1 style={{ fontSize: "55px", color: "purple" }}>
              I'm Web Developer Muhammad Naeem Solangi
            </h1>
            <div style={{ fontSize: "20px" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Exercitationem, commodi? Cum sequi, dolorem temporibus aspernatur
              sapiente ducimus esse possimus veritatis.
            </div>

            <button className="btn2">HIRE ME</button>
          </div>
          <img src="a.png" alt="image" height={"500px"} className="imgwidthinmedia"/>
        </div>
      </section>
      {/* section two */}
      <div className="crnt">
        <h1 style={{ color: "darkblue" }}>ABOUT ME</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          nobis.
        </p>
        <hr style={{ width: "200px" }} />
      </div>
      <div>
        <h1 className="widthmargin">
          Developing With a Passion While Exploring The World.
        </h1>
        <hr className="none" style={{ width: "60px", marginLeft: "40px" }} />
      </div>
      {/* section three */}
      <div className="maintwo">
        <div className="textone">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
            iure ducimus illo veritatis culpa dolorem asperiores. Officia
            placeat enim exercitationem excepturi, maiores accusamus commodi
            qui, repudiandae id, doloribus possimus minus!
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button className="btn3">
            <b>CONTACT ME</b>
          </button>
        </div>
        <div className="textwo">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
            iure ducimus illo veritatis culpa dolorem asperiores. maiores
            accusamus commodi qui, repudiandae id, doloribus possimus minus!
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div>
         

          <img
            src="aa.jpg"
            alt="image"
            className="mediawidth"
          />
        </div>
      </div>
      {/* section four */}
      <section>
        <div className="mainthree">
          <div className="crnt">
            <h1 style={{ color: "darkblue" }}>What Services I'm Providing</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              illo!
            </p>
            <hr style={{ width: "200px" }} />
          </div>
          <div className="chaidmain">
            <div className="cardone">
              <div className="icon">
                <DesktopOutlined style={{ fontSize: "70px" , }} />
              </div>
              <h2 style={{ color: "darkblue", fontSize: "30px" }}>
                UI/UX Design
              </h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa,
                rerum, nihil cumque perspiciatis obcaecati a iste accusantium
                ducimus minima ratione facere repellendus quisquam !
              </p>
              <RightSquareOutlined
                className="cursr"
                style={{ fontSize: "35px", cursor: "pointer" }}
              />
            </div>
            <div className="cardone">
              <div className="icon">
                <SoundOutlined style={{ fontSize: "70px" }} />
              </div>
              <h2 style={{ color: "darkblue", fontSize: "30px" }}>
                Digital Marketing
              </h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa,
                rerum, nihil cumque perspiciatis obcaecati a iste accusantium
                ducimus minima ratione facere repellendus quisquam !
              </p>
              <RightSquareOutlined
                className="cursr"
                style={{ fontSize: "35px", cursor: "pointer" }}
              />
            </div>
            <div className="cardone">
              <div className="icon">
                <SettingOutlined style={{ fontSize: "70px" }} />
              </div>
              <h2 style={{ color: "darkblue", fontSize: "30px" }}>
                Web Development
              </h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa,
                rerum, nihil cumque perspiciatis obcaecati a iste accusantium
                ducimus minima ratione facere repellendus quisquam !
              </p>
              <RightSquareOutlined
                className="cursr"
                style={{ fontSize: "35px", cursor: "pointer" }}
              />
            </div>
          </div>
          <div className="mrgntop">
            <div className="crnt2">
              <PlayCircleOutlined
                className="cursr"
                style={{ fontSize: "80px", cursor: "pointer" }}
              />
              <h1>Working Process</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus,
              </p>
              <p> luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
          </div>
        </div>
      </section>
      {/* section five */}
      <section>
        <div className="crnt">
          <h1 style={{ color: "darkblue" }}>Work Experience</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, illo!
          </p>
          <hr style={{ width: "200px" }} />
        </div>
        <div className="mainfour">
          <div className="flex">
            <div className="cardone2">
              <h2 style={{ color: "darkblue", fontSize: "30px" }}>
                UI/UX Design
              </h2>
              <span style={{ color: "orange" }}>2015-2018</span>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa,
                rerum, nihil cumque perspiciatis obcaecati a iste accusantium
                ducimus minima ratione facere repellendus quisquam !
              </p>
              <div className="backcolor">
                <div className="color">
                  <span>UI/UX Designer</span>
                </div>
              </div>
            </div>
            <div className="cardone2">
              <h2 style={{ color: "darkblue", fontSize: "30px" }}>
                Web Designer
              </h2>
              <span style={{ color: "orange" }}>2015-2018</span>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa,
                rerum, nihil cumque perspiciatis obcaecati a iste accusantium
                ducimus minima ratione facere repellendus quisquam !
              </p>
              <div className="backcolor">
                <div className="color">
                  <span>Web Designer</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="cardone3">
              <h2 style={{ color: "darkblue", fontSize: "30px" }}>
                Web Developer
              </h2>
              <span style={{ color: "orange" }}>2015-2018</span>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa,
                rerum, nihil cumque perspiciatis obcaecati a iste accusantium
                ducimus minima ratione facere repellendus quisquam !
              </p>
              <div className="backcolor">
                <div className="color">
                  <span>Web Developerer</span>
                </div>
              </div>
            </div>
            <div className="cardone3">
              <h2 style={{ color: "darkblue", fontSize: "30px" }}>
                Graphic Designer
              </h2>
              <span style={{ color: "orange" }}>2015-2018</span>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa,
                rerum, nihil cumque perspiciatis obcaecati a iste accusantium
                ducimus minima ratione facere repellendus quisquam !
              </p>
              <div className="backcolor">
                <div className="color">
                  <span>Graphic</span>
                </div>
              </div>
            </div>
            <div className="cardone3">
              <h2 style={{ color: "darkblue", fontSize: "30px" }}>Marketing</h2>
              <span style={{ color: "orange" }}>2015-2018</span>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa,
                rerum, nihil cumque perspiciatis obcaecati a iste accusantium
                ducimus minima ratione facere repellendus quisquam !
              </p>
              <div className="backcolor">
                <div className="color">
                  <span>Marketing</span>
                </div>
              </div>
            </div>
          </div>

          <div className="crnt">
            <h1 style={{ color: "darkblue", marginTop: "10%" }}>
              My Dice Game{" "}
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              illo!
            </p>
            <hr style={{ width: "200px" }} />
          </div>

            
<div className="frame">
<img src="./dice game img.png" width={"60%"}  style={{marginLeft:"20%", borderRadius:"10px"}} />

</div>
          <div className="crnt">
            <h1 style={{ color: "darkblue", marginTop: "10%" }}>
              What My Clients Says
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              illo!
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
          <div style={{ marginTop: "50px" }} className="last">
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
        <div className="lastmedia" >
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
              <h1>naeemsolangi604</h1>
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

export default Index;
