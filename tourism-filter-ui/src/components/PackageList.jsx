import React from "react";

const PackageList = ({ packages }) => {
  return (
    <div style={styles.container}>
      {packages.map((pkg, index) => (
        <div key={index} style={styles.card}>
          <h3 style={styles.title}>{pkg.name}</h3>
          <p style={styles.description}>{pkg.description}</p>
          <p style={styles.price}>{pkg.price}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    gap: "16px", // Space between cards
    overflowX: "auto", // Enables horizontal scrolling
    padding: "16px",
    scrollbarWidth: "thin", // For better scrollbar appearance
    scrollBehavior: "smooth", // Smooth scrolling
  },
  card: {
    minWidth: "300px",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    padding: "16px",
    flexShrink: 0, // Prevents cards from shrinking
  },
  title: {
    fontSize: "1.5rem",
    marginBottom: "8px",
    color: "#003366",
  },
  description: {
    fontSize: "1rem",
    marginBottom: "8px",
  },
  price: {
    fontWeight: "bold",
    color: "#009688",
  },
};

export default PackageList;
