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
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" interval="1000">
            <img src={C1i1} class="d-block w-100" />
          </div>
          <div class="carousel-item" interval="1000">
            <img src={C1i2} class="d-block w-100" />
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Men;
