import React from 'react';
import "./Skills.css"
const Skills = () => {
  return (
    <>
    <section className="skills">
      <h2 className="align">Skills</h2>
      <div className="skills-container">

        {/* Card 1: HTML 5 */}
        <div className="skill-card">
          <div className="skill-icon-wrap">
            <i className="fa-brands fa-html5"></i>
          </div>
          <div className="skill-name">HTML 5</div>
        </div>

        {/* Card 2: CSS */}
        <div className="skill-card">
          <div className="skill-icon-wrap">
            <i className="fa-brands fa-css3-alt"></i>
          </div>
          <div className="skill-name">css</div>
        </div>

        {/* Card 3: JavaScript */}
        <div className="skill-card">
          <div className="skill-icon-wrap">
            <i className="fa-brands fa-js"></i>
          </div>
          <div className="skill-name">JavaScript</div>
        </div>

        {/* Card 4: Bootstrap */}
        <div className="skill-card">
          <div className="skill-icon-wrap">
            <i className="fa-brands fa-bootstrap"></i>
          </div>
          <div className="skill-name">Bootstrap</div>
        </div>

        {/* Card 5: jQuery */}
        <div className="skill-card">
          <div className="skill-icon-wrap">
            <i className="fa-solid fa-code"></i>
          </div>
          <div className="skill-name">jQuery</div>
        </div>

        {/* Card 6: React JS */}
        <div className="skill-card">
          <div className="skill-icon-wrap">
            <i className="fa-brands fa-react"></i>
          </div>
          <div className="skill-name">React JS</div>
        </div>

        {/* Card 7: Node JS */}
        <div className="skill-card">
          <div className="skill-icon-wrap">
            <i className="fa-brands fa-node-js"></i>
          </div>
          <div className="skill-name">Node JS</div>
        </div>

        {/* Card 8: Express JS */}
        <div className="skill-card">
          <div className="skill-icon-wrap">
            <i className="fa-solid fa-server"></i>
          </div>
          <div className="skill-name">Express JS</div>
        </div>

        {/* Card 9: MongoDB */}
        <div className="skill-card">
          <div className="skill-icon-wrap">
            <i className="fa-solid fa-database"></i>
          </div>
          <div className="skill-name">MongoDb</div>
        </div>

      </div>
    </section>
    </>
  );
};

export default Skills;