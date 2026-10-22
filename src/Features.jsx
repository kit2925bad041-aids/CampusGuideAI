import React from "react";

const features = [
  {
    icon: "🧭",
    title: "Smart Navigation",
    description:
      "Help students find campus destinations with simple route information.",
  },
  {
    icon: "🔍",
    title: "Place Search",
    description:
      "Search for libraries, laboratories, offices, and other campus facilities.",
  },
  {
    icon: "🗺️",
    title: "Campus Map",
    description:
      "View campus location information and explore available route details.",
  },
  {
    icon: "⏱️",
    title: "Travel Time Estimate",
    description:
      "View sample distance and walking-time estimates for supported routes.",
  },
  {
    icon: "📱",
    title: "Student Friendly",
    description:
      "Use a simple interface designed for students, staff, and campus visitors.",
  },
  {
    icon: "🏫",
    title: "Campus Directory",
    description:
      "Access important campus locations from one convenient directory.",
  },
];

function Features() {
  return (
    <div className="features-page">
      <section className="page-heading">
        <p className="hero-tag">WHAT WE OFFER</p>
        <h1>Features of CampusGuide AI</h1>
        <p>Explore the tools that make finding campus locations easier.</p>
      </section>

      <section className="features-grid">
        {features.map((feature) => (
          <div className="feature-card" key={feature.title}>
            <div className="feature-icon">{feature.icon}</div>
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}
      </section>

      <section className="features-note">
        <h2>Our Goal</h2>
        <p>
          To make campus navigation simpler, faster, and more accessible for
          every student and visitor.
        </p>
      </section>
    </div>
  );
}

export default Features;
