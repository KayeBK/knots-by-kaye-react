import React from "react";
import Data from "./Data";
import "./styles/buttons.css";

const Buttons = ({ filterItem, setItem, itemInventory }) => {
    return (
        <>
          <div className="Buttons shadow">
            {itemInventory.map((Val, id) => {
              return (

                <button
                  className="p-2 shop-buttons"
                  onClick={() => filterItem(Val)}
                  key={id}
                >
                  {Val}
                </button>

              );
            })}
            <hr />
            <button
              className="p-3 shop-buttons"
              onClick={() => setItem(Data)}
            >
              Show All
            </button>

           </div>
        </>
      );
};

export default Buttons;