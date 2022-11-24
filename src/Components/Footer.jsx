import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <p>Copyright &#169; {currentYear}</p>
    </div>
  );
};

export default Footer;
