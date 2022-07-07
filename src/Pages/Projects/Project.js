import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const Project = ({project}) => {
    const {img,name,description,id}=project
    const navigate = useNavigate();
    const details = (id) =>{
        navigate(`/projects/${id}`);
    }
    return (
        <div>
           <Card >
      <Card.Img variant="top" src={img}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <h3>Features</h3>
          <p>{description}</p>
        </Card.Text>
        <Button onClick={()=> details(id)} className='btn btn-primary w-50 mx-auto'>Details</Button>
      </Card.Body>
    </Card>
            
        </div>
    );
};

export default Project;