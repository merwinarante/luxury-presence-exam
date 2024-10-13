import realtor1 from "../../assets/Images/realtor1.png";
import realtor2 from "../../assets/Images/realtor2.png";
import realtor3 from "../../assets/Images/realtor3.png";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container py-5">
          <div>
            <h1>Julie Hansen Partnership</h1>
            <p>
              An elite group of the East Bay’s most talented and visionary real
              estate professionals believed buyers and sellers deserved more
              from their real estate company. More service. More resources. More
              integrity. More global reach. In a word, more of everything people
              should expect when they buy or sell their homes.
            </p>
          </div>
          <div className="d-flex row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 pt-4">
            <div className="newsletter col d-flex flex-column align-items-start text-start gap-3">
              <h1>Newsletter</h1>
              <h4>
                Subscribe to our Newsletter for latest news and updates. Stay
                tuned!{" "}
              </h4>
              <form class="d-flex flex-column gap-4 mb-5" role="search">
                <input
                  className="w-100 searchbar text-light ps-2"
                  type="search"
                  placeholder="Email Address"
                  aria-label="Search"
                />
                <button className="btn btn-outline-dark btn-lg d-flex align-items-center justify-content-center">
                  SUBSCRIBE{" "}
                </button>
              </form>
            </div>
            <div className="contactinfo col text-start">
              <div>
                <p>
                  <b>ADDRESS</b>
                </p>
                <p>4733 Chabot Drive #100 Pleasanton, CA 94588</p>
              </div>
              <div>
                <p>
                  <b>CONTACT INFORMATION</b>
                </p>
                <p>(925) 553-6707</p>
                <p>luxuryhomesinwc@icloud.com</p>
                <p>Julie Hansen-Orvis | CA DRE# 00934447</p>
                <div className="d-flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3em"
                    height="3em"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="black"
                      d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4M7.65 13.979H5.706V7.723H7.65zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973m8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3em"
                    height="3em"
                    viewBox="0 0 2048 2048"
                  >
                    <path
                      fill="black"
                      d="M1024 0q141 0 272 36t244 104t207 160t161 207t103 245t37 272q0 126-29 244t-84 225t-132 196t-174 161t-208 118t-237 68v-716h239l45-296h-284V832q0-55 18-87t48-48t68-21t79-5h42q21 0 41 1V420q-56-10-114-15t-115-5q-93 0-165 28t-121 80t-75 125t-26 165v226H604v296h260v716q-125-19-237-67t-208-118t-173-161t-132-197t-84-224t-30-245q0-141 36-272t104-244t160-207t207-161T752 37t272-37"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-around align-items-center py-5">
            <img src={realtor1} alt="" />
            <img src={realtor3} alt="" className="sereno" />
            <img src={realtor2} alt="" />
          </div>
          <p className="text-center">Copyright 2024 | Privacy Policy</p>
          <p className="text-center">
            Website Designed & Developed by Merwin Arante for Luxury Presence
            Application
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
