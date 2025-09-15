import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>
        Home
      </Link>
    </nav>
  );
}

const navStyle = {
  backgroundColor: "#3498db",
  padding: "10px 20px",
  display: "flex",
  alignItems: "center",
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: 18,
};

export default Navbar;
