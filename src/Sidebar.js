import { useEffect, useState } from 'react';
import Client from "./Contentful.js";
import './Sidebar.css';
import Skill from "./Skill";
import Language from "./Language.js";

function SideBar() {

    const [skills, setSkills] = useState();
    const [languages, setLanguages] = useState();

      useEffect(() => {
        Client.getEntries({ content_type: "skill"}).then((skillsData) => setSkills(skillsData));
      }, []);

      useEffect(() => {
        Client.getEntries({ content_type: "language"}).then((languageData) => setLanguages(languageData));
      }, []);

  return (
    <div className="sidebar">
      <div className="name">JUSTIN KYLE PHILLIPS</div>
      <div className="divider-small">Full-Stack Developer</div>
      <div className="section">
        <div className="sub-section">
          <img
            className="small-icon"
            src={require("./img/marker.png")}
            alt="map pin"
          />
          <span>390 7th St, San Diego CA 91932</span>
        </div>
        <div className="sub-section">
          <img
            className="small-icon"
            src={require("./img/phone.png")}
            alt="telephone icon"
          />
          <span>(415)361-1120</span>
        </div>
        <div className="sub-section">
          <img
            className="small-icon"
            src={require("./img/envelope.png")}
            alt="envelope"
          />
          <a href="mailto:kyle@jkylephillips.xyz">kyle@jkphillips.xyz</a>
        </div>
        <div className="sub-section">
          <img
            className="small-icon"
            src={require("./img/github.png")}
            alt="oktocat"
          />
          <a href="https://www.github.com/jphill4884" target="_blank" rel="noreferrer">github.com/jphill4884</a>
        </div>
        <div className="sub-section">
          <img
            className="small-icon"
            src={require("./img/linkedin.png")}
            alt="linkedin logo"
          />
          <a href="https://www.linkedin.com/in/jkylephillips" target="_blank" rel="noreferrer">
            linkedin.com/in/jkylephillips
          </a>
        </div>
      </div>
      <div className="divider-small">SKILLS</div>
      <div className="skill-section">
      {skills && skills.items.sort((a, b) => (b.fields.skillLevel - a.fields.skillLevel)).map((item, index) => (<Skill props={item} key={index} />))}
      </div>
      <div className="divider-small">LANGUAGES</div>
      <table>
      <tbody>
      {languages && languages.items.sort((a, b) => (b.fields.languageName - a.fields.languageName)).map((item, index) => (<Language props={item} key={index} />))}
      </tbody>
      </table>
      <div className="divider-small">REFERENCES</div>
      <div className="references-section">Available upon request</div>
    </div>
  );
}

export default SideBar;
