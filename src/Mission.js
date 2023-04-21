import "./Main.css";

function Mission(props) {

  console.log(props);
    return (
        <div className="mission">
          {props.props.fields.missionStatement}
        </div>
      );
    }
    
    export default Mission;