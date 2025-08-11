import DestinationData from "./DestinationData";
import Mountain1 from "../assets/8.jpeg";
import Mountain2 from "../assets/9.jpeg";
import Mountain3 from "../assets/10.jpeg";
import Mountain4 from "../assets/11.jpeg";
import "./DestinationSyless.css"

const  Destination =()=> {
    return (
        <div className="destination">
    <div className="destination">
        <h1>Popular Destination</h1>
        <h3>Tours give you the opportunity to see a lot ,within a time frame</h3>
    </div>
            <DestinationData
                className ="first-des"
            heading="Haytham khranba"
            text="
Exploring new destinations through tours is an exciting way to experience different cultures,
landscapes, and cuisines. Guided tours provide valuable insights into historical landmarks and
hidden gems that might otherwise go unnoticed. Whether it’s a city sightseeing tour, an adventurous
hiking trip, or a relaxing beach getaway, each journey offers unforgettable memories. With well-planned
 itineraries and expert guides, tours make travel stress-free and enriching."
            img1 ={Mountain1}
            img2 ={Mountain2}
            />
            <DestinationData
                className ="first-des-reverse"
                heading="Haytham khranba"
                text="
Exploring new destinations through tours is an exciting way to experience different cultures,
landscapes, and cuisines. Guided tours provide valuable insights into historical landmarks and
hidden gems that might otherwise go unnoticed. Whether it’s a city sightseeing tour, an adventurous
hiking trip, or a relaxing beach getaway, each journey offers unforgettable memories. With well-planned
 itineraries and expert guides, tours make travel stress-free and enriching."
                img1 ={Mountain1}
                img2 ={Mountain2}
            />


        </div>


    )


}

export default Destination;