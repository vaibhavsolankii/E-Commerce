import React, { Component } from "react";
import Styles from "./SumerSpecials.module.css";

const SumerSpecials = () => {
    return <>
        <section className={Styles.SumerSpecials}>
            <div className="heading">
                <h1>Summer Specials</h1>
                <p>Latest Styles to Sizzel In!</p>
            </div>
            <div className={Styles.cardsComponent}>
                <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-05042024-topbtrands-nike-addias-min30.jpg" alt="" />
                <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-05042024-topbtrands-puma-uspa-min45.jpg" alt="" />
                <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-05042024-topbtrands-dnmx-netplay-under499.jpg" alt="" />
                <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-05042024-topbtrands-leecooper-johnplayers-min50.jpg" alt="" />
            </div>
        </section>
    </>
}

export default SumerSpecials;