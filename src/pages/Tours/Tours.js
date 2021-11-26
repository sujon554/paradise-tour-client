import React from 'react';
import { useEffect, useState } from "react";
import { Card, Col, Row, Button, Container } from "react-bootstrap";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const Tours = () => {
    const [tours, setTours] = useState([]);

  useEffect(() => {
    fetch("https://hidden-sea-94069.herokuapp.com/tours")
      .then((res) => res.json())
      .then((data) => setTours(data));
  }, []);
    
    return (
      <Container>
        <h1 className="my-5">OUR TOUR  <strong className="text-danger">PACKEGE's</strong></h1>
        <Row xs={1} md={3} className="g-4">
       
          {tours.map((tour) => (
            <Col key={tour._id} watch={tour}>
              <div className="mb-5">
                <Card.Img variant="top" src={tour.img} />
                <Card.Body>
                  <Card.Title><h2>{tour.name}</h2></Card.Title>
                  <h4>Tour Packege: ${tour.Price}</h4>
                  <Card.Text>{tour.Description}</Card.Text>
  
                  <Rating
                    initialRating={tour.star}
                    readonly
                    emptySymbol="far fa-star text-warning"
                    fullSymbol="fas fa-star text-warning"
                  />
                </Card.Body>
  
                <Link to={`/singleproduct/${tour._id}`}>
                  <Button className="px-5 py-2">Details</Button>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    );
};

export default Tours;