import React from "react";
import "../styles/services.css";
import service1 from "../assets/service-1.jpg";
import service2 from "../assets/service-2.jpg";
import {
  FaBreadSlice,
  FaBirthdayCake,
  FaCartPlus,
  FaTruck,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      id: 1,
      icon: <FaBreadSlice />,
      title: "Quality Products",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, ut!",
    },
    {
      id: 2,
      icon: <FaBirthdayCake />,
      title: "Custom Products",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, ut!",
    },
    {
      id: 3,
      icon: <FaCartPlus />,
      title: "Online Order",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, ut!",
    },
    {
      id: 4,
      icon: <FaTruck />,
      title: "Home Delivery",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, ut!",
    },
  ];

  return (
    <section className="services">
      <div className="services-text">
        <p className="tag">// Our Services</p>
        <h1>What Do We Offer For You?</h1>
        <p>
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
          lorem sit clita duo justo magna dolore erat amet
        </p>
        <div className="service-list">
          {services.map((s) => (
            <div key={s.id} className="service-item">
              <div className="heading">
                <div className="icon">{s.icon}</div>
                <h5 className="title">{s.title}</h5>
              </div>
              <h5 className="title">{s.description}</h5>
            </div>
          ))}
        </div>
      </div>
      <div className="services-images">
        {/* <div className="under"></div> */}
        <img src={service1} alt="Service 1" className="img1" />
        <img src={service2} alt="Service 2" className="img2" />
      </div>
    </section>
  );
}
