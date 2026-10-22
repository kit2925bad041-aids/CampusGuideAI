import React, { useState } from "react";
import "./App.css";

const places = [
  { name: "Main Entrance", x: 9, y: 52, icon: "🚪" },
  { name: "Central Library", x: 34, y: 23, icon: "📚" },
  { name: "Science Laboratory", x: 66, y: 20, icon: "🔬" },
  { name: "Main Auditorium", x: 87, y: 49, icon: "🏛️" },
  { name: "Computer Laboratory", x: 63, y: 72, icon: "💻" },
  { name: "Cafeteria", x: 36, y: 77, icon: "🍽️" },
  { name: "Principal Office", x: 86, y: 83, icon: "🏢" },
];

const roads = [
  [9, 52, 34, 23],
  [34, 23, 66, 20],
  [66, 20, 87, 49],
  [9, 52, 36, 77],
  [36, 77, 63, 72],
  [63, 72, 87, 49],
  [63, 72, 86, 83],
  [34, 23, 36, 77],
  [66, 20, 63, 72],
];

export default function CampusMap() {
  const [start, setStart] = useState("Main Entrance");
  const [end, setEnd] = useState("Central Library");

  const source = places.find((p) => p.name === start);
  const destination = places.find((p) => p.name === end);

  const route = [
    [source.x, source.y],
    [(source.x + destination.x) / 2, (source.y + destination.y) / 2],
    [destination.x, destination.y],
  ];

  const distance = Math.round(
    Math.hypot(destination.x - source.x, destination.y - source.y) * 3,
  );

  return (
    <main className="campus-map-page real-map-page">
      <div className="map-page-heading">
        <span className="map-eyebrow">SMART CAMPUS NAVIGATION</span>
        <h1>Explore Your Campus 🗺️</h1>
        <p>Choose your starting point and destination to view the route.</p>
      </div>

      <section className="map-route-controls">
        <div className="map-select-field">
          <label>📍 Starting Point</label>
          <select value={start} onChange={(e) => setStart(e.target.value)}>
            {places.map((place) => (
              <option key={place.name} value={place.name}>
                {place.name}
              </option>
            ))}
          </select>
        </div>

        <button
          className="map-switch-button"
          onClick={() => {
            setStart(end);
            setEnd(start);
          }}
          aria-label="Swap start and destination"
        >
          ⇄
        </button>

        <div className="map-select-field">
          <label>🏁 Destination</label>
          <select value={end} onChange={(e) => setEnd(e.target.value)}>
            {places.map((place) => (
              <option key={place.name} value={place.name}>
                {place.name}
              </option>
            ))}
          </select>
        </div>
      </section>

      {start === end ? (
        <p className="map-warning">Please select two different locations.</p>
      ) : (
        <section className="interactive-map-card">
          <div className="map-card-header">
            <div>
              <h2>Campus Route Map</h2>
              <p>Illustrative campus layout</p>
            </div>
            <span className="map-live-badge">● Route selected</span>
          </div>

          <div className="campus-map-canvas">
            <div className="map-green-area green-one" />
            <div className="map-green-area green-two" />
            <div className="map-pond">
              💧
              <br />
              Pond
            </div>

            <svg
              className="campus-road-svg"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-label={`Illustrative route from ${start} to ${end}`}
            >
              {roads.map((road, index) => (
                <line
                  key={index}
                  x1={road[0]}
                  y1={road[1]}
                  x2={road[2]}
                  y2={road[3]}
                  className="campus-road"
                />
              ))}

              <line
                x1={source.x}
                y1={source.y}
                x2={destination.x}
                y2={destination.y}
                className="selected-route-line"
              />
            </svg>

            {places.map((place) => {
              const isStart = place.name === start;
              const isEnd = place.name === end;

              return (
                <div
                  key={place.name}
                  className={`map-place-marker ${
                    isStart ? "start-marker" : ""
                  } ${isEnd ? "end-marker" : ""}`}
                  style={{ left: `${place.x}%`, top: `${place.y}%` }}
                  title={place.name}
                >
                  <span className="map-pin">
                    {isStart ? "🟢" : isEnd ? "🏁" : place.icon}
                  </span>
                  <span className="map-place-label">{place.name}</span>
                </div>
              );
            })}
          </div>

          <div className="map-legend">
            <span>
              <i className="legend-green" /> Starting point
            </span>
            <span>
              <i className="legend-red" /> Destination
            </span>
            <span>
              <i className="legend-blue" /> Selected route
            </span>
          </div>

          <div className="map-directions-summary">
            <div className="walking-directions">
              <h3>🧭 Directions</h3>

              <div className="walking-step">
                <span>1</span>
                <p>
                  Start at <strong>{start}</strong>.
                </p>
              </div>

              <div className="walking-step">
                <span>2</span>
                <p>Follow the highlighted purple route on the map.</p>
              </div>

              <div className="walking-step">
                <span>3</span>
                <p>
                  Continue towards <strong>{end}</strong>.
                </p>
              </div>

              <div className="walking-step final-step">
                <span>✓</span>
                <p>
                  You have reached <strong>{end}</strong>!
                </p>
              </div>
            </div>

            <div className="direction-icon">🧭</div>
            <div className="direction-text">
              <span>YOUR ROUTE</span>
              <strong>
                {start} → {end}
              </strong>
              <p>Follow the highlighted line on the illustrative map.</p>
            </div>
            <div className="direction-stats">
              <strong>~{distance * 10} m</strong>
              <span>Sample distance</span>
            </div>
          </div>

          <p className="map-disclaimer">
            Note: This is a sample visual route, not a measured walking path.
            Actual distance and directions require a real campus map.
          </p>
        </section>
      )}

      <section className="map-location-list">
        <h2>Campus Locations</h2>
        <div className="map-location-grid">
          {places.map((place, index) => (
            <button
              key={place.name}
              className="map-location-chip"
              onClick={() => {
                setStart(end);
                setEnd(place.name);
              }}
            >
              <span>{place.icon}</span>
              <span>{place.name}</span>
              <small>{String(index + 1).padStart(2, "0")}</small>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
