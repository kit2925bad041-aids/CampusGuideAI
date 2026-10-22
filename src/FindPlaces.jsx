import React, { useState } from "react";

const places = [
  {
    name: "Central Library",
    category: "Study",
    icon: "📚",
    description: "Books, journals, and a quiet place to study.",
  },
  {
    name: "Science Laboratory",
    category: "Laboratory",
    icon: "🔬",
    description: "Laboratory facilities for science students.",
  },
  {
    name: "Main Auditorium",
    category: "Events",
    icon: "🏛️",
    description: "A place for seminars and college events.",
  },
  {
    name: "Computer Laboratory",
    category: "Laboratory",
    icon: "💻",
    description: "Computers and practical learning facilities.",
  },
  {
    name: "Cafeteria",
    category: "Food",
    icon: "🍽️",
    description: "A place to enjoy food and refreshments.",
  },
  {
    name: "Principal Office",
    category: "Office",
    icon: "🏢",
    description: "The administrative office of the principal.",
  },
];

function FindPlaces() {
  const [search, setSearch] = useState("");

  const filteredPlaces = places.filter((place) =>
    `${place.name} ${place.category}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  return (
    <div className="find-places-page">
      <section className="page-heading">
        <p className="hero-tag">CAMPUS DIRECTORY</p>
        <h1>Find Your Place</h1>
        <p>Search for campus buildings and facilities.</p>
      </section>

      <div className="place-search">
        <input
          type="text"
          placeholder="🔍 Search library, laboratory, cafeteria..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <div className="place-grid">
        {filteredPlaces.length > 0 ? (
          filteredPlaces.map((place) => (
            <div className="place-card" key={place.name}>
              <div className="place-icon">{place.icon}</div>
              <h2>{place.name}</h2>
              <span className="place-category">{place.category}</span>
              <p>{place.description}</p>
            </div>
          ))
        ) : (
          <p className="no-results">No places found. Try another search.</p>
        )}
      </div>
    </div>
  );
}

export default FindPlaces;
