import { Link, useParams } from "react-router-dom";
import products from "../components/Images/all_product";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Detail = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { image, name } = product;
  return (
    <div className="section product">
        <Header></Header>
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <Link to="/shop">back to products</Link>
      <Footer></Footer>
    </div>
  );
};

export default Detail;
