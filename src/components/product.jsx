import './product.css';
import QuantityPicker from './quantityPicker';
import { useState } from 'react';

const Product = (props) => {
    let [quantity, setQuantity] = useState(1);

    const quantityChange = (val) => {
        setQuantity(val);
    };

    const getTotal = () => {
        let total = props.data.price * quantity;
        return total.toFixed(2);
    }

    return(
        <div className='product' >
            <img src= {'/images/' + props.data.image} alt='' />
            <h2>{props.data.title}</h2>
            <label>Price: ${props.data.price.toFixed(2)}</label>
            <label>Total: ${getTotal()}</label>
            <QuantityPicker onChange={quantityChange}></QuantityPicker>
            <button className='btn btn-primary'>Add</button>
        </div>
    )
}

export default Product;