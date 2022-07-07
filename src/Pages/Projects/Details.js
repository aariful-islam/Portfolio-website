import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const {id}= useParams();
    const [details,setDetails]=useState([])
    useEffect(()=>{
        fetch('projects.json')
        .then(res=>res.json)
        .then(data=>setDetails(data))
    },[])
   
}
    return (
        <div>
           {
            { const a= details.filter(d=> d.id===id)
            <h1>{a.name}</h1>
            
           }
            
        </div>
    );
};

export default Details;