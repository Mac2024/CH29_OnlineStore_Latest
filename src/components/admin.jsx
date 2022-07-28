import "./admin.css";
import { useState } from "react";
import DataService from "../services/dataService";

const Admin = () => {
  const [coupon, setCoupon] = useState({});
  const [product, setProduct] = useState({});
  const [allCoupons, setAllCoupons] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  const handleCouponChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    let copy = coupon; // create copy
    copy[name] = value; // modify copy
    setCoupon(copy); // set copy back
  };

  const saveCoupon = () => {
    let coupon2beSaved = { ...coupon };
    let discount = parseFloat(coupon2beSaved.discount);
    coupon2beSaved.discount = discount;

    console.log(coupon2beSaved);

    let copyCoupons = [...allCoupons];
    copyCoupons.push(coupon2beSaved);
    setAllCoupons(copyCoupons);
  };

  const handleProductChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    let copy = { ...product };
    copy[name] = value;
    setProduct(copy);
  };

  const saveProduct = () => {
    let copy = [...allProducts];
    copy.push(product);
    setAllProducts(copy);
    console.log(copy);

    // todo: save copy on server
    let service = new DataService();
    service.saveProduct(copy);

    //let copyAllProds = [...allProducts];
    // copy.AllProds.push(copy);
    // setAllProducts(copyAllProds);
  };
  return (
    <div className="admin-page">
      <h1>Store administration</h1>

      <div className="parent">
        <section className="products">
          <h3>Products</h3>
          <div className="form"></div>
          <div className="products-list">
            {/* <ul>
              {allProducts.map((prod, index) => (
                <li key={index}>
                  {prod.title} - ${prod.price}
                </li>
              ))}
            </ul> */}
          </div>
          <div className="field">
            <label>Title</label>
            <input
              name="title"
              onChange={handleProductChange}
              className="form-control"
              type="text"
            />

            <div className="field">
              <label>Category</label>
              <input
                name="category"
                onChange={handleProductChange}
                className="form-control"
                type="text"
              />
            </div>

            <div className="field">
              <label>Image</label>
              <input
                name="image"
                onChange={handleProductChange}
                className="form-control"
                type="text"
              />
            </div>

            <div className="field">
              <label>Price</label>
              <input
                name="price"
                onChange={handleProductChange}
                className="form-control"
                type="text"
              />
            </div>

            <div className="field">
              <button onClick={saveProduct} className="btn btn-primary">
                <label>Register Product</label>
              </button>
            </div>

            <hr />

            {/* <ul>
              {allProducts.map((p, index) => (
                <li key={index}>{p.title}</li>
              ))}
            </ul> */}
          </div>
        </section>

        <section className="coupons">
          <h3>Coupon Codes</h3>

          <div className="form">
            <div className="my-control">
              <label>Code</label>
              <input name="code" onChange={handleCouponChange} type="text" />
            </div>

            <div className="my-control">
              <label>Discount</label>
              <input
                name="discount"
                onChange={handleCouponChange}
                type="number"
              />
            </div>
          </div>

          <div className="field">
            <button onClick={saveCoupon} className="btn btn-primary">
              Save Coupon
            </button>
          </div>

          <hr />
          <ul>
            {allCoupons.map((c) => (
              <li key={c.code}>
                {c.code} - {c.discount}
              </li>
            ))}
          </ul>
          <div className="coupons-list">
            {allCoupons.map((coupon, index) => (
              <li key={index}>
                {coupon.code} - {coupon.discount}% off
              </li>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Admin;
