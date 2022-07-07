import React from 'react';
import img from '../../Images/Formal_photo-removebg-preview.png'
import './about.css'

const About = () => {
    return (
        <div className='text-white bg-secondary'>
            <h1 className='text-center '>About Me</h1>
            <div className='about '>
                <div className='d-flex justify-content-center align-items-center'><p className='m-4 text'>HI this is Arif,Competitive Programmer and a Full Stack Web Developer, looking to enhance my professional experience.. I'm skilled with JavaScript, ReactJS, Tailwind, React-Bootstrap, HTML5, CSS3, NodeJS, ExpressJS, MongoDB etc. I have completed 5+ real-world projects. Firebase Authentication system with JWT, Tailwind & DaisyUI or React-Bootstrap as CSS framework and ExpressJS, NodeJS & MongoDB as back-end environment has been used in those projects. Please take a look at the featured section to get my resume.</p></div>
                <div>
                    <img className='img-fluid' src={img} alt="" />
                </div>


            </div>


        </div>
    );
};

export default About;