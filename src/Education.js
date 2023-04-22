import "./Main.css";

function Education(props) {

  
return (
    <div className="job">
      <div className="school">{props.props.fields.educationName}</div>
      <div className="title">{props.props.fields.courseType}</div>
      <div className="location">{props.props.fields.startDate} - {props.props.fields.endDate}</div>
      <div className="responsibilities"></div>
    </div>
  );
}

export default Education;