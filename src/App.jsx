import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Interships from "./components/Internship";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Interships />
        <Gallery />
        <WhyChooseUs />
        <Contact />
      </main>

      <Footer />

      <a
        href="https://wa.me/26662620909"
        className="whatsapp-button"
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>
    </>
  );
}

export default App;