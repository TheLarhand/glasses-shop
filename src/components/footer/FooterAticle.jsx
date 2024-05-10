import React from 'react';
import classes from './Footer.module.css'
import arrow from '../../images/UI/right-arrow.svg';

const FooterAticle = ({articlesInfo}) => {
    const openArticle = () => {
        alert("вы чЕтаете стОтью...");
    }

    return (
        <div className={classes.article}>
            <div className={classes.articleContent}>
                <h3 className={classes.articleTitle}>
                    {articlesInfo.title}
                </h3>
                <p className={classes.articleBody}>
                    {articlesInfo.body}
                </p>

                <div 
                    className={classes.details}
                    onClick={openArticle}
                >
                    Read more 
                    <img src={arrow} alt="arrow"/>
                </div>
            </div>
        </div>
    );
}

export default FooterAticle;
