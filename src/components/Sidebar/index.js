import Category from "./Category/index";
import Price from "./Price/index";

import "./sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <div>
      <section className="sidebar">
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />

      </section>
    </div>
  );
};

export default Sidebar;
