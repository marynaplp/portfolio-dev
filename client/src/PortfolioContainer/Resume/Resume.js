import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "HTML/CSS", ratingPercentage: 100 },
    { skill: "Javascript", ratingPercentage: 100 },
    { skill: "Express JS", ratingPercentage: 100 },
    { skill: "Node JS", ratingPercentage: 100 },
    { skill: "React", ratingPercentage: 100 },
    { skill: "Redux", ratingPercentage: 100 },
    { skill: "C#", ratingPercentage: 100 },
    { skill: "SQL", ratingPercentage: 100 },
    { skill: "REST API", ratingPercentage: 100 },
    { skill: "Mongo BD", ratingPercentage: 100 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2023", toDate: "2021" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootstrap, Node JS",
    },
    {
      title: "Review Application",
      duration: { fromDate: "2022", toDate: "2023" },
      description:
        "Mobile Application allow customers to post a review or redirect on Google Review page about their experience with a business.",
      subHeading: "Technologies Used: React JS, Bootstrap, Node JS, Express Js",
    },
    {
      title: "E-commerce Website(AirportBoard)",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "Online e-commerce website for showcasing and selling products online with payment system integration as a final project",
      subHeading:
        "Technologies Used: Mongo DB, Javascript, React Js, Node JS, Redux, Bootstrap, CSS",
    },
  ];
  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Gromcode"}
        subHeading={
          "Front-end Engineering (JavaScript and React JS) 2019 Practical Course 2020"
        }
        fromDate={"2019"}
        toDate={"2020"}
      />

      <ResumeHeading
        heading={"Kyiv International University"}
        subHeading={"Bachelor’s Degree in International"}
        fromDate={"2006"}
        toDate={"2010"}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"E'Mind Tek Inc. Vancouver, Canada"}
        subHeading={"Full-Stack Developer"}
        fromDate={"2022"}
        toDate={"present"}
      />
      <ResumeHeading
        heading={"PayProGlobal, Lviv, Ukraine"}
        subHeading={"Intermediate Front-End Developer"}
        fromDate={"2021"}
        toDate={"2022"}
      />
      <ResumeHeading
        heading={"Softemy, Kyiv, Ukraine"}
        subHeading={"Front-End Developer"}
        fromDate={"2020"}
        toDate={"2021"}
      />
      <ResumeHeading
        heading={"Upwork, Freelance"}
        subHeading={"Front-End Developer(Contractor)"}
        fromDate={"2019"}
        toDate={"2020"}
      />
    </div>,
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,
    <div className="resume-screen-container" key="interest">
      <ResumeHeading
        heading="Enthusiastic Hiker"
        description="Love to expend quality time on outdoors activities to connect with nature and appreciate the simplicity of things."
      />
      <ResumeHeading
        heading="Gamer"
        description="Gamer on my free time, collaborative role with friends, focus on have fun and learn more than win."
      />
      <ResumeHeading
        heading="Music"
        description="I have more than 193,764 minutes listened on my spotify, find a new new band to enjoy it and also always open to discover new music styles"
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };
  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };
  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
