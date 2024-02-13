import "./card.css"
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
        <div className="icons">
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
              <Link to={`/shop/${id}`}>
                <FontAwesomeIcon icon={faCartShopping} />
              </Link>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
