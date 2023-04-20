import { useEffect, useState } from 'react';
import Client from "./Contentful.js";
import "./Main.css";
import Job from "./Job";
import Education from "./Education.js";

 
function Main() {
  

    const [jobHistory, setJobHistory] = useState();
    const [education, setEducation] = useState();

    
      useEffect(() => {
        Client.getEntries({ content_type: "job"}).then((data) => setJobHistory(data));
      }, []);
  
      useEffect(() => {
        Client.getEntries({ content_type: "education"}).then((data) => setEducation(data));
      }, []);
  
 
      const jobsList = jobHistory.items;
      const educationList = education.items;

  return (
    <div className="main">
      <div className="divider-row">
        <img
          src={require("./img/career.png")}
          alt="briefcase icon"
          className="large-icon"
        />
        <div className="divider-large">PROFILE</div>
      </div>
      <div className="body">Mission Statement</div>
      <div className="divider-row">
        <img
          src={require("./img/strategy.png")}
          alt="chart icon"
          className="large-icon"
        />
        <div className="divider-large">CAREER</div>
      </div>
      <div className="body">
      <div>
     { jobsList.map((item, index) => (<Job props={item} key={index} />))}
    </div>
      </div>
      <div className="divider-row">
        <img
          src={require("./img/graduation.png")}
          alt="graduation cap icon"
          className="large-icon"
        />
        <div className="divider-large">EDUCATION</div>
      </div>
      <div className="body">
      { educationList.map((item, index) => (<Education props={item} key={index} />))}
      </div>
    </div>
  );
}

export default Main;
