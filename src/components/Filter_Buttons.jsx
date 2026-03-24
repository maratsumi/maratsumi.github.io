import React from "react";
import works_data from "../data/works_data";

function Filter_Buttons({ menuItems, filterItems, setItems }) {
  return (
    <div className="sm:flex-col sm:text-left sm:justify-start sm:gap-5 sm:text-xl font-bold sm:flex block justify-between text-center sm:mr-5 pb-10">
      <h1 className="sm:pb-0 pb-3 text-2xl">Filter:</h1>
      <button
        className="rounded-2xl border-2 border-gray-100 sm:px-6 px-2 py-1 m-1 hover:bg-gray-100 hover:text-slate-800 hover:bg-opacity-90 hover:shadow-sm focus:bg-gray-100 focus:text-slate-800 focus:bg-opacity-90 focus:shadow-sm transition ease-in-out duration-150"
        onClick={() => setItems(works_data)}
      >
        Show All
      </button>
      {menuItems.map((val) => (
        <button
          className="rounded-2xl border-2 border-gray-100 sm:px-6 px-2 py-1 m-1 hover:bg-gray-100 hover:text-slate-800 hover:bg-opacity-90 focus:shadow-sm focus:bg-gray-100 focus:text-slate-800 focus:bg-opacity-90 focus:shadow-sm transition ease-in-out duration-150"
          onClick={() => filterItems(val)}
        >
          {val}
        </button>
      ))}
    </div>
  );
}

export default Filter_Buttons;
