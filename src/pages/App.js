import React, { useState } from "react";
import Header from "../components/Header";
import InfoBox from "../components/InfoBox";
import GraduationIcon from "../assets/graduation-icon.svg";
import StudyIcon from "../assets/study-icon.svg";
import ExperienceIcon from "../assets/work-icon.svg";
import TechIcon from "../assets/technologies-icon.svg";
import LinkedinIcon from "../assets/linkedin-icon.svg";
import GithubIcon from "../assets/github-icon.svg";
import HtmlIcon from "../assets/technologies/html-icon.svg";
import CssIcon from "../assets/technologies/css-icon.svg";
import JavascriptIcon from "../assets/technologies/javascript-icon.svg";
import ReactIcon from "../assets/technologies/react-icon.svg";
import AngularIcon from "../assets/technologies/angular-icon.svg";
import { resumeInfo, resumeInfoPortuguese } from "../data";

function App() {
  const techIcons = [HtmlIcon, CssIcon, JavascriptIcon, ReactIcon, AngularIcon];
  let i = -1;
  const ptBrText = {
    titles: {
      graduation: "Formação",
      experience: "Experiência",
      studys: "Estudos",
      technologies: "Tecnologias",
    },
    spans: {
      graduating: "CURSANDO",
      period: "Período",
      currentlyWorking: "Trabalhando",
    },
  };

  const engText = {
    titles: {
      graduation: "Graduation",
      experience: "Experience",
      studys: "Studys",
      technologies: "Technologies",
    },
    spans: {
      graduating: "GRADUATING",
      period: "Period",
      currentlyWorking: "Currently working",
    },
  };

  const [data, setData] = useState(resumeInfo);

  const [mainPageText, setMainPageText] = useState(engText);

  function translatePage() {
    setMainPageText(
      mainPageText.titles.experience === engText.titles.experience
        ? ptBrText
        : engText
    );
    setData(data === resumeInfo ? resumeInfoPortuguese : resumeInfo);
  }

  return (
    <div className="container">
      <Header myInfo={data.personalInfo} onTranslate={translatePage} />
      <div className="detail-container">
        <div className="detail-column left-column">
          <InfoBox icon={GraduationIcon} title={mainPageText.titles.graduation}>
            {data.graduation.map((data) => {
              return (
                <p className={`${data.isFinished ? "" : "last"}`}>
                  {data.course} - {data.location}{" "}
                  <span className={`${data.isFinished ? "invisible" : ""}`}>
                    ({mainPageText.spans.graduating})
                  </span>
                </p>
              );
            })}
          </InfoBox>
          <div className="horizontal-line" />
          <InfoBox icon={StudyIcon} title={mainPageText.titles.studys}>
            <ul>
              {data.studys.map((data) => {
                return (
                  <li className="study-detail-box">
                    <p>{data}</p>
                  </li>
                );
              })}
            </ul>
          </InfoBox>
        </div>
        <div className="detail-column right-column">
          <InfoBox icon={ExperienceIcon} title={mainPageText.titles.experience}>
            <ul>
              {data.workExperience.map((data) => {
                return (
                  <li className="experience-detail-box">
                    <div>
                      <h3>{data.location}</h3>
                      <p>- {data.role}</p>
                      <p
                        className={`experience-period ${
                          data.experienceTime === "" ? "invisible" : ""
                        }`}
                      >
                        {mainPageText.spans.period}: {data.experienceTime}
                      </p>
                      <p
                        className={`experience-period ${
                          data.experienceTime === "" ? "" : "invisible"
                        }`}
                      >
                        {mainPageText.spans.currentlyWorking}
                      </p>
                    </div>
                    <div>
                      <span>{data.yearStarted}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </InfoBox>
          <div className="horizontal-line" />
          <InfoBox icon={TechIcon} title={mainPageText.titles.technologies}>
            <ul>
              {data.technologies.map((data) => {
                i++;
                return (
                  <li className="tech-detail-box">
                    <p>{data}</p>
                    <img src={techIcons[i]} alt={`${data} Icon`} />
                  </li>
                );
              })}
            </ul>
          </InfoBox>
        </div>
      </div>
      <div className="footer">
        <div>
          <img src={LinkedinIcon} alt="linkedin logo" />
          <p>/lucas-ferreira-2001</p>
        </div>
        <div>
          <img src={GithubIcon} alt="github logo" />
          <p>/lcsferreira</p>
        </div>
      </div>
    </div>
  );
}

export default App;
