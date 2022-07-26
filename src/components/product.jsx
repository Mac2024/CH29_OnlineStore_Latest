import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useState, useContext } from "react";
import StoreContext from "./../context/storeContext";

const Product = (props) => {
  let [quantity, setQuantity] = useState(1);
  let globalAddProd = useContext(StoreContext).addProduct;

  const quantityChange = (val) => {
    setQuantity(val);
  };

  const getTotal = () => {
    let total = props.data.price * quantity;
    return total.toFixed(2);
  };
  const handleAdd = () => {
    /** should be a copy of props.data plus quantity  */
    let prod4Cart = { ...props.data, quantity: quantity };
    //prod4Cart.quantity = quantity;

    globalAddProd(prod4Cart); // call the global fn
  };

  return (
    <div className="product">
      <img src={"/images/" + props.data.image} alt="" />
      <h2>{props.data.title}</h2>
      <label>Price: ${(+props.data.price).toFixed(2)}</label>
      <label>Total: ${getTotal()}</label>
      <QuantityPicker onChange={quantityChange}></QuantityPicker>
      <button onClick={handleAdd} className="btn btn-primary">
        Add
      </button>
    </div>
  );
};

export default Product;
