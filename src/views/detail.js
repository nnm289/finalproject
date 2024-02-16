import { useParams } from "react-router-dom";
import { NavLink as Link } from "react-router-dom";
import products from "../components/Images/all_product";
import "./detail.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Detail = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { image, name,price } = product;
  return (
    <div className="detail-overlay">
      <div className="detail">
        <div className="detail-content">
          <Link to="/shop">
            <FontAwesomeIcon icon={faXmark} className="x" />
          </Link>
          <div className="detail-img">
            <div className="main-img">
              {" "}
              <img src={image} alt={name} />
            </div>
            <div className="mini-img">
              <img src={image} alt={name} />
              <img src={image} alt={name} />
              <img src={image} alt={name} />
              <img src={image} alt={name} />
            </div>
          </div>
          <div className="product-content">
            <h1>{name}</h1>
            <h1>${price}</h1>

            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Neque
              accumsan habitant auctor curae senectus mi netus aenean? Vitae et
              suscipit facilisi nam purus pellentesque.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
