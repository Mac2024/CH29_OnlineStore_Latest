import "./admin.css";
import { useState } from "react";


const  Admin = () => {
    const [product, setProduct] = useState({});
    const [coupon, setCoupon] = useState({});
    const [allCoupons, setAllCoupons] = useState({});
    const [allProducts, setAllProducts] = useState({});

    const saveProduct = () => {
    let copy = [...allProducts];
    copy.push(product);
    setAllProducts(copy);
    };

    const textChanged = (e) => {}

    const handleCouponChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        let copy = coupon // create copy
        copy[name] = value; // modify copy
        setCoupon(copy); // set copy back
    };

    const saveCoupon = () =>{
        console.log("coupon");
    };
    let copy = [...allCoupons]
    copy.push(coupon);
    setAllCoupons(copy);
    
    return (
        <div className="admin-page">
            <h1>Store administration</h1>
        
            <div className="content">
                <section className="products">
                    <div className="field">
                        <label>Title</label>
                        <input name="title" onChange={textChanged} className="form-control" type="text"/>
                        
                        <div className="field">
                        <label>Category</label>
                        <input name="category" onChange={textChanged} className="form-control" type="text"/>
                        </div>
                        
                        <div className="field">
                        <label>Image</label>
                        <input name="image" onChange={textChanged} className="form-control" type="text"/>
                        </div>
                        
                        <div className="field">
                        <label>Price</label>
                        <input name="price" onChange={textChanged} className="form-control" type="text"/>
                        </div>
                        
                        <div className="field">
                            <button onClick={saveProduct} className="btn btn-primary">
                        <label>Register Product</label>
                        </button>
                        </div>
                
                <hr />

                <ul>
                    {allProducts.map((p,index)=> <li key={index} >{p.title}</li>)}
                </ul>
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
                            <input name="discount" onChange={handleCouponChange} type="number" />
                        </div>

                <div className="my-control">
                    <button className="btn btn-dark"></button>
                </div>
            </div>

            <div>
                <label>Discount</label>
                <input name= "discount" onChange={couponChanged} className= "form-control" type="number"/>
            </div>

            <div className="field">
                <button onClick={saveCoupon} className= "btn btn-primary">
                    Register Coupon
                </button>
            </div>

            <hr />
            <ul>
                {allCoupons.map(c => <li key={c.code}>{c.code} - {c.discount}</li>)}
            </ul>
        </section>
    </div>
    </div>
    );

};
export default Admin;