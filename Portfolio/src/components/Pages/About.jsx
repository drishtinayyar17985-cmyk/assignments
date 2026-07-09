import React from 'react';
import "../../App.css";
const About = () => {
  return (
    <>
    <section className='contain'>

      <div className='container'>
    

     <div className='about-right-content'>
      <div className='about-content'>
      <h3 className='about-subtitle'>About</h3>
      <h1 className='title'>Me!</h1>
    
      <p className='drishti'>Hello! I'm<span className='highlight' >Drishti Nayyar</span></p>
      <p className='rahul' >
  I'm a passionate curious individual who loves turning ideas into real experiences.I enjoy learning,building,meaningful things,and solving problems that make a difference.
     </p>
    <p className='sid'>
      when I'm not working,you will find me exploring new places,reading books,or listening to good music.
    </p>
    </div>
    
      
<h1 className='neha'>I value...</h1>

<div className="about-features">

  <div className="feature" style={{height:"130px",width:"200px" ,padding:"5px"}}>
    <i className="fa-solid fa-lightbulb"></i>
    <h4 style={{fontSize:"12px"}}>Creative Thinker</h4>
    <p>Thinking outside the box</p>
  </div>

  <div className="feature" style={{height:"130px",width:"140px" ,padding:"10px"}}>
    <i className="fa-solid fa-bullseye"></i>
    <h4 style={{fontSize:"14px"}}>Goal Oriented</h4>
    <p>Design with meaning</p>
  </div>

  <div className="feature" style={{height:"130px",width:"140px" ,padding:"10px"}}>
    <i className="fa-solid fa-book-open"></i>
    <h4 style={{fontSize:"14px"}}>Lifelong Learner</h4>
    <p>Small things matter</p>
  </div>

  <div className="feature"    style={{height:"130px",width:"140px" ,padding:"10px"}}>
    <i className="fa-solid fa-heart"></i>
    <h4 style={{fontSize:"14px"}}>Passionate</h4>
    <p>Love what I do</p>
  </div>

</div>
</div>
 <div className="vertical-divider"></div>      
<div className='circle'>
    <img src="https://img.magnific.com/free-photo/young-delivery-woman-wearing-red-polo-shirt-cap-looking-confident-pointing-with-finger-side-isolated-white-background_141793-19939.jpg" />
  </div>

</div>
 </section>   
    </>
      
  )
}

export default About
