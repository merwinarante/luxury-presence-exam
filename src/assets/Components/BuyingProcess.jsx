function BuyingProcess() {
  return (
    <>
      <div className="buyingprocess">
        <div className="d-flex row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2">
          <div className="right col d-flex justify-content-center align-items-center">
            <h2 className="text-end">
              The
              <br />
              Buying
              <br />
              Process.
            </h2>
          </div>
          <div className="left col d-flex flex-column align-items-center justify-content-center p-5">
            <div className="d-flex flex-column align-items-start">
              <div className="d-flex align-items-center gap-3">
                <h1>1</h1>
                <p>INITIAL CONSULTATION & PLANNING</p>
              </div>
              <div className="d-flex align-items-center gap-3">
                <h1>2</h1>
                <p>SEARCH FOR A HOME & GET PRE-APPROVED</p>
              </div>
              <div className="d-flex align-items-center gap-3">
                <h1>3</h1>
                <p>SUBMIT AN OFFER</p>
              </div>
              <div className="d-flex align-items-center gap-3">
                <h1>4</h1>
                <p>COMPLETE SETTLEMENT PROCESS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BuyingProcess;
