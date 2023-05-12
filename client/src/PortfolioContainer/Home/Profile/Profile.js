import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import ScrollService from "../../../utilities/ScrollService";
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a
                href="https://www.facebook.com/maryna.pylypchenko"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fa fa-facebook-square" />
              </a>
              <a href="https://www.linkedin.com/in/maryna-pylypchenko-dev/">
                <i className=" fa fa-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/marynaplp/"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fa fa-instagram" />
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I am <span className="higlighted-text"> MARYNA</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev ",
                    1300,
                    "Full Stack Developer 💻",
                    2000,
                    "React/Redux Dev 😎",
                    3000,
                    "C# Dev ⌨️",
                    4000
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>

          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {""}
              Hire Me{" "}
            </button>
            <a href="resume.pdf" rel="noreferrer" target="_blank">
              <button className="btn highlighted-btn"> Get Resume</button>
            </a>
          </div>
        </div>

        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
