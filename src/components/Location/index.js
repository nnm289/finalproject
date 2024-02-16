import React from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import Iframe from "react-iframe";
import "./location.css"
const Location = () => {
  return (
    <div className="Location">
      <div className="location-text">
        <h1>OUR HEADQUARTER</h1>
        <LoremIpsum p={1} />
      </div>
      <div className="map">
        <Iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.754620340774!2d105.81523775!3d21.002471049999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac9b1bdb1599%3A0xf637f71ce16ca9f9!2zS2h1IMSRw7QgdGjhu4sgUm95YWwgQ2l0eSwgVGjGsOG7o25nIMSQw6xuaCwgVGhhbmggWHXDom4sIEjDoCBO4buZaQ!5e0!3m2!1svi!2s!4v1708085451939!5m2!1svi!2s"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></Iframe>
      </div>
    </div>
  );
};

export default Location;
