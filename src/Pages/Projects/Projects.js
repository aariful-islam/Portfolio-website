
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './projects.css'

const Projects = () => {
    return (
        <div >
            <h1 className='text-center'>Projects</h1>
            <div className='card'>
                <div>
                    <Card >

                        <Card.Body>
                            <Card.Title>Manufacturer website</Card.Title>
                            <Card.Text>
                               work with React.js •Firebase •Node.js •Express.js •Tailwind CSS
                            </Card.Text>
                            <a className='btn btn-primary' href='https://manufacturer-website-9bd63.web.app/home' variant="primary">Live Site</a>
                        </Card.Body>
                    </Card>

                </div>
                <div>
                    <Card >

                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Live Site</Button>
                        </Card.Body>
                    </Card>

                </div>
                <div>
                    <Card >

                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Live Site</Button>
                        </Card.Body>
                    </Card>

                </div>
            </div>



        </div>
    );
};

export default Projects;