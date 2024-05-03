import React from "react";

const Offer = () => {
    return (
        <>
            <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-bs-ride="carousel"
            >
                <div class="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="https://assets.ajio.com/cms/AJIO/WEB/1440x128-%20UHP%20web%20RRL_SBI.jpg"
                            class="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://assets.ajio.com/cms/AJIO/WEB/Federal%20Bank-1440x128---.jpg"
                            class="d-block w-100"
                            alt="..."
                        />
                    </div>
                </div>

            </div>
        </>
    );
};

export default Offer;
