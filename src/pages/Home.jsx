// components
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Furnitures from "../components/Home/Furnitures";
import WhyUs from "../components/Home/WhyUs";

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
