import React from 'react';
import img from '../../Images/Formal photo.jpg'
import About from '../About/About';

const Home = () => {
    return (
        <div>
            <div className='m-5 d-flex'>
            <div className='d-flex justify-content-center align-items-center'>
                <div>
                <h1 className='text-primary mt-4'>Hi This is Arif here</h1>
                <h3 className='text-secondary'>Full Stact web developer</h3>
                <p>I'm competitive programmer and full stact web developer. I'm very much pasionate in programming. I want build amazing websites.</p>

                </div>
                

            </div>
            <div>
                <img src={img} alt="" />

            </div>
            
            
        </div>
        
        <About></About>

        </div>
        
       
        
    );
};

export default Home;