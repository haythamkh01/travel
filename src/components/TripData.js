import "./TripSyless.css"
import Mountain8 from "../assets/8.jpeg";
import Mountain2 from "../assets/9.jpeg";
import Mountain3 from "../assets/10.jpeg";
import Mountain4 from "../assets/11.jpeg";


function TripData (props){
    return (
        <div className="t-card">
          <div className="t-image">
              < img src={props.image} alt ="image"/>
          </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>

    </div>
    )
}
export default TripData;