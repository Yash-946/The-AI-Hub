import Customer from "./components/customer";
import Footer from "./components/footer";
import HeroSection from "./components/heroSection";
import Navbar from "./components/navbar";
import OtherSolution from "./components/othersolution";
import Premium from "./components/premium";
import Pricing from "./components/pricing";
import Testimonilas from "./components/testimonial";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <OtherSolution />
      <Customer />
      <Testimonilas />
      <Premium />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
