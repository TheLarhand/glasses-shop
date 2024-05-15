import React from 'react';
import classes from './Footer.module.css'
import logo from '../../images/UI/footer-logo.svg'
import insta from '../../images/UI/social-media/insta.svg'
import site from '../../images/UI/social-media/site.svg'
import twitter from '../../images/UI/social-media/twitter.svg'
import youtube from '../../images/UI/social-media/youtube.svg'

const FooterBottom = () => {
    return (
        <div className={classes.footerBottom}>
            <div className={classes.footerBottomWrapper}>
                <div className={classes.mainColumn}>
                    <img className={classes.logo} src={logo} alt="logo" />
                    <a className={classes.footerText} href="#">About us</a>
                    <a className={classes.footerText} href="#">Contact</a>
                    <div className={classes.logosWrapper}>
                        <a className={classes.socialMedia} href="#">
                            <img src={insta} alt="insta" />
                        </a>
                        <a className={classes.socialMedia} href="#">
                            <img src={site} alt="site" />
                        </a>
                        <a className={classes.socialMedia} href="#">
                            <img src={twitter} alt="twitter" />
                        </a>
                        <a className={classes.socialMedia} href="#">
                            <img src={youtube} alt="youtube" />
                        </a>
                    </div>
                    <p className={classes.footerText}>©LensLove 2022. We love glasses!</p>
                </div>
                <div className={classes.footerColumn}>
                    <h3 className={classes.columnHeading}>Info</h3>
                    <a className={classes.footerText} href="#">Delivery</a>
                    <a className={classes.footerText} href="#">Warranty</a>
                    <a className={classes.footerText} href="#">Support</a>
                    <a className={classes.footerText} href="#">Sitemap</a>
                    <a className={classes.footerText} href="#">Privacy Policy</a>
                    <a className={classes.footerText} href="#">Terms&Conditions</a>
                </div>
                <div className={classes.footerColumn}>
                    <h3 className={classes.columnHeading}>Shops</h3>
                    <p className={classes.footerText}>
                        Berlin <br />
                        L-V:09:30-21:00 <br />
                        S:10:00-18:00 <br />
                        D:10:00-16:00 <br /><br />
                    </p>

                    <p className={classes.footerText}>
                        Frankfurt <br />
                        L-V:10:00-20:00 <br />
                        S:10:00-16:00 <br />
                    </p>
                </div>
                <div className={classes.footerColumn}>
                    <h3 className={classes.columnHeading}>Help</h3>
                    <p className={classes.footerText}>
                        Email: hi@lenslove.com <br />
                        Client Support: <br />
                        support@lenslove.com <br />
                        0371 525 777 <br />
                    </p>
                </div>
            </div>
        </div>
    );
}

export default FooterBottom;
