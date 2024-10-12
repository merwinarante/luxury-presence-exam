function Plan() {
  return (
    <>
      <div className="plan d-flex flex-column justify-content-center gap-5 py-5">
        <h1 className="text-center">
          <b>Comprehensive Marketing Plan</b>
        </h1>
        <div className="plan-cards d-flex flex-column gap-5">
          <div className="set-1 d-flex justify-content-center gap-5 align-items-between flex-wrap">
            <div className="d-flex flex-column justify-content-center align-items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5em"
                height="5em"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#bb891b"
                  d="M14 2H0v10h14zM5.71 8L7 8.55L8.29 8L13 11H1zM1 9.83v-4l3.64 1.63zm8.36-2.37L13 5.78v4zM13 3v1.68L7 7.45L1 4.68V3z"
                />
                <path fill="#bb891b" d="M15 4v9H2v1h14V4z" />
              </svg>
              <h4>Responsive</h4>
              <p>Available via Phone, Text, and Email 24/7</p>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5em"
                height="5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#bb891b"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0v9a5 5 0 0 1-7 0a5 5 0 0 0-7 0zm0 16v-7"
                />
              </svg>
              <h4>Syndication</h4>
              <p>
                Market your Property Locally, Nationally, and Internationally
              </p>
            </div>
          </div>
          <div className="set-2 d-flex justify-content-center gap-5 align-items-between flex-wrap">
            <div className="d-flex flex-column justify-content-center align-items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5em"
                height="5em"
                viewBox="0 0 20 20"
              >
                <path
                  fill="#bb891b"
                  d="M16.219 1.943c.653.512 1.103 1.339 1.287 2.205l.065.026l2.045.946a.66.66 0 0 1 .384.597v12.367a.665.665 0 0 1-.85.634l-5.669-1.6l-6.74 1.858a.67.67 0 0 1-.371-.004L.474 17.217a.66.66 0 0 1-.474-.63V3.998c0-.44.428-.756.855-.632l5.702 1.661l2.898-.887q.06-.018.122-.025c.112-.656.425-1.286.95-1.9c.623-.73 1.716-1.158 2.781-1.209c1.105-.053 1.949.183 2.91.936M1.333 4.881v11.215l4.87 1.449V6.298zm8.209.614l-2.006.613v11.279l5.065-1.394v-3.295c0-.364.299-.659.667-.659s.666.295.666.66v3.177l4.733 1.335V6.136l-1.12-.52q-.028.165-.073.323A6.1 6.1 0 0 1 16.4 8.05l-2.477 3.093a.67.67 0 0 1-1.073-.037l-2.315-3.353q-.574-.799-.801-1.436a3.7 3.7 0 0 1-.192-.822m3.83-3.171c-.726.035-1.472.327-1.827.742c-.427.5-.637.968-.679 1.442c-.05.571-.016.974.126 1.373c.105.295.314.669.637 1.12l1.811 2.622l1.91-2.385a4.8 4.8 0 0 0 .841-1.657c.24-.84-.122-2.074-.8-2.604c-.695-.545-1.22-.692-2.018-.653m.138.697c1.104 0 2 .885 2 1.977a1.99 1.99 0 0 1-2 1.977c-1.104 0-2-.885-2-1.977s.896-1.977 2-1.977m0 1.318a.663.663 0 0 0-.667.659c0 .364.299.659.667.659a.663.663 0 0 0 .666-.66a.663.663 0 0 0-.666-.658"
                />
              </svg>
              <h4>Virtual Tour</h4>
              <p>Make your Home standout with a High Quality Virtual Tour</p>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5em"
                height="5em"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#bb891b"
                  d="M6 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m9-4a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm-3.448 6.134l-3.76 2.769a.5.5 0 0 1-.436.077l-.087-.034l-1.713-.87L1 11.8V14h14V9.751zM15 2H1v8.635l4.28-2.558a.5.5 0 0 1 .389-.054l.094.037l1.684.855l3.813-2.807a.5.5 0 0 1 .52-.045l.079.05L15 8.495z"
                />
              </svg>
              <h4>Photography</h4>
              <p>Beautiful, High-end photography to Market your Property</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Plan;
