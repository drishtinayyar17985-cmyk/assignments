import React from 'react';
import "./Qualification.css";
const Qualification = () => {
  return (
    <>
    <section className="qualification">
      {/* Headings */}
      <h4 className="name">Qualification</h4>
      <h1 className="name1">My Qualification</h1>
      <p className="text">My academic journey and educational background</p>

      {/* Grid Container */}
      <div className="container">
        
        {/* Card 1: 10th Grade */}
        <div className="card">
          <div className="icon">
            <i className="fa-solid fa-school"></i>
          </div>
          <h2>10th grade</h2>
          <p>Sophia Girls School</p>
          <span className="year">
            <i className="fa-solid fa-calendar"></i> 2021-2022
          </span>
          <hr />
          <div className="star-icon">
            <i className="fa-solid fa-star"></i>
            <p><b>Percentage:</b> 85%</p>
          </div>
          <div className="trophy-icon">
            <i className="fa-solid fa-trophy"></i>
            <p><b>Board:</b> ICSE</p>
          </div>
        </div>







        {/* Card 2: 12th Grade */}
        <div className="card">
          <div className="icon">
            <i className="fa-solid fa-book-open"></i>
          </div>
          <h2>12th grade</h2>
          <p>Sophia Girls School</p>
          <span className="year">
            <i className="fa-solid fa-calendar"></i> 2024-2025
          </span>
          <hr />
          <div className="star-icon">
            <i className="fa-solid fa-star"></i>
            <p><b>Percentage:</b> 82%</p>
          </div>
          <div className="trophy-icon">
            <i className="fa-solid fa-trophy"></i>
            <p><b>Board:</b> ICSE</p>
          </div>
        </div>






        {/* Card 3: BCA */}
        <div className="card">
          <div className="icon">
            <i className="fa-solid fa-graduation-cap"></i>
          </div>
          <h2>BCA</h2>
          <p>Pt Deen Dayal Upadhyaya Management College</p>
          <span className="year">
            <i className="fa-solid fa-calendar"></i> 2026-present
          </span>
          <hr />
          <div className="star-icon">
            <i className="fa-solid fa-star"></i>
            <p><b>CGPA:</b> 7.21/10</p>
          </div>
          <div className="book-icon">
            <i className="fa-solid fa-book-open"></i>
            <p><b>Specialization:</b> Mern Stack Development</p>
          </div>
        </div>

      </div>





      {/* Quote Block */}
      <div className="quote-box">
        <i className="fa-solid fa-quote-left"></i>
        <div className="quote-content">
          <p>Education is not the learning of facts, but the training of the mind to think.</p>
          <h3>-Albert Einstein</h3>
        </div>
      </div>
    </section>
    </>
  );
};

export default Qualification;