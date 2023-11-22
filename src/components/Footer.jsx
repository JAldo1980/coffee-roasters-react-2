import React from "react";
import footerLogo from "/public/footer-logo.png";
<img className="top-logo" src={footerLogo} alt="Coffee Roasters Logo" />;

function Footer() {
  return (
    <>
      <div className="footer-box-el">
        <img className="top-logo" src="./public/footer-logo.png"></img>
        <p>Home</p>
        <p>About</p>
        <p>Create Your Plan</p>
        <div className="logo-box-el">
          <img src="./public/facebook.png" alt="facebook-logo" />
          <img src="./public/insta.png" alt="instagram-logo" />
          <img src="./public/twitter.png" alt="twitter-logo" />
        </div>
      </div>
    </>
  );
}

export default Footer;
