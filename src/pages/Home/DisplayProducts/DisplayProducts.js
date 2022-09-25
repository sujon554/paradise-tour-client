import React, { useEffect, useState } from "react";
import { Card, Col, Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const DisplayProducts = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetch("https://glacial-brushlands-74296.herokuapp.com/tours")
      .then((res) => res.json())
      .then((data) => setTours(data));
  }, []);

  return (
    <Container className="my-5">
      <h1 className="py-4">OUR <strong className="text-danger">PACKEGE's</strong></h1>
      <Row xs={1} md={3} className="g-4">
        {tours.slice(0, 6).map((tour) => (
          <Col key={tour._id} watch={tour}>
            <div>
              <Card.Img variant="top" src={tour.img} />
              <Card.Body>
                <Card.Title><h2>{tour.name}</h2></Card.Title>
                <h4>Tour packege: ${tour.Price}</h4>
                <Card.Text>{tour.Description}</Card.Text>

                
              </Card.Body>

              <Link to={`/singleproduct/${tour._id}`}>
                <Button className="px-5 py-2">Details Here</Button>
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DisplayProducts;
