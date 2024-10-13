import "./App.css";
import Header from "./assets/Components/Header";
import Plan from "./assets/Components/Plan";
import Strategy from "./assets/Components/Strategy";
import SellingProcess from "./assets/Components/SellingProcess";
import BuyingProcess from "./assets/Components/BuyingProcess";
import Achievements from "./assets/Components/Achievements";
import Market from "./assets/Components/Market";
import Partnerships from "./assets/Components/Partnerships";
import WorkWithUs from "./assets/Components/WorkWithUs";
import Footer from "./assets/Components/Footer";

function Banner() {
  return (
    <>
      <Header></Header>
      <Plan></Plan>
      <Strategy></Strategy>
      <SellingProcess></SellingProcess>
      <BuyingProcess></BuyingProcess>
      <Achievements></Achievements>
      <Market></Market>
      <Partnerships></Partnerships>
      <WorkWithUs></WorkWithUs>
      <Footer></Footer>
    </>
  );
}

export default Banner;
