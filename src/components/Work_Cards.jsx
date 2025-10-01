import React from "react";

function Work_Cards({ item }) {
  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center">
        {item.map((val) => (
          <div key={val.id}>
            <div
              style={{ backgroundImage: `url(${val.img})` }}
              className="group h-60 hover:scale-105 transition ease-out duration-250 shadow-lg shadow-[#040c16] rounded-md flex justify-center items-start mx-auto text-center bg-no-repeat bg-cover bg-center content-div"
            >
              <div
                id="cardContent"
                className="opacity-0 transition ease-in duration-150 p-3 m-auto"
              >
                <h1 className="text-xl font-bold text-gray-100 tracking-wider pointer-events-none">
                  {val.title}
                </h1>
                <p className="text-sm text-gray-100 tracking-wider pointer-events-none">
                  {val.desc}
                </p>
                <div className="pt-2">
                  <a href={val.link} target="_blank" rel="noreferrer">
                    <button className="rounded-2xl border-2 border-gray-100 px-6 py-1 hover:bg-gray-100 hover:text-slate-800 hover:bg-opacity-90 hover:shadow-sm transition ease-in-out duration-150">
                      {val.category}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Work_Cards;
