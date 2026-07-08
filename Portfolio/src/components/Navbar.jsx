import React from 'react'
import {Link} from 'react-router-dom'
import "../App.css";

const Navbar=()=>{
    return(
    <>
   
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
   
    
    
<div className='nav-item1'>
          <Link className="nav-link1"  to="/">
            Port<span className='folio'>folio</span>
                </Link>
       </div> 
        
    
    
    
    <div className="collapse navbar-collapse justify-content-end">
      
      <ul className="navbar-nav">
      <li className="nav-item">
          <Link className="nav-link"  to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="/about">About Me</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/skills">Skills</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/qualification">Qualification</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/projects">Projects</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/hireme" >Hire Me</Link>
        </li>
        <li>
          <a href=""><i class="fa-brands fa-linkedin"></i></a>
          </li>
    <li>
      <a href=""><i class="fa-brands fa-github"></i></a>
      </li> 
      </ul>

    </div>

</div>

</nav>
    

 </>
    )
}
export default Navbar