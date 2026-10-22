import React from "react";

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <p className="hero-tag">SMART CAMPUS NAVIGATION</p>

        <h1>
          Find Your Way Around
          <br />
          <span>CampusGuide AI</span>
        </h1>

        <p className="hero-description">
          Navigate your campus easily with smart directions. Find classrooms,
          laboratories, the library, and other important places without getting
          lost.
        </p>

        <div className="hero-buttons">
          <a href="/find-places" className="primary-btn">
            Find Places
          </a>

          <a href="/campus-map" className="secondary-btn">
            Explore Campus Map
          </a>
        </div>
      </section>

      <section className="home-info">
        <h2>Explore Your Campus</h2>

        <p>
          CampusGuide AI helps students and visitors discover campus locations
          and find their destinations easily.
        </p>

        <div className="home-cards">
          <div className="home-card">
            <h3>📍 Find Places</h3>
            <p>Search for classrooms, offices, and facilities.</p>
          </div>

          <div className="home-card">
            <h3>🗺️ Campus Map</h3>
            <p>Explore campus locations and view route details.</p>
          </div>

          <div className="home-card">
            <h3>🤖 Smart Navigation</h3>
            <p>Get simple directions to your destination.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
