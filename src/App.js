import "./App.css";
import Header from "./assets/Components/Header";
import Plan from "./assets/Components/Plan";
import Strategy from "./assets/Components/Strategy";
import SellingProcess from "./assets/Components/SellingProcess";
import BuyingProcess from "./assets/Components/BuyingProcess";
import Achievements from "./assets/Components/Achievements";

function Banner() {
  return (
    <>
      <Header></Header>
      <Plan></Plan>
      <Strategy></Strategy>
      <SellingProcess></SellingProcess>
      <BuyingProcess></BuyingProcess>
      <Achievements></Achievements>
    </>
  );
}

export default Banner;
