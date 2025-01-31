import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import Work from "./components/Work";

function App() {
  return (
    <div>
      <title>Programming Portfolio</title>
      <Navbar />
      <Home />
      <About />
      <Work />
      <Socials />
      <footer
        className="bg-[#1f2429] text-gray-200 pl-1 text-sm"
        unselectable="on"
      >
        Angelo Vitug © 2025
      </footer>
    </div>
  );
}

export default App;
