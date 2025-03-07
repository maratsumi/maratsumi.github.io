import React from "react";
import works_data from "../data/works_data";

function Filter_Buttons({ menuItems, filterItems, setItems }) {
  return (
    <div className="sm:flex-col sm:text-left sm:justify-start sm:gap-10 sm:text-xl font-bold shadow flex justify-between text-center sm:pr-10 pb-10">
      {menuItems.map((val) => (
        <button className="btn bg-pink-600" onClick={() => filterItems(val)}>
          {val}
        </button>
      ))}
      <button className="btn bg-pink-600" onClick={() => setItems(works_data)}>
        Show All
      </button>
    </div>
  );
}

export default Filter_Buttons;
