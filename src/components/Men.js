import React from "react";
import Header from "../components/Header";
import C1i1 from "../images/carousel1 img1.png";
import C1i2 from "../images/carousel1 img2.png";

const Men = () => {
  return (
    <>
      <Header />
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" interval="1000">
            <img src={C1i1} className="d-block w-100" />
          </div>
          <div className="carousel-item" interval="1000">
            <img src={C1i2} className="d-block w-100" />
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Men;
