import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send
} from "lucide-react";

function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the form values
    const formData = new FormData(e.target);

    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const vehicle = formData.get("vehicle");
    const problem = formData.get("problem");

    // Create WhatsApp message
    const message = `Hello Milo Motor Works,

I would like to enquire about your automotive services.

Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}
Vehicle: ${vehicle || "Not provided"}

How can you help:
${problem}

Thank you.`;

    // WhatsApp number
    const whatsappNumber = "26662620909";

    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="section contact" id="contact">

      <div className="container">

        <div className="section-heading center">

          <span className="section-label">
            CONTACT US
          </span>

          <h2>
            Let's Get Your
            <span> Vehicle Moving</span>
          </h2>

          <p>
            Have a vehicle that needs attention? Get in touch
            with Milo Motor Works today.
          </p>

        </div>

        <div className="contact-grid">

          <div className="contact-information">

            {/* Phone */}
            <div className="contact-card">

              <div className="contact-icon">
                <Phone />
              </div>

              <div>
                <span>Call Us</span>

                <a href="tel:+26653882100">
                  +266 5388 2100
                </a>
              </div>

            </div>

            {/* WhatsApp */}
            <div className="contact-card">

              <div className="contact-icon">
                <MessageCircle />
              </div>

              <div>
                <span>WhatsApp</span>

                <a
                  href="https://wa.me/26662620909"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat With Us
                </a>
              </div>

            </div>

            {/* Email */}
            <div className="contact-card">

              <div className="contact-icon">
                <Mail />
              </div>

              <div>
                <span>Email</span>

                <a href="mailto:ntatemilo703@gmail.com">
                  ntatemilo703@gmail.com
                </a>
              </div>

            </div>

            {/* Workshop */}
            <div className="contact-card">

              <div className="contact-icon">
                <MapPin />
              </div>

              <div>
                <span>Workshop</span>

                <p>
                  Qacha's Nek, Leropong
                  <br />
                  Maseru, Ha 'Masana
                </p>
              </div>

            </div>

            {/* Business Hours */}
            <div className="contact-card">

              <div className="contact-icon">
                <Clock />
              </div>

              <div>
                <span>Business Hours</span>

                <p>
                  Monday - Friday: 08:00 - 17:00
                  <br />
                  Saturday: 08:00 - 13:00
                  <br />
                  Sunday: Closed
                </p>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <h3>Send Us a Message</h3>

            <p>
              Tell us what your vehicle needs and we'll get
              back to you.
            </p>

            <div className="form-group">

              <label>Your Name</label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />

            </div>

            <div className="form-group">

              <label>Phone Number</label>

              <input
                type="tel"
                name="phone"
                placeholder="+266 XX XX XXXX"
                required
              />

            </div>

            <div className="form-group">

              <label>Email</label>

              <input
                type="email"
                name="email"
                placeholder="your@email.com"
              />

            </div>

            <div className="form-group">

              <label>Vehicle</label>

              <input
                type="text"
                name="vehicle"
                placeholder="e.g. Toyota Hilux 2018"
              />

            </div>

            <div className="form-group">

              <label>How can we help?</label>

              <textarea
                name="problem"
                rows="5"
                placeholder="Describe the problem with your vehicle..."
                required
              ></textarea>

            </div>

            <button
              type="submit"
              className="submit-button"
            >
              Send Message
              <Send size={18} />
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;