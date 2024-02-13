import "./category.css";
import Input from "../../Others/input";

function Category({ handleChange }) {
  return (
    <div className="category">
      <h1 className="sidebar-title">Category</h1>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="men"
          title="Men"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="women"
          title="Women"
          name="test"
        />

      </div>
    </div>
  );
}

export default Category;
