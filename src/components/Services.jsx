import {
  Car,
  Settings,
  Search,
  Battery,
  Disc,
  Gauge,
  Wrench,
  Cog,
  Paintbrush
} from "lucide-react";

const services = [
  {
    icon: <Wrench />,
    title: "General Repairs",
    description:
      "Professional mechanical repairs for common vehicle problems."
  },

  {
    icon: <Settings />,
    title: "Vehicle Servicing",
    description:
      "Routine servicing designed to keep your vehicle performing properly."
  },

  {
    icon: <Search />,
    title: "Diagnostics",
    description:
      "Vehicle inspection and fault diagnosis to identify mechanical issues."
  },

  {
    icon: <Cog />,
    title: "Engine Repairs",
    description:
      "Engine inspection, maintenance and repair solutions."
  },

  {
    icon: <Disc />,
    title: "Brake Services",
    description:
      "Brake inspection, maintenance and replacement services."
  },

  {
    icon: <Battery />,
    title: "Battery Services",
    description:
      "Battery inspection, replacement and related electrical checks."
  },

  {
    icon: <Gauge />,
    title: "Performance Checks",
    description:
      "Vehicle checks to identify issues affecting performance."
  },

  {
    icon: <Car />,
    title: "Automotive Support",
    description:
      "General automotive assistance for vehicle owners."
  },

  {
    icon: <Paintbrush />,
    title: "Vehicle Painting",
    description:
      "Professional vehicle painting and bodywork services to restore and refresh your vehicle's appearance."
  }
];

function Services() {
  return (
    <section className="section services" id="services">

      <div className="container">

        <div className="section-heading center">

          <span className="section-label">
            WHAT WE DO
          </span>

          <h2>
            Our Automotive
            <span> Services</span>
          </h2>

          <p>
            From routine maintenance and mechanical repairs to
            vehicle painting, Milo Motor Works provides a range
            of automotive services for vehicle owners.
          </p>

        </div>

        <div className="services-grid">

          {services.map((service, index) => (

            <div
              className="service-card"
              key={index}
            >

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>
                {service.title}
              </h3>

              <p>
                {service.description}
              </p>

              <a href="#contact">
                Learn More →
              </a>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;