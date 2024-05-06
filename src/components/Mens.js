import React from "react";
import img from "../images/navy_blue_cotton_solid_shirts_for_men_base_19_10_2023_700x933.jpg";
import img1 from "../images/KOW53886copy_3000x.webp";
import img2 from "../images/sun.png";

function ProductCard() {
  return (
    <div className="d-flex" style={{ margin: "10px" }}>
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Shirt</h5>
          <h5 className="product-price">$10.00</h5>
          <h6 className="product-quantity">Quantity</h6>
        </div>
      </div>
      <div className="card" style={{ width: "18rem", marginLeft: "30px" }}>
        <img src={img1} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Shirt</h5>
          <h5 className="product-price">$18.00</h5>
          <h6 className="product-quantity">Quantity</h6>
        </div>
      </div>
      <div className="card" style={{ width: "18rem", marginLeft: "30px" }}>
        <img src={img2} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Sunglasses</h5>
          <h5 className="product-price">$20.00</h5>
          <h6 className="product-quantity">Quantity</h6>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
