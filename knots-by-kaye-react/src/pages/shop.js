import React, { useState } from "react";
import Items from "./Data";
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
                <h1 className="col-12 text-center">Shop List</h1>
                <Buttons filterItem={filterItem}  setItem={setItem} itemInventory={itemInventory} />
                <Card item={item} />
            </div>
        </div>
        </>
    );
};

export default Shop;