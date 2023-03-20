import React from "react";
import exampleimg from "./img/exampleimg.png";
import "./styles/shop.css";

export default function Shop() {
    return (
        <div className="container shop-container">
            <div className="row justify-content-center">
                <div className="col-md-5 col-lg-3 shop-items shadow">
                <h1 className="shop-item-titles">Example #1</h1>
                <div className="text-center"><img src={exampleimg} alt="cat laying on sweater" className="img-thumbnail shop-img" /></div>
                <div className="shop-item-description text-center">Description</div>
                <div className="shop-item-prices text-center">Price</div>
                </div>
                <div className="col-md-5 col-lg-3 shop-items shadow">
                <h1 className="shop-item-titles">Example #2</h1>
                <div className="text-center"><img src={exampleimg} alt="cat laying on sweater" className="img-thumbnail shop-img" /></div>
                <div className="shop-item-description text-center">Description</div>
                <div className="shop-item-prices text-center">Price</div>
                </div>
                <div className="col-md-5 col-lg-3 shop-items shadow">
                <h1 className="shop-item-titles">Example #3</h1>
                <div className="text-center"><img src={exampleimg} alt="cat laying on sweater" className="img-thumbnail shop-img" /></div>
                <div className="shop-item-description text-center">Description</div>
                <div className="shop-item-prices text-center">Price</div>
                </div>
                <div className="col-md-5 col-lg-3 shop-items shadow">
                <h1 className="shop-item-titles">Example #4</h1>
                <div className="text-center"><img src={exampleimg} alt="cat laying on sweater" className="img-thumbnail shop-img" /></div>
                <div className="shop-item-description text-center">Description</div>
                <div className="shop-item-prices text-center">Price</div>
                </div>
                <div className="col-md-5 col-lg-3 shop-items shadow">
                <h1 className="shop-item-titles">Example #5</h1>
                <div className="text-center"><img src={exampleimg} alt="cat laying on sweater" className="img-thumbnail shop-img" /></div>
                <div className="shop-item-description text-center">Description</div>
                <div className="shop-item-prices text-center">Price</div>
                </div>
                <div className="col-md-5 col-lg-3 shop-items shadow">
                <h1 className="shop-item-titles">Example #6</h1>
                <div className="text-center"><img src={exampleimg} alt="cat laying on sweater" className="img-thumbnail shop-img" /></div>
                <div className="shop-item-description text-center">Description</div>
                <div className="shop-item-prices text-center">Price</div>
                </div>
            </div>
        </div>
    );
};