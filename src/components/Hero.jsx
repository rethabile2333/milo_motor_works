import { ArrowRight, Phone, Wrench } from "lucide-react";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <div className="hero-badge">
          <Wrench size={16} />
          AUTOMOTIVE REPAIR & SERVICES
        </div>

        <h1>
          Keeping Your
          <span> Vehicle Moving.</span>
        </h1>

        <p>
          Professional automotive repairs, servicing and mechanical
          solutions you can rely on. Welcome to Milo Motor Works.
        </p>

        <div className="hero-buttons">

          <a href="#services" className="primary-button">
            Explore Our Services
            <ArrowRight size={19} />
          </a>

          <a href="#contact" className="secondary-button">
            <Phone size={18} />
            Contact Us
          </a>

        </div>

        <div className="hero-stats">

          <div>
            <strong>Quality</strong>
            <span>Workmanship</span>
          </div>

          <div>
            <strong>Reliable</strong>
            <span>Service</span>
          </div>

          <div>
            <strong>Customer</strong>
            <span>Focused</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;