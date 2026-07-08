import React from 'react';
import './Projects.css'; 

const Projects = () => {
  return (
    <>
    <section className="Projects">
      {/* Container wrapper for the grid items */}
      <div className="Projects-container">
        
        {/* Project Card 1: Fintech */}
        <div className="projects-name">
          <div className="card">
            <div className="card-header">
              <img src="https://img.magnific.com/free-vector/online-banking-isometric-round-composition_1284-29555.jpg" alt="online banking" />
            </div>
            <div className="card-body">
              Fintech Website
            </div>
            <div className="card-footer">
              <a href="#view-details">View Details</a>
            </div>
          </div>
        </div>

        {/* Project Card 2: Astrology */}
        <div className="projects-name">
          <div className="card">
            <div className="card-header">
              <img src="https://img.magnific.com/free-vector/zodiac-circle-with-horoscope-signs-fish-pisces-scorpio-aquarius-zodiak-aries-virgo-vector-illustration_1284-46992.jpg" alt="astrology" />
            </div>
            <div className="card-body">
              Astrology Website
            </div>
            <div className="card-footer">
              <a href="#view-details">View Details</a>
            </div>
          </div>
        </div>

        {/* Project Card 3: IT */}
        <div className="projects-name">
          <div className="card">
            <div className="card-header">
              <img src="https://img.magnific.com/free-vector/flat-design-minimalistic-technology-landing-page_23-2149107139.jpg" alt="IT" />
            </div>
            <div className="card-body">
              IT Website
            </div>
            <div className="card-footer">
              <a href="#view-details">View Details</a>
            </div>
          </div>
        </div>

      </div> {/* 👈 Fixed: Added the missing closing div for .Projects-container */}
    </section>
    </>
  );
};

export default Projects;