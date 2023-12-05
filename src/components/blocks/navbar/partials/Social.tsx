import React from 'react';


const Social = () => {
  return (
    <div className="social-container"> {/* Wrap in a container */}
      <li className="nav-item mr-lg-10">
        <nav className="nav social social justify-content-end ">
          <a href="https://twitter.com/visionvertex_?t=OXDFVA6cIaTv4PgSRSEf0g&s=09">
            <i className="uil uil-twitter" />
          </a>

          <a href="https://www.facebook.com/profile.php?id=61550796133982&mibextid=ZbWKwL">
            <i className="uil uil-facebook-f" />
          </a>

          <a href="https://www.linkedin.com/posts/visionvertex-it-solutions_techsolutions-webdevelopment-softwareinnovation-activity-7137499118179876865-Z63N?utm_source=share&utm_medium=member_desktop">
            <i className="uil uil-linkedin" />
          </a>

          <a href="https://instagram.com/visionvertex_it_services?igshid=YTQwZjQ0NmI0OA==">
            <i className="uil uil-instagram" />
          </a>
        </nav>
      </li>
    </div>
  );
};

export default Social;
