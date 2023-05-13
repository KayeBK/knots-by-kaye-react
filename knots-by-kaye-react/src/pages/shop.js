import React, { useState } from "react";
import Card from "./card";
import Buttons from "./buttons";
import Data from "./Data";
import "./styles/shop.css";


const Shop = () => {
    const [item, setItem] = useState(Data);
    const itemInventory = [...new Set(Data.map((Val) => Val.category))];

    const filterItem = (curcat) => {
        const newItem = Data.filter((newVal) => {
            return newVal.category === curcat;
        });
        setItem(newItem);
    };

    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-8"><h1 className="container shop-title text-center shadow">Shop List</h1></div>
            </div>
            <div className="row justify-content-center">
                
            <div className="col-md-3"><Buttons filterItem={filterItem}  setItem={setItem} itemInventory={itemInventory} /></div>
            <div className="col-md-8">
                <div className="row">
                <Card item={item} /></div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Shop;