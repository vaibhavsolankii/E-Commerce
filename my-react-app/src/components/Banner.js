import React from "react";

const Banner = () => {
    return (
        <>
            <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">



                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img
                            src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-02052024-MainBannerDailyChanging-Z1-P3-MAYBELLINENEWYORK-IKONICPROFESSIONAL-UPTO60.jpg"
                            class="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div class="carousel-item">
                        <img
                            src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-02052024-MainBannerDailyChanging-Z1-P6-Kianahouseoffashion-Gulmoharjaipur-Flat60.jpg"
                            class="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div class="carousel-item">
                        <img
                            src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-02052024-MainBannerDailyChanging-Z1-P5-Nike-Asics-min35extra750.jpg"
                            class="d-block w-100"
                            alt="..."
                        />
                    </div>

                    <div class="carousel-item active">
                        <img
                            src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-02052024-MainBannerDailyChanging-Z1-P3-MAYBELLINENEWYORK-IKONICPROFESSIONAL-UPTO60.jpg"
                            class="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div class="carousel-item">
                        <img
                            src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-02052024-MainBannerDailyChanging-Z1-P6-Kianahouseoffashion-Gulmoharjaipur-Flat60.jpg"
                            class="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div class="carousel-item">
                        <img
                            src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-02052024-MainBannerDailyChanging-Z1-P5-Nike-Asics-min35extra750.jpg"
                            class="d-block w-100"
                            alt="..."
                        />
                    </div>
                </div>
                <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                >
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                >
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
};

export default Banner;
