import "./Main.css";

function Job(props) {

  
return (
    <div className="job">
      <div className="company">{props.props.fields.jobName}</div>
      <div className="title">{props.props.fields.jobTitle} | {props.props.fields.location}</div>
      <div className="location">{props.props.fields.startDate} - {props.props.fields.endDate}</div>
      <div className="responsibilities">
        <ul>
          <li>{props.props.fields.responsibility1}</li>
          <li>{props.props.fields.responsibility2}</li>
          <li>{props.props.fields.responsibility3}</li>
          <li>{props.props.fields.responsibility4}</li>
        </ul>
      </div>
    </div>
  );
}

export default Job;