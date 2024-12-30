import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [nights, setNights] = useState("");

  const handleSearch = () => {
    onSearch(query, nights);
  };

  return (
    <div style={styles.container}>
      <div style={styles.tabs}>
        <button style={styles.activeTab}>TOUR PACKAGES</button>
        <button style={styles.inactiveTab}>TRAVEL AGENTS</button>
      </div>
      <div style={styles.searchRow}>
        <input
          type="text"
          placeholder="Example: Delhi, Agra, Jaipur etc"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="No. of Nights (Optional)"
          value={nights}
          onChange={(e) => setNights(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleSearch} style={styles.searchButton}>
          SEARCH
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#003366",
    padding: "16px",
    borderRadius: "8px",
    color: "#fff",
  },
  tabs: {
    display: "flex",
    marginBottom: "16px",
  },
  activeTab: {
    flex: 1,
    backgroundColor: "#fff",
    color: "#003366",
    padding: "10px",
    border: "none",
    borderRadius: "8px 0 0 8px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  inactiveTab: {
    flex: 1,
    backgroundColor: "#003366",
    color: "#fff",
    padding: "10px",
    border: "none",
    borderRadius: "0 8px 8px 0",
    cursor: "pointer",
  },
  searchRow: {
    display: "flex",
    gap: "8px",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  searchButton: {
    backgroundColor: "#007BFF",
    color: "#fff",
    padding: "10px 16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default SearchBar;
