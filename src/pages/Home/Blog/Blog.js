import React from "react";
import { Card, CardGroup, Col } from "react-bootstrap";
const Blog = () => {
  return (
    <>
      <Col className="py-5">
        <h5>HAPPENINGS AROUND</h5>
        <p>__________________________________</p>
        <h2>
          OUR <strong className="text-danger">BLOG's</strong>
        </h2>
      </Col>
      <Col>
        <CardGroup>
          <Card className="m-2">
            <Card.Img
              variant="top"
              src="https://tourpress.b-cdn.net/wp-content/uploads/2017/11/rio-featured.jpg"
            />
            <Card.Body>
              <Card.Title>Rio De Janeiro</Card.Title>
              <Card.Text>
                Adipiscing enim eu turpis egestas pretium aenean pharetra magna
                ac. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum.
                Elementum nisi quis.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card className="m-2">
            <Card.Img
              variant="top"
              src="https://tourpress.b-cdn.net/wp-content/uploads/2017/11/maldives-featured-720x560.jpg"
            />
            <Card.Body>
              <Card.Title>Magical Maldives</Card.Title>
              <Card.Text>
                Aliquam sem et tortor consequat id porta nibh venenatis cras.
                Mollis aliquam ut porttitor leo a diam sollicitudin. Venenatis
                lectus magna fringilla urn.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card className="m-2">
            <Card.Img
              variant="top"
              src="https://tourpress.b-cdn.net/wp-content/uploads/2017/10/cappadocia-featured.jpg"
            />
            <Card.Body>
              <Card.Title>Mysterious Goreme</Card.Title>
              <Card.Text>
                Maecenas volutpat blandit aliquam etiam. Integer malesuada nunc
                vel risus commodo viverra maecenas. Gravida quis blandit turpis
                cursus in.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card className="m-2">
            <Card.Img
              variant="top"
              src="https://tourpress.b-cdn.net/wp-content/uploads/2017/11/rio-featured.jpg"
            />
            <Card.Body>
              <Card.Title>MODERN DIGITAL JUMP-SECONDS DISPLAY</Card.Title>
              <Card.Text>
                Maecenas volutpat blandit aliquam etiam. Integer malesuada nunc
                vel risus commodo viverra maecenas. Gravida quis blandit turpis
                cursus in.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </Col>
    </>
  );
};

export default Blog;
