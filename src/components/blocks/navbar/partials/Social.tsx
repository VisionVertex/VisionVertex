import React from 'react';


const Social = () => {
  return (
    <div className="social-container"> {/* Wrap in a container */}
      <li className="nav-item">
        <nav className="nav social social justify-content-end text-end">
          <a href="#">
            <i className="uil uil-twitter" />
          </a>

          <a href="#">
            <i className="uil uil-facebook-f" />
          </a>

          <a href="#">
            <i className="uil uil-linkedin" />
          </a>

          <a href="#">
            <i className="uil uil-instagram" />
          </a>
        </nav>
      </li>
    </div>
  );
};

export default Social;
