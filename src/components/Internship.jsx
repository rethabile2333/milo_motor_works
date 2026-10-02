import React from "react";
import {
  GraduationCap,
  Wrench,
  Settings,
  Car,
  Users,
  Award,
  Building2,
  ArrowRight,
} from "lucide-react";
import "./Internship.css";

export default function Internship() {
  const institutions = [
    "Lerotholi Polytechnic",
    "IBC College",
    "Limkokwing University of Creative Technology",
    "Other Technical & Vocational Institutions",
  ];

  const trainingAreas = [
    {
      icon: <Wrench size={30} />,
      title: "Automotive Repairs",
      text: "Students gain practical exposure to vehicle repair, maintenance and workshop procedures.",
    },
    {
      icon: <Settings size={30} />,
      title: "Vehicle Diagnostics",
      text: "Interns learn about identifying vehicle faults and applying appropriate diagnostic procedures.",
    },
    {
      icon: <Car size={30} />,
      title: "Vehicle Servicing",
      text: "Students participate in routine servicing, inspections and preventive vehicle maintenance.",
    },
    {
      icon: <Users size={30} />,
      title: "Workshop Experience",
      text: "Interns develop professional workplace skills while working alongside experienced technicians.",
    },
  ];

  return (
    <div className="internship-page">

      {/* HERO */}
      <section className="internship-hero">
        <div className="internship-hero-overlay"></div>

        <div className="internship-hero-content">
          <span className="internship-badge">
            <GraduationCap size={18} />
            INTERNSHIP & TRAINING
          </span>

          <h1>
            Building the <span>Next Generation</span> of Automotive Professionals
          </h1>

          <p>
            Milo Motor Works provides practical internship and workplace
            learning opportunities for students from technical and higher
            education institutions across Lesotho.
          </p>

          <a href="#internship-opportunities" className="internship-hero-btn">
            Explore Opportunities
            <ArrowRight size={19} />
          </a>
        </div>
      </section>

      {/* INTRO */}
      <section className="internship-intro">
        <div className="internship-container">
          <div className="internship-intro-grid">

            <div className="internship-intro-text">
              <span className="section-label">OUR COMMITMENT</span>

              <h2>
                Turning Classroom Knowledge Into
                <span> Real-World Experience</span>
              </h2>

              <p>
                At Milo Motor Works, we believe that practical experience plays
                an important role in preparing students for their future careers.
                Our internship programme gives students the opportunity to
                experience a professional automotive workshop environment while
                developing valuable technical and workplace skills.
              </p>

              <p>
                Through hands-on participation and guidance from experienced
                personnel, interns can connect what they learn in the classroom
                with real automotive work and workshop operations.
              </p>
            </div>

            <div className="internship-intro-card">
              <div className="intro-card-icon">
                <Award size={38} />
              </div>

              <h3>Learn. Experience. Grow.</h3>

              <p>
                Practical exposure designed to help students build confidence,
                technical knowledge and professional experience.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* INSTITUTIONS */}
      <section className="institutions-section">
        <div className="internship-container">

          <div className="section-heading">
            <span className="section-label">EDUCATION PARTNERS</span>

            <h2>
              Supporting Students From
              <span> Technical Institutions</span>
            </h2>

            <p>
              Milo Motor Works welcomes internship and workplace learning
              opportunities from institutions such as:
            </p>
          </div>

          <div className="institutions-grid">
            {institutions.map((institution, index) => (
              <div className="institution-card" key={index}>
                <div className="institution-icon">
                  <Building2 size={28} />
                </div>

                <div>
                  <h3>{institution}</h3>
                  <p>Internship & practical training</p>
                </div>
              </div>
            ))}
          </div>

          <div className="institution-note">
            <GraduationCap size={24} />

            <p>
              We are also open to working with other recognised technical,
              vocational and higher education institutions seeking practical
              training opportunities for their students.
            </p>
          </div>

        </div>
      </section>

      {/* TRAINING AREAS */}
      <section className="training-section" id="internship-opportunities">
        <div className="internship-container">

          <div className="section-heading">
            <span className="section-label">WHAT INTERNS CAN EXPERIENCE</span>

            <h2>
              Practical Skills For The
              <span> Automotive Industry</span>
            </h2>

            <p>
              Depending on the internship programme and academic requirements,
              students may gain exposure to areas including:
            </p>
          </div>

          <div className="training-grid">
            {trainingAreas.map((area, index) => (
              <div className="training-card" key={index}>
                <div className="training-icon">
                  {area.icon}
                </div>

                <h3>{area.title}</h3>

                <p>{area.text}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WHY MILO */}
      <section className="why-internship">
        <div className="internship-container">

          <div className="why-grid">

            <div className="why-image">
              <div className="why-image-overlay">
                <span>MI​​LO MOTOR WORKS</span>
                <h2>
                  Experience The
                  <strong> Workshop.</strong>
                </h2>
              </div>
            </div>

            <div className="why-content">
              <span className="section-label">WHY MILO MOTOR WORKS?</span>

              <h2>
                More Than an Internship.
                <span> It's Experience.</span>
              </h2>

              <p>
                Our internship environment allows students to observe,
                participate and learn in a real automotive workshop.
              </p>

              <div className="why-list">
                <div>
                  <Award size={22} />
                  <span>Hands-on practical experience</span>
                </div>

                <div>
                  <Wrench size={22} />
                  <span>Exposure to real automotive work</span>
                </div>

                <div>
                  <Users size={22} />
                  <span>Professional workplace environment</span>
                </div>

                <div>
                  <GraduationCap size={22} />
                  <span>Support for student learning and development</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="internship-cta">
        <div className="internship-container">

          <div className="cta-content">
            <span className="section-label">INTERNSHIP OPPORTUNITIES</span>

            <h2>
              Ready to Gain
              <span> Practical Experience?</span>
            </h2>

            <p>
              Institutions and students interested in internship or workplace
              learning opportunities are welcome to contact Milo Motor Works
              to discuss available opportunities and requirements.
            </p>

            <a href="/contact" className="internship-cta-btn">
              Contact Milo Motor Works
              <ArrowRight size={19} />
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
