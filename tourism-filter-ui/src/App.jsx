import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import PackageList from "./components/PackageList";

const App = () => {
  const defaultPackages = [
    {
      name: "Delhi Tour",
      description: "Explore the historical monuments and vibrant markets of Delhi.",
      price: "$200",
    },
    {
      name: "Agra Tour",
      description: "Visit the majestic Taj Mahal and other Mughal-era landmarks in Agra.",
      price: "$150",
    },
    {
      name: "Jaipur Tour",
      description: "Experience the charm of the Pink City with its forts and palaces.",
      price: "$180",
    },
    {
      name: "Manali Tour",
      description: "Enjoy the serene beauty of the mountains in Manali.",
      price: "$250",
    },
    {
      name: "Goa Tour",
      description: "Relax on the beaches and explore the nightlife in Goa.",
      price: "$300",
    },
  ];

  const [packages, setPackages] = useState(defaultPackages);

  const handleSearch = (query, nights) => {
    const filtered = defaultPackages.filter((pkg) =>
      pkg.name.toLowerCase().includes(query.toLowerCase())
    );
    setPackages(filtered);
  };

  return (
    <div style={styles.heroSection}>
      <div style={styles.overlay}>
        <div style={styles.contentContainer}>
          <h1 style={styles.heading}>Discover Your Next Adventure</h1>
          <p style={styles.subheading}>Find the best travel packages tailored just for you.</p>
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>
      <div style={styles.packageSection}>
        <h2 style={styles.packageHeading}>Popular Packages</h2>
        <PackageList packages={packages} />
      </div>
    </div>
  );
};

const styles = {
  heroSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&w=1920&h=1080&fit=max')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
    height: "100vh",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    textAlign: "center",
    padding: "32px",
    borderRadius: "8px",
  },
  heading: {
    fontSize: "3rem",
    marginBottom: "16px",
    fontWeight: "bold",
  },
  subheading: {
    fontSize: "1.5rem",
    marginBottom: "24px",
  },
  packageSection: {
    backgroundColor: "#f7f7f7",
    padding: "32px 16px",
    textAlign: "center",
  },
  packageHeading: {
    fontSize: "2rem",
    marginBottom: "16px",
    color: "#333",
  },
};

export default App;