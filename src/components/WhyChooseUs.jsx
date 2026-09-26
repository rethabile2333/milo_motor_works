import {
  ShieldCheck,
  Clock,
  Award,
  MessageCircle
} from "lucide-react";

const reasons = [
  {
    icon: <ShieldCheck />,
    title: "Reliable Service",
    text:
      "We focus on providing dependable automotive repair and maintenance services."
  },

  {
    icon: <Award />,
    title: "Quality Work",
    text:
      "Our focus is on practical solutions and quality workmanship."
  },

  {
    icon: <Clock />,
    title: "Convenient",
    text:
      "Contact us to discuss your vehicle and arrange the service you need."
  },

  {
    icon: <MessageCircle />,
    title: "Clear Communication",
    text:
      "We keep customers informed about their vehicle and the work being carried out."
  }
];

function WhyChooseUs() {
  return (
    <section className="section why-us">

      <div className="container">

        <div className="section-heading center">

          <span className="section-label">
            WHY CHOOSE MILO MOTOR WORKS
          </span>

          <h2>
            Automotive Service
            <span> You Can Rely On</span>
          </h2>

        </div>

        <div className="reasons-grid">

          {reasons.map((reason, index) => (

            <div className="reason-card" key={index}>

              <div className="reason-icon">
                {reason.icon}
              </div>

              <h3>{reason.title}</h3>

              <p>{reason.text}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;