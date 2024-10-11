function Banner() {
  return (
    <>
      <div className="header">
        <div className="overlay">
          <nav className="navbar navbar-expand-lg pt-5">
            <div className="container-fluid container ">
              <a className="navbar-brand" href="#">
                LOGO
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse text-center"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-5">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">
                      MEET THE TEAM
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      SEARCH FOR HOMES
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      OUR COMMUNITIES
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      HOME VALUATION
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="banner d-flex flex-column justify-content-center align-items-center my-auto">
            <h1 className="mb-5 text-light">SERVICES</h1>
            <form class="d-flex d-flex gap-2 mb-5" role="search">
              <input
                className="w-100 searchbar text-light ps-2"
                type="search"
                placeholder="Search by Address or by Area"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-light m-auto searchbutton"
                type="submit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="white"
                    d="M7 2a5 5 0 1 0 0 10A5 5 0 0 0 7 2M0 7a7 7 0 1 1 12.606 4.192l3.101 3.1l-1.414 1.415l-3.1-3.1A7 7 0 0 1 0 7"
                  />
                </svg>
              </button>
            </form>
            <button className="btn btn-outline-light btn-lg mx-auto d-flex align-items-center">
              BOOK AN APPOINTMENT{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  d="m14 16l4-4m0 0l-4-4m4 4H6"
                />
              </svg>
            </button>
          </div>
          <div className="d-flex"></div>
        </div>
      </div>
    </>
  );
}

export default Banner;
