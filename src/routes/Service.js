import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/3.jpeg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
import MostVisited from "../components/MostVisited";
import Service1 from "../assets/service.png";
import CitySelector from "../components/CitySelector";
import SearchDestination from "../components/SearchDestination";
import TravelTips from "../components/TravelTips";

function Service () {
    return (
        <>
            <Navbar/>
            <SearchDestination/>
           <CitySelector/>
            <TravelTips/>
            <Trip/>
            <Footer/>
        </>
    )

}
export default Service ;