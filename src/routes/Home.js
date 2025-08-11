import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
import HomeInterface from "../components/HomeInterface";
import ArticlePreview from "../components/NewsSection";
import NewsSection from "../components/NewsSection";

function Home () {
    return (
        <>
            <Navbar/>
            {/* <Hero
              cName ="hero"
              heroImg = "https://png.pngtree.com/background/20230410/original/pngtree-travel-around-the-world-background-picture-image_2385120.jpg"
              title = "Your Journy Your Story"
              text = "Choose Your Favorite Destination"
              buttonText ="Travel Plan"
              url ="/searchbar"
              btnClass ="show"
              />
              */ }
            <HomeInterface/>
            {/*<Destination/>*/}
             <NewsSection/>
            <Trip/>
            <Footer/>
        </>
    );

}
export default Home ;