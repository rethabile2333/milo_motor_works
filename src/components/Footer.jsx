import {
  Phone,
  Mail,
  MapPin
} from "lucide-react";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">

            <a href="#home" className="footer-logo">
              <img
                src="/milo-logo.png"
                alt="Milo Motor Works"
              />
            </a>

            <p>
              Professional automotive repair, servicing and
              mechanical solutions.
            </p>

          </div>


          {/* Quick Links */}
          <div className="footer-column">

            <h3>Quick Links</h3>

            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#gallery">Our Work</a>
            <a href="#contact">Contact</a>

          </div>


          {/* Services */}
          <div className="footer-column">

            <h3>Services</h3>

            <a href="#services">General Repairs</a>
            <a href="#services">Vehicle Servicing</a>
            <a href="#services">Diagnostics</a>
            <a href="#services">Engine Repairs</a>
            <a href="#services">Brake Services</a>

          </div>


          {/* Contact */}
          <div className="footer-column">

            <h3>Contact</h3>

            <p>
              <Phone size={17} />
              <a href="tel:+26662620909">
                +266 6262 0909
              </a>
            </p>

            <p>
              <Mail size={17} />
              <a href="mailto:ntatemilo703@gmail.com">
                ntatemilo703@gmail.com
              </a>
            </p>

            <p>
              <MapPin size={17} />
              Maseru, Lesotho
            </p>

          </div>

        </div>


        {/* Footer Bottom */}
        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Milo Motor Works.
            All rights reserved.
          </p>

          <p>
            Automotive Repair & Services
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;