import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Milo Motor Works Logo + Tagline */}
        <a href="#home" className="logo" onClick={closeMenu}>
          <img
            src="/milo-logo.png"
            alt="Milo Motor Works"
          />

          <div className="logo-tagline">
            <strong>Automotive Excellence</strong>
            <span>Repairs • Service • Solutions</span>
          </div>
        </a>

        {/* Navigation Links */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#services" onClick={closeMenu}>
            Services
          </a>

           <a href="#internships" onClick={closeMenu}>
            Internships
          </a>

          <a href="#gallery" onClick={closeMenu}>
            Our Work
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </div>

        {/* Get In Touch Button */}
        <a
          href="#contact"
          className="nav-button"
          onClick={closeMenu}
        >
          Get In Touch
        </a>

        {/* Mobile Menu Button */}
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>

      </div>
    </nav>
  );
}

export default Navbar;