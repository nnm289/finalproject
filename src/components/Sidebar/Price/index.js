import Input from "../../Others/input";
import "./price.css";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h1 className="sidebar-title price-title">Price</h1>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value="low"
          title="$0 - 100"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value="mid"
          title="$100 - $200"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value="high"
          title="Over $200"
          name="test2"
        />


      </div>
    </>
  );
};

export default Price;
