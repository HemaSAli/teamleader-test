import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="teamleader-container">
      <Link to="/orders">
        Hi =),
        Click to go to orders page =)
      </Link>
    </div>
  );
}

export default HomePage;
