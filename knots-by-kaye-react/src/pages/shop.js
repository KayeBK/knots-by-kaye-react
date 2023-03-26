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
            <h1 className="text-center">Shop List</h1>
            <div className="row justify-content-center">
                
            <div className="col-2"><Buttons filterItem={filterItem}  setItem={setItem} itemInventory={itemInventory} /></div>
            <div className="col-10">
                <div className="row">
                <Card item={item} /></div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Shop;