import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">Current City</span>Medford, MA (Tufts University)
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">mail me</span>{" "}
        <a href="mailto:sawyer.paccione@tufts.edu">sawyer.paccione@tufts.edu</a>
      </p>
      {/* End .custom-span-contact */}

      {/* <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">call me</span>{" "}
        <a href="Tel: +216 21 184 010">+216 21 184 010</a>
      </p> */}
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;