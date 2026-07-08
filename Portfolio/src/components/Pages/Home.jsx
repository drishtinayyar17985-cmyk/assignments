import React from 'react'
import {Link} from 'react-router-dom'
import "../../App.css";
import myProfilePic from '../../assets/drishti.jpeg'
const Home = () => {
  return (
    <>
    <section className='banner'>
        <div className='container-fluid'>
            
            <div className='left'>
                <p className='intro'>Hello,I'm</p>
                <h1 className='name'>Drishti Nayyar</h1>
                <h2 className='mern'>
                    <span className='inblue'>MERN Stack</span> 
                   <span className='developer'>Developer</span> 
                </h2>
        <p className='text'>I build responsive and user-friendly web applications
     using HTML,CSS,Bootstrap,JavaScript,React.</p>
        

            <div className='button'>
                <Link to="/hireme">
                    <button className='btn-secondary'>Hire Me</button>
                </Link>
            </div>
        </div>


           <div className='right'>
<img src={myProfilePic} alt="my profile picture" className='profilepic'/>
           </div>

</div>
    </section>
    </>
  )
}

export default Home
