import React, { useState, useEffect } from "react";
import achievements1 from "../../assets/Images/achievements1.png";
import achievements2 from "../../assets/Images/achievements2.png";
import achievements3 from "../../assets/Images/achievements3.png";

function Achievements() {
  const [activeIndex, setActiveIndex] = useState(0);

  const primaryTexts = [
    "Over 33 Years of Real Estate Success",
    "We Want To Create An Unforgettable Experience For You...",
    "",
  ];

  const secondaryTexts = [
    "We provide every one of our clients with a level of service they won’t find anywhere else. We give them what they need, often before they know they need it. ​​​​​​​In real estate, almost everything can be negotiated. When you choose Hansen Partners It is experience is 100% nonnegotiable. ​​​​​​​ ​​​​​​​And it’s an experience like no other.",
    "We combine data gained from your home’s Comparative Market Analysis with local market research to create a marketing plan designed to help you meet your selling goals. Your home’s carefully designed plan will include a range of online, print, and other marketing tools targeted to the best-qualified pool of buyers. ​​​​​​​ Successfully marketing a home in today’s real estate environment requires a firm with experience and flexibility. Hansen Partners provides both.",
    <div className="d">
      <h2>The Hansen Parterns Communications Tablet</h2>
      <br />
      <p>
        We have created this as a wonderful tool so that we can communicate with
        you daily, provide you with updates on what is happening with your home.
        We are available at the with a click of your tablet.
      </p>
      <ul>
        <li>
          Review all documents and sign in the comfort of your home or anywhere.
        </li>
        <li>
          Stay up to date on all marketing activities, review materials, photos,
          etc. in real time.
        </li>
        <li>
          Meet with us face to face on our Gotomeeting.com platform to go over
          and discuss the events of the week.
        </li>
        <li>
          You have your own email assigned just for you and your common space to
          quickly write a note, or quickly send a video message to us for fast
          communication using our Bomb bomb video messaging system.
        </li>
      </ul>
      <p>
        We believe that transparency and guiding you and your family through the
        process is key to having the best experience. During these uncertain
        times. It is a good feeling to know you have some one with a proven
        track record you can count on. We will be here to handle your needs
        during the Real Estate process. We think of it before a need even
        arises. Because, that is just what we do. Who you work with does matter!{" "}
      </p>
    </div>,
  ];

  useEffect(() => {
    const carousel = document.querySelector("#carouselExampleFade");
    carousel.addEventListener("slide.bs.carousel", (event) => {
      setActiveIndex(event.to);
    });
  }, []);

  return (
    <div className="achievements container d-flex align-items-center pt-3">
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2">
        <div className="col d-flex justify-content-center align-items-center">
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div
                className={`carousel-item ${activeIndex === 0 ? "active" : ""}`}
                data-bs-interval="5000"
              >
                <img
                  src={achievements1}
                  className="d-block w-100"
                  alt="Upper 1"
                />
              </div>
              <div
                className={`carousel-item ${activeIndex === 1 ? "active" : ""}`}
                data-bs-interval="5000"
              >
                <img
                  src={achievements2}
                  className="d-block w-100"
                  alt="Lower 1"
                />
              </div>
              <div
                className={`carousel-item ${activeIndex === 2 ? "active" : ""}`}
                data-bs-interval="5000"
              >
                <img
                  src={achievements3}
                  className="d-block w-100"
                  alt="Upper 2"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col d-flex flex-column justify-content-center align-items-start">
          <h2>{primaryTexts[activeIndex]}</h2>
          <br></br>
          <p>{secondaryTexts[activeIndex]}</p>
        </div>
      </div>
    </div>
  );
}

export default Achievements;
