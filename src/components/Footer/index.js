import React from 'react'
import "./footer.css"
import brands from '../Images/brands.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDribbble, faInstagram, faYoutube, faFacebook } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className="footer">
      <h1 className='sponsor'>SPONSORED BY
      </h1>
      <hr></hr>
      <img src={brands} alt=""></img>
      <div className="footer-elements">
        <div className="bounce">
          <FontAwesomeIcon icon={faDribbble} className="logo-bounce" />
          <hr />
        </div>

        <div>
          <ul>
            <li>Features</li>
            <li>Company</li>
            <li>Team</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Support center</li>
            <li>FAQs</li>
            <li>Policy</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Customer service</li>
            <li>Delivery</li>
            <li>Refund</li>
          </ul>
        </div>

        <div className='contact-social'>
          <h1>CONTACT US</h1>
          <ul class="social">
            <li className="brand-logo">
              <a href="https://www.facebook.com/profile.php?id=100022927309758">
                <FontAwesomeIcon icon={faFacebook} />
                <p></p>
              </a>
            </li>
            <li className="brand-logo">
              <a href="https://www.youtube.com/channel/UCUA_bES86al4Gbqj08kibaw">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </li>
            <li className="brand-logo">
              <a href="https://www.instagram.com/sos.nnminh/">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer