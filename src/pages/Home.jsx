// components
import Hero from "./Home/Hero";
import About from "./Home/About";
import Furnitures from "./Home/Furnitures";
import WhyUs from "./Home/WhyUs";

function Home() {
  return (
    <div className="container">
      <Hero />
      <About />
      <Furnitures />
      <WhyUs />
    </div>
  );
}

export default Home;
