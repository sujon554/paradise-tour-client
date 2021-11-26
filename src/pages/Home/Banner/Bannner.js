import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import './Bannner.css'

const Bannner = () => {
    return (
<Container>
            
            <Row className="cover my-5 py-5">
              
                    <Col className="col-6"></Col>
                    <Col className="text-start p-4 col-6">
                        <h1>Choose Your Adventure at one place with Ease</h1>
                        <p>TourPress offers hundreds of tours and activities for travelers around the globe. Choose from sightseeing tours to spa escapes to interactive cultural programs and so much more. TourPress is the only way to travel.</p>
                        <Button>Explore Tours</Button>
                    </Col>
              
                
            </Row>
        </Container>
    );
};

export default Bannner;