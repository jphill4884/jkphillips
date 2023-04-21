import "./Main.css";

function Job(props) {

  
return (
    <div className="job">
      <div className="company">{props.props.fields.jobName}</div>
      <div className="title">{props.props.fields.jobTitle} | {props.props.fields.location}</div>
      <div className="location">{props.props.fields.startDate} - {props.props.fields.endDate}</div>
      <div className="responsibilities"></div>
    </div>
  );
}

export default Job;