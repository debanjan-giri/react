import React from 'react'
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center">
      <h1 className="display-4 fw-bold text-danger">Something went wrong!</h1>
      <p className="fs-6 text-muted">
        An error has occurred. Please try again later or return to the home
        page.
      </p>
      <Link to="/" className="btn btn-primary mt-3">
        Go Back to Home
      </Link>
    </div>
  );
}

export default Error404