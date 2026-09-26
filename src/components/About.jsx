import { useEffect, useState } from "react";
import {
  CheckCircle,
  Car,
  Settings,
  Users
} from "lucide-react";

function About() {

  // Images for the slideshow
  const images = [
    "/milo.jpeg",
    "/milo2.jpeg",
    "/milo3.jpeg",
    "/milo4.jpeg",
    "/milo5.jpeg",
    "/milo6.jpeg",
    "/milo7.jpeg",
    "/milo8.jpeg",
    "/milo9.jpeg",
    "/milo10.jpeg",
    "/milo11.jpeg",
    "/milo12.jpeg",
    "/milo13.jpeg",
    "/milo14.jpeg",
    "/milo15.jpeg",
    "/milo16.jpeg",
    "/milo17.jpeg",
    "/milo18.jpeg",
    "/milo19.jpeg",
    "/milo20.jpeg",
    "/milo21.jpeg",
    "/milo22.jpeg",
    "/milo23.jpeg",
    "/milo24.jpeg",
    "/milo25.jpeg",
    "/milo26.jpeg",
    "/milo27.jpeg",
    "/milo28.jpeg",
    "/milo29.jpeg",
    "/milo30.jpeg"
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Change image every 10 seconds
  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentImage((previousImage) =>
        (previousImage + 1) % images.length
      );

    }, 10000);

    // Clear interval when component is removed
    return () => clearInterval(interval);

  }, [images.length]);


  return (
    <section className="section about" id="about">

      <div className="container">

        {/* Section Heading */}
        <div className="section-heading">

          <span className="section-label">
            ABOUT US
          </span>

          <h2>
            Built Around
            <span> Quality Automotive Work</span>
          </h2>

        </div>


        {/* About Content */}
        <div className="about-grid">


          {/* IMAGE SLIDESHOW */}
          <div className="about-image">

            <img
              key={currentImage}
              src={images[currentImage]}
              alt={`Milo Motor Works workshop ${currentImage + 1}`}
            />

            <div className="about-image-card">

              <strong>
                Milo Motor Works
              </strong>

              <span>
                Automotive Specialists
              </span>

            </div>

          </div>


          {/* ABOUT TEXT */}
          <div className="about-content">

            <h3>
              Your Vehicle Deserves Professional Care
            </h3>

            <p>
              Milo Motor Works is an automotive repair and
              service business focused on keeping vehicles
              safe, reliable and road-ready.
            </p>

            <p>
              From routine servicing and mechanical repairs
              to diagnostics and general automotive
              maintenance, our goal is to provide practical
              solutions and quality workmanship for every
              vehicle that comes through our workshop.
            </p>


            {/* Features */}
            <div className="about-features">

              <div className="about-feature">
                <CheckCircle size={20} />
                <span>
                  Quality workmanship
                </span>
              </div>

              <div className="about-feature">
                <CheckCircle size={20} />
                <span>
                  Reliable automotive services
                </span>
              </div>

              <div className="about-feature">
                <CheckCircle size={20} />
                <span>
                  Customer-focused service
                </span>
              </div>

              <div className="about-feature">
                <CheckCircle size={20} />
                <span>
                  Practical repair solutions
                </span>
              </div>

            </div>

          </div>

        </div>


        {/* INFO CARDS */}
        <div className="about-cards">

          <div className="info-card">

            <Car size={30} />

            <h3>
              Vehicle Repairs
            </h3>

            <p>
              Professional solutions for a wide range
              of automotive problems.
            </p>

          </div>


          <div className="info-card">

            <Settings size={30} />

            <h3>
              Maintenance
            </h3>

            <p>
              Regular maintenance to help keep your
              vehicle running properly.
            </p>

          </div>


          <div className="info-card">

            <Users size={30} />

            <h3>
              Customer Care
            </h3>

            <p>
              We focus on clear communication and
              dependable customer service.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;