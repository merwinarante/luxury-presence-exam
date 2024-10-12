import lower1 from "../../assets/Images/lower1.png";
import lower2 from "../../assets/Images/lower2.png";
import upper1 from "../../assets/Images/upper1.png";
import upper2 from "../../assets/Images/upper2.png";

function Strategy() {
  return (
    <>
      <div className="strategy">
        <div className="container d-flex flex-column gap-5 py-5">
          <div className="upper d-flex flex-column justify-content-center align-items-center gap-2 flex-wrap">
            <h1 className="text-center d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 48 48"
              >
                <path
                  fill="none"
                  stroke="#bb891b"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M43.262 16.595L11.585 35.792h25.528zm-13.026 7.893l-6.214-12.28l-12.437 23.584"
                />
                <path
                  fill="none"
                  stroke="#bb891b"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m11.585 35.792l-7.323-18.72l12.955 8.039"
                />
              </svg>
              Decor Guidance
            </h1>
            <div className="d-flex justify-content-around gap-5">
              <div className="w-50 d-flex justify-content-end">
                <div
                  id="carouselExampleSlidesOnly"
                  class="carousel slide carousel-fade"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="2000">
                      <img src={upper1} alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                      <img src={upper2} alt="..." />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-50 d-flex flex-column justify-content-center align-items-start text-center">
                <h3>Staging Expertise</h3>
                <div className="text-start">
                  <p>Unclutter and organize your home</p>
                  <p>Neatly arrange drawers and cabinets</p>
                  <p>Keep pets outdoors or off the premises</p>
                  <p>Play soft music</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lower d-flex flex-column justify-content-center align-items-center gap-2">
            <h1 className="text-center">
              Intentional Layout
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 48 48"
              >
                <path
                  fill="none"
                  stroke="#bb891b"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M43.262 16.595L11.585 35.792h25.528zm-13.026 7.893l-6.214-12.28l-12.437 23.584"
                />
                <path
                  fill="none"
                  stroke="#bb891b"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m11.585 35.792l-7.323-18.72l12.955 8.039"
                />
              </svg>
            </h1>
            <div className="d-flex justify-content-around gap-5">
              <div className="w-50 d-flex flex-column justify-content-center align-items-end text-center">
                <h3>Staging Expertise</h3>
                <div className="text-end">
                  <p>Unclutter and organize your home</p>
                  <p>Neatly arrange drawers and cabinets</p>
                  <p>Keep pets outdoors or off the premises</p>
                  <p>Play soft music</p>
                </div>
              </div>
              <div className="w-50 d-flex justify-content-star">
                <div
                  id="carouselExampleSlidesOnly"
                  class="carousel slide carousel-fade"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="2000">
                      <img src={lower1} className="w-100" alt="Hello" />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                      <img src={lower2} class="w-100" alt="Hi" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Strategy;
