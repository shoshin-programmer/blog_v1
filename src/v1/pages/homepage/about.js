import React from "react";
import "./about.css";

export default function About() {
  return (
    <React.Fragment>
      <div id="about-container">
        <div id="about-section">
          <div className="about-title">
            <a className="about-link" href="#about-container">
              about
            </a>
          </div>
          <div className="about-inner-section">
            <div className="profile-picture-wrap">
              <img
                className="profile-picture"
                alt="arvin mark atienza"
                src={
                  "https://media-exp1.licdn.com/dms/image/C5103AQEVfJK0GiFKcA/profile-displayphoto-shrink_400_400/0?e=1599091200&v=beta&t=WxJURa3_oZyjsojM-aqJn0c7EjLCIKtwKO6LMScGlag"
                }
              />
            </div>
            <div className="description-wrap">
              <p className="about-desc">
                Hi! I am{" "}
                <span style={{ color: "#fff" }}>Arvin Mark Atienza</span>{" "}
                currently based on BGC Taguig City Philippines.
              </p>
              <p className="about-desc">
                My goal is to provide{" "}
                <span style={{ color: "#fff" }}>
                  efficient, beautiful and easy-to-use websites
                </span>{" "}
                made for everyone that they would love to use.
                <br />( I also dabble in{" "}
                <span style={{ color: "#fff" }}>
                  Data Science, Blog Websites, and other things Web.{" "}
                </span>
                )
              </p>
              <p className="about-desc">
                Stack I used to make this website along with the blog:
              </p>
              <ul className="stack-list">
                <li>HTML & CSS</li>
                <li>React</li>
                <li>Python</li>
                <li>Django</li>
                <li>JavaScript (ES6+)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

/*
<div className="about-list-wrapper">
  <ul className="about-exp-list">
    <li>
      <a href="#about-start">SIP</a>
    </li>
    <li>
      <a href="/#">RingCentral</a>
    </li>
    <li>
      <a href="/blog/recent">ZenRooms</a>
    </li>
  </ul>
</div>
<div className="about-exp-wrapper"></div>
*/
