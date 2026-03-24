import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Works from "./components/Works";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <title>Gelo Portfolio</title>
        <Navbar />
        <Home />
        <About />
        <Works />
        <footer
          className="bg-[#1f2429] text-gray-200 pl-1 text-sm"
          unselectable=""
        >
          © 2026. All Rights Reserved.
        </footer>
      </div>
    </>
  );
}

export default App;
