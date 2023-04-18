import React from "react";
import "./Main.css";
import Job from "./Job";

const contentful = require("contentful");
let jobs = [];

const client = contentful.createClient({
  space: "7wl1lsnlulpd",
  environment: "master",
  accessToken: "SyS2l-LlW7vKLT0JiAee3Y3F93XEvZozghtF9U5Qhww",
});

client
  .getEntries({
    content_type: 'job'
  })
  .then((response) => jobs = response.items)
  .catch(console.error);

function Main() {
    

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
      <div className="body">About Me</div>
      <div className="divider-row">
        <img
          src={require("./img/strategy.png")}
          alt="chart icon"
          className="large-icon"
        />
        <div className="divider-large">CAREER</div>
      </div>
      <div className="body">
      <div className="pokeList">
            {jobs &&
              jobs.map((job, index) => (
            <Job key={index} props={job} />
    ))}
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
      <div className="body">Program Details</div>
    </div>
  );
}

export default Main;
