import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";

import Tech from "./Components/Tech";
import AnimatedCursor from "react-animated-cursor";
import Feedbacks from "./Components/Feedbacks";
import Contact from "./Components/Contact";

import Works from "./Components/Works";

// import {
//   About,
//   Contact,
//   Experience,
//   Projects,
//   Feedbacks,
//   Hero,
//   Navbar,
//   Tech,
//   Stacks,
//   Works,
//   StarsCanvas,
// } from "./Components";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <AnimatedCursor
          innerSize={32} // Increase inner size for better visibility
          outerSize={16} // Increase outer size for a bolder effect
          color="255, 255, 255" // Change color to a vibrant pink
          outerAlpha={0.5} // Adjust outer alpha for a semi-transparent effect
          innerScale={0.8} // Slightly reduce inner scale for a sleeker look
          outerScale={4}
          trailingSpeed={12} // Increase outer scale for a more pronounced effect
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />

        <div className="  bg-center bg-cover bg-hero-pattern bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        <About />

        <Tech />
        <Works />

        <Feedbacks />
        <div className="z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
