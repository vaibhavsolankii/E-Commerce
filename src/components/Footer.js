import React from 'react';
import styles from "./footer.module.css";

function Footer()
{
    return (
        <footer>
            <div className={styles.footer}>
                <div className={styles.footerSection1}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="50px" width="50px" viewBox='0 0 572 512'>
                        <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="50px" width="50px" viewBox="0 0 576 512">
                        <path d="M559.7 392.2c17.8-13.1 21.6-38.1 8.5-55.9s-38.1-21.6-55.9-8.5L392.6 416H272c-8.8 0-16-7.2-16-16s7.2-16 16-16h16 64c17.7 0 32-14.3 32-32s-14.3-32-32-32H288 272 193.7c-29.1 0-57.3 9.9-80 28L68.8 384H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H192 352.5c29 0 57.3-9.3 80.7-26.5l126.6-93.3zm-366.1-8.3a.5 .5 0 1 1 -.9 .2 .5 .5 0 1 1 .9-.2z" />
                    </svg>
                    <img src="images\MasterCard_Logo.svg.png" height="50px" width="30px" alt="Quality Logo" />
                </div>
                <div className={styles.footerSection2}>
                    <h5>EASY EXCHANGE</h5>
                    <h5>100% HANDPICKED</h5>
                    <h5>ASSURED QUALITY</h5>
                </div>
            </div>
            <div className={styles.footerLinks}>
                <div className={styles.linkSection}>
                    <p>Ajio</p>
                    <div className={styles.linkContainer}>
                        <a href="/">Who we are</a>
                        <a href="/">Terms & Conditions</a>
                        <a href="/">We respect your privacy</a>
                        <a href="/">Fees and payments</a>
                        <a href="/">Returns and Refund Policy</a>
                        <a href="/">Promotions Terms & Conditions</a>
                    </div>
                </div>
                <div className={styles.linkSection}>
                    <p>Help</p>
                    <div className={styles.linkContainer}>
                        <a href="/">Track your order</a>
                        <a href="/">Frequently Asked Questions</a>
                        <a href="/">Returns</a>
                        <a href="/">Cancellations</a>
                        <a href="/">Payments</a>
                        <a href="/">Customer care</a>
                        <a href="/">How do I redeem my Coupon</a>
                    </div>
                </div>
                <div className={styles.linkSection}>
                    <p>Shop by</p>
                    <div className={styles.linkContainer}>
                        <a href="/">Men</a>
                        <a href="/">Women</a>
                        <a href="/">Kids</a>
                        <a href="/">Indie</a>
                        <a href="/">Stores</a>
                        <a href="/">New Arrivals</a>
                        <a href="/">Brand directory</a>
                        <a href="/">Home</a>
                        <a href="/">Collections</a>
                    </div>
                </div>
                <div className={styles.linkSection}>
                    <p>Follow us</p>
                    <div className={styles.linkContainer}>
                        <a href="/">Facebook</a>
                        <a href="/">Insta-Ajio</a>
                        <a href="/">Insta-Ajioluxe</a>
                        <a href="/">Twitter</a>
                        <a href="/">Pinterest</a>
                    </div>
                </div>
            </div>
            <hr />
            <div className={styles.payment}>
                <div className={styles.paymentcontainer}>
                    <div>
                        <p>Payment Methods</p>
                        <div className={styles.container}>
                            <p>Net <mark>Banking</mark></p>
                            <p><i>Verified by VISA</i></p>
                            <p><img src="images\images.png" height="40px" width="55px" alt="Payment Methods" /></p>
                            <p>Cash on Delivery</p>
                            <p>Jio Money</p>
                        </div>
                    </div>
                    <div>
                        <p>Secure systems</p>
                        <div className={styles.container1}>
                            <p>256BIT Encryption</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
