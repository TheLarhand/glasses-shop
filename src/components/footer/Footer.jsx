import React from 'react';
import classes from './Footer.module.css'
import FooterAticle from './FooterAticle';
import FooterBottom from './FooterBottom';
import photo1 from '../../images/photos/article-img1.png';
import photo2 from '../../images/photos/article-img2.png';

const Footer = ({articlesInfo}) => {
    return (
        <div>
            <h1 className={classes.heading}>
                Our advice
            </h1>
            <div className={classes.articles}>
                <img className={classes.articleImage} src={photo1} alt="" />
                <FooterAticle
                    articlesInfo={articlesInfo[0]}
                />
                <FooterAticle
                    articlesInfo={articlesInfo[1]}
                />
                <img className={classes.articleImage} src={photo2} alt="" />
            </div>
            <FooterBottom/>
        </div>
    );
}

export default Footer;
