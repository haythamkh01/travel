import "./TripSyless.css"
import TripData from "./TripData";
import Mountain8 from "../assets/8.jpeg";
import Mountain2 from "../assets/9.jpeg";
import Mountain3 from "../assets/10.jpeg";
import Mountain4 from "../assets/11.jpeg";

function Trip (){
    return (
       <div className="trip">
           <h1>Recent Trips</h1>
           <h3>You can discover unique destination using Google Maps.</h3>
       <div className="tripcard">
           <TripData
               image="https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX4016584.jpg"
               heading="Golden Horizon Trail – Sunset Hike"
               text="Hiking through these golden valleys revealed untouched beauty and stunning sunrises. This region offers peaceful trails, breathtaking overlooks, and an ideal escape from city life."
           />

           <TripData
               image="https://www.voyagescribe.com/wp-content/uploads/2019/04/20160124_103241-1024x576.jpg"
               heading="Alpine Escape in the Rockies"
               text="This alpine lake surrounded by snow-capped peaks was a hidden treasure. I explored remote paths and connected with local guides who shared the area's deep-rooted history and legends."
           />

           <TripData
               image="https://d3owbckoeihl9o.cloudfront.net/images/10adv/wp-content/uploads/2021/06/TITLE3-2560x1444-description-26-1200x630.jpg"
               heading="Emerald Lake Forest Adventure"
               text="Discovering lush forests and crystal-clear waters made this journey unforgettable. A boat tour through this serene landscape introduced me to native wildlife and tranquil reflection points."
           />



       </div>
       </div>
    )
}

export default Trip;