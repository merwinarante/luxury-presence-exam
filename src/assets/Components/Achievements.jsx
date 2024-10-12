import React, { useState, useEffect } from "react";
import lower1 from "../../assets/Images/lower1.png";
import upper1 from "../../assets/Images/upper1.png";
import upper2 from "../../assets/Images/upper2.png";

function Achievements() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Array of primary texts corresponding to each image
  const primaryTexts = [
    "Real Estate Success - We provide top-notch service for all clients.",
    "Expert Negotiators - Hansen Partners ensure the best deal.",
    "Experience Like No Other - Over 33 years in the business.",
  ];

  // Array of secondary texts corresponding to each image
  const secondaryTexts = [
    "Our success is built on the trust of our clients.",
    "We go above and beyond to secure the best outcomes.",
    "Our experience speaks volumes in every transaction.",
  ];

  useEffect(() => {
    const carousel = document.querySelector("#carouselExampleFade");
    // Bootstrap carousel emits a slide.bs.carousel event that you can listen to
    carousel.addEventListener("slide.bs.carousel", (event) => {
      setActiveIndex(event.to); // 'to' gives the index of the next slide
    });
  }, []);

  return (
    <div className="achievements container py-5">
      <div className="row">
        <div className="left col d-flex justify-content-center align-items-center">
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
                <img src={upper1} className="d-block w-100" alt="Upper 1" />
              </div>
              <div
                className={`carousel-item ${activeIndex === 1 ? "active" : ""}`}
                data-bs-interval="5000"
              >
                <img src={lower1} className="d-block w-100" alt="Lower 1" />
              </div>
              <div
                className={`carousel-item ${activeIndex === 2 ? "active" : ""}`}
                data-bs-interval="5000"
              >
                <img src={upper2} className="d-block w-100" alt="Upper 2" />
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
        <div className="right col d-flex flex-column justify-content-center align-items-center">
          <div className="text"></div>
          <h1>{primaryTexts[activeIndex]}</h1>
          <h3>{secondaryTexts[activeIndex]}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            blanditiis in nulla cumque commodi unde aliquam perspiciatis atque
            placeat vero mollitia aperiam ullam ea, aut deserunt nostrum.
            Explicabo, vero numquam?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Achievements;
