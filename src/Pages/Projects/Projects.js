
import React, { useEffect } from 'react';
import { useState } from 'react';
import Project from './Project';

import './projects.css'



const Projects = () => {
    const [projects,setProjects]=useState([])
    useEffect(()=>{
        fetch('projects.json')
        .then(res=>res.json())
        .then(data=>setProjects(data))
    },[])


    return (
        <div>
            <h1 className='text-center'>Projects</h1>
            <div className='cards'>
                {
                    projects.map(project => <Project project={project}></Project>)
                }

            </div>
  
        </div>
    );
};

export default Projects;