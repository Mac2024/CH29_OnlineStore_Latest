import "./productInCart.css";
import getTotal from "./productInCart";
import { useContext } from "react";
import StoreContext from "../context/storeContext";

const ProductInCart = (props) => {
  const removeProduct = useContext(StoreContext).removeProduct;

  const getTotal = () => {
    let total = props.data.price * props.data.quantity;
    return total.toFixed(2);
  };

  const handleRemove = () => {
    removeProduct(props.data.id);
  };
  return (
    <div className="product-cart">
      <div className="info">
        <img src={"./images/" + props.data.image} alt="" />
        <h5>{props.data.title}</h5>
        <p>{props.data.category}</p>
      </div>

      <div className="price">
        <label className="col-head">Price</label>
        <label>${props.data.price}</label>
      </div>

      <div className="quantity">
        <label className="col-head">Quantity</label>
        <label>${props.data.quantity}</label>
      </div>

      <div className="total">
        <label className="col-head">Total</label>
        <label>${getTotal()}</label>
      </div>

      <button onClick={handleRemove} className="btn btn-sm btn-danger">
        Remove
      </button>
    </div>
  );
};

{
  /* return (
    <div className="prodInCart">
        <ul>
        {cart.map((prod, id) => (
          <li key={prod.id}>
            {prod.title} #{prod.quantity} ${prod.price}
          </li>
        ))}
      </ul>
    </div> */
}

export default ProductInCart;
