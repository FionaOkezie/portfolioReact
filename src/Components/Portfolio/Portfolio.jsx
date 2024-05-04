import React, { useState } from "react";
import "./Portfolio.css";
import logo from "../Assets/logo.png";
import firstImage from "../Assets/pics.png";

const Portfolio = () => {
  const [selectedTitle, setSelectedTitle] = useState(null);

  const handleClick = (title) => {
    setSelectedTitle(title === selectedTitle ? null : title);
  };
  return (
    <>
      <div id="header">
        <div className="container">
          <nav>
            <img src={logo} alt="" className="logo" />
            <ul id="sidemenu">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>

          <div className="header-text">
            <p>Software & Network Engineer</p>
            <h1>
              Hi, I'm <span>Fiona</span>
              <br />
              Okezie From Nigeria.
            </h1>
            <h3>This is my Portfolio Website!!!</h3>
          </div>
        </div>
      </div>
      {/* About page */}
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-1">
              <img src={firstImage} alt="" />
            </div>
            <div className="col-2">
              <h1>About Me</h1>
              <p>
                A talented professional who is resourceful, diligent, and
                dedicated in the workplace. Having a strong interest in computer
                and technology-related fields such as Software Engineering,
                Customer Support, Networks, Telecommunication, and
                Cybersecurity. I strategically endeavor to reach and sustain
                corporate goals with a dedication to excellence and integrity by
                being diligent, utilizing my experience, and collaborating with
                others.
              </p>
              <div className="tab-titles">
                <p
                  className={`tab-title ${
                    selectedTitle === "skills" ? "active" : ""
                  }`}
                  onClick={() => handleClick("skills")}
                >
                  Skills
                </p>
                <p
                  className={`tab-title ${
                    selectedTitle === "education" ? "active" : ""
                  }`}
                  onClick={() => handleClick("education")}
                >
                  Education
                </p>
                <p
                  className={`tab-title ${
                    selectedTitle === "experience" ? "active" : ""
                  }`}
                  onClick={() => handleClick("experience")}
                >
                  Experience
                </p>
              </div>
              {selectedTitle && (
                <div>
                  {selectedTitle === "skills" && (
                    <div className="tab-contents">
                      <ul>
                        <li>
                          <span>Web Development</span>
                          <br />
                          Desgining Website Interface
                        </li>
                        <li>
                          <span>RAN Optimizer</span>
                          <br />
                          Optimizing LTE and 5G Networks
                        </li>
                        <li>
                          <span>Data Analyst</span>
                          <br />
                          Analyzing and Visualizing Dataset
                        </li>
                      </ul>
                    </div>
                  )}

                  {selectedTitle === "education" && (
                    <div className="tab-contents">
                      <ul>
                        <li>
                          <span>2023 – Date</span>
                          <br />
                          M.ASc. Software Engineering - Memorial University Of
                          Newfoundland
                        </li>
                        <li>
                          <span>2018 – 2020</span>
                          <br />
                          M.Sc. Computer Science - Covenant University
                        </li>
                        <li>
                          <span>2012 – 2016</span>
                          <br />
                          B.Sc. Computer Science - University of Nigeria, Nsukka
                        </li>
                      </ul>
                    </div>
                  )}

                  {selectedTitle === "experience" && (
                    <div className="tab-contents">
                      <ul>
                        <li>
                          <span>October 2020 - August 2023</span>
                          <br />
                          RAN Optimization Engineer - LM Ericsson Nigeria
                        </li>
                        <li>
                          <span>October 2019 - September 2020</span>
                          <br />
                          Graduate Trainee at LM Ericsson Nigeria
                        </li>
                        <li>
                          <span>June 2017 - April 2018</span>
                          <br />
                          Data Processing Officer at Kwara State Ministry of
                          Education
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
