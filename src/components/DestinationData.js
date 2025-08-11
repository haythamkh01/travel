import Mountain1 from "../assets/8.jpeg";
import Mountain2 from "../assets/9.jpeg";
import Mountain3 from "../assets/10.jpeg";
import Mountain4 from "../assets/11.jpeg";

import "./DestinationSyless.css"
import {Component} from "react";

class DestinationData extends Component {
    render() {
        return(
    <div className={this.props.className}>
        <div className="des-text">
            <h2>{this.props.heading}</h2>
            <p>{this.props.text}</p>
        </div>
        <div className="image">
            <img alt="img" src={this.props.img1} />
            <img alt ="img" src={this.props.img2}/>

        </div>
    </div>
        )
    }
}

export default DestinationData;