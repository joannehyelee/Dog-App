import React from "react";
import "./Result.css";

// "Props" is an object that has properties passed down from a parent
const Result = props => {
    // console.log(props.dogImages);
    return (
        <section className="gds-persist-nav__main-content">
        <div className="gds-layout__column--md-12 -m-b-3">
            <div className="gds-flex-grid__container">
                <div className="gds-flex-grid__row">
                {props.dogImages.map(image => ( 
                <div className="gds-flex-grid__item gds-flex-grid__item--desktop-4 gds-flex-grid__item--tablet-2 gds-flex-grid__item--mobile-1 -m-b-3">  
                    <div className="gds-card gds-flex-grid__item--full-height">
                        <div className="gds-card__block">
                            <img className="dog-image" key={image} src={image} alt="" />
                        </div>
                    </div>
                </div>
                ))}
                </div>
            </div>
        </div>
        </section>
    );
};

export default Result;