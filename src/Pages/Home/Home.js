import React from 'react';
import img from '../../Images/Formal photo.jpg'
import About from '../About/About';
import Projects from '../Projects/Projects';
import im from '../../Images/Md_Ariful_Islam-removebg-preview.png'
import './Home.css'
import Skills from '../Skill/Skills';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div className='mb-2'>
            <div className=' bg-dark text-white banner'>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='ms-4'>
                <h1 className='text-primary mt-4'>Hi This is Arif here</h1>
                <h3 className='text-secondary'>Full Stact web developer</h3>
                <p>I'm competitive programmer and full stact web developer. I'm very much pasionate in programming. I want build amazing websites.</p>
                <button className='btn btn-primary'><a className='text-white' href="https://drive.google.com/file/d/1B-zQxAmNXAd962DrzGUwG8hDCOnCvsGl/view?usp=sharing" style={{textDecoration:"none"}}> download resume</a></button>

                </div>
                

            </div>
            <div>
                <img className='img-fluid' src={im} alt="" />

            </div>
            
            
        </div>
        
        <About></About>
        <Projects></Projects>
        <Skills></Skills>
        <Contact></Contact>

        </div>
        
       
        
    );
};

export default Home;