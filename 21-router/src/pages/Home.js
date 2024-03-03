import React from "react";
import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>
        Go to <Link to="/products"> the list of products.</Link>
      </p>
    </>
  );
}

export default HomePage;
