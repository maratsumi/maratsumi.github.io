import React, { useState, useEffect } from "react";
import { PuffLoader } from "react-spinners";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import Work from "./components/Work";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="Intro bg-[#1a1d20] flex justify-center items-center w-full h-screen transition-all duration-500">
          <PuffLoader size={100} color={"#fa52b0"} loading={loading} />
        </div>
      ) : (
        <header>
          <title>♡ Shio / Maratsumi ♡</title>
          <Navbar />
          <Home />
          <About />
          <Work />
          <Socials />
          <footer
            className="bg-[#1f2429] text-gray-200 pl-1 text-sm"
            unselectable="on"
          >
            Maratsumi © 2022
          </footer>
        </header>
      )}
    </div>
  );
}

export default App;
