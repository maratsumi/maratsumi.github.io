import works_data from "../data/works_data";
import Card from "./Work_Cards";
import Filter from "./Filter_Buttons";
import { useState } from "react";

const Works = () => {
  const [item, setItems] = useState(works_data);
  const menuItems = [...new Set(works_data.map((val) => val.category))];
  const filterItems = (category) => {
    const newItems = works_data.filter((val) => val.category === category);
    setItems(newItems);
  };
  return (
    <>
      <div name="works" className="w-full h-full text-gray-100 bg-[#1d2126]">
        <div className="max-w-[1150px] mx-auto p-6 flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <h1 className="text-4xl font-bold inline border-b-4 border-[#e98adf]">
              Works
            </h1>
            <h2 className="pt-6 text-xl">
              Here are some of the works I have completed.
            </h2>
          </div>
          <div className="sm:flex max-w-[1100px] block">
            <div>
              <Filter
                menuItems={menuItems}
                filterItems={filterItems}
                setItems={setItems}
              />
            </div>
            <div className="pb-6">
              <Card item={item} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
