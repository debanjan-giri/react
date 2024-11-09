import React from 'react'
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <p className="fs-5 text-muted">
        Oops! The page you're looking for does not exist.
      </p>
      <Link to="/" className="btn btn-primary mt-3">
        Go Back to Home
      </Link>
    </div>
  );
}

export default PageNotFound