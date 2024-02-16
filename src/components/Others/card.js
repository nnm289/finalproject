import "./card.css";
import { Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { pink } from "@mui/material/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

// import product from "../Images/all_product"

const Card = ({ id, image, name, price }) => {
  return (
    <>
      <section className="card">
        <Checkbox
          defaultUnchecked
          sx={{
            //   color: pink[800],
            "&.Mui-checked": {
              color: pink[600],
            },
          }}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
        />

        <div className="icons">
          <Link to={`/shop/${id}`}>
            <div className="price">more details</div>
          </Link>
        </div>
        <div className="wrap">
          <img src={image} alt="" className="card-img" />
        </div>

        <div className="card-details">
          <h3 className="card-title">{name}</h3>

          <section className="card-price">
            <div className="price">${price}</div>

            <div className="shopping">
              {" "}
              <button className="add-btn">
                <span> buy</span>
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faCartShopping} />
                </span>
              </button>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
