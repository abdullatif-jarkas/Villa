import BestAppartment from "../../components/main/BestAppartment/BestAppartment";
import VideoView from "../../components/main/VideoView/VideoView";
import Counter from "../../components/Counter/Counter";
import "./Home.css";
import BestDeal from "../../components/main/BestDeal/BestDeal";
import Properties from "../../components/main/Properties/Properties";
import Contact from "../../components/main/Contact/Contact";
import NavBar from "../../components/common/NavBar/NavBar";
import SubHeader from "../../components/SubHeader/SubHeader";
import Slider from "../../components/Slider/Slider";
import { data } from "./../../data/SliderData";
import { subHeaderData } from "../../data/subHeaderData";
import { links } from "./../../data/linksData";

const Home = () => {
  return (
    <div className="home">
      <NavBar links={links} />
      <SubHeader icons={subHeaderData} />
      <Slider data={data} />
      <BestAppartment />
      <VideoView />
      <div className="counter-container">
        <Counter num="34" text1="Buildings" text2="Finished Now" />
        <Counter num="12" text1="Years" text2="Experience" />
        <Counter num="24" text1="Awwards" text2="Won 2023" />
      </div>
      <BestDeal />
      <Properties />
      <Contact />
    </div>
  );
};

export default Home;
