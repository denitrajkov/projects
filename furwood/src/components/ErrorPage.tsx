import React from "react";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className="ErrorPage">
      <h1>Not found</h1>
      <p>
        Please go back to home. Go back to:
        <Link to="/">Homepage</Link>
      </p>
    </div>
  );
};
