import React from "react";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import Work from "./components/Work";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Work />
      <Socials />
    </div>
  );
}

export default App;
