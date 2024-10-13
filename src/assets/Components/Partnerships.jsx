import p1 from "../../assets/Images/p1.png";
import p4 from "../../assets/Images/p4.png";
import p5 from "../../assets/Images/p5.png";
import p6 from "../../assets/Images/p6.png";

function Partnerships() {
  return (
    <>
      <div className="partnerships container pb-4">
        <h1 className="text-center pb-2">Our Partnerships:</h1>
        <div className="text-center">
          <p>
            Through our international affiliations, we have a strong presence in
            over 50 countries. Our luxury listings are sent to prominent
            international real estate sites, reaching over 70 million potential
            buyers and investors worldwide through our relationships with:
          </p>
        </div>
        <div className="py-2 d-flex justify-content-center">
          <img src={p1} alt="" className="exempt " />
        </div>
        <div className=" d-flex justify-content-around pb-4">
          <img src={p4} alt="" />
          <img src={p5} alt="" />
          <img src={p6} alt="" />
        </div>
        <div className="text-center">
          <p>
            JRockcliff is a founding member of Luxury Portfolio International®,
            the luxury division of Leading Real Estate Companies of the World®.
            With more than 500 member firms around the world, Our luxury
            listings are exposed to a vast global audience and reach potential
            buyers and investors in over 50 countries.
          </p>
        </div>
      </div>
    </>
  );
}

export default Partnerships;
