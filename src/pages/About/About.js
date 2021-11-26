import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './About.css';

const About = () => {
  return (
    <Container className="container my-5">
      <h1 className="my-5">About  <strong className="text-danger">Paradise</strong></h1>
      <Row  className="contacts-container">
              <Col className="contacts">
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt dolores placeat ducimus porro eaque ipsum assumenda et voluptas, magni unde mollitia, adipisci quisquam. Distinctio ut quam cum. Aspernatur, omnis. Non deleniti quasi perspiciatis quam illo ullam magnam cum earum eveniet commodi debitis deserunt qui, veniam iste maiores voluptatum unde? Numquam perspiciatis neque esse amet enim quo nam facilis ullam ipsam reprehenderit, quasi, officia animi deserunt voluptatum molestias quos tempore pariatur temporibus ut adipisci accusantium eligendi! Suscipit dignissimos hic vitae corporis maxime quisquam aspernatur aperiam non itaque harum, rerum quia iusto voluptas porro reprehenderit, laboriosam soluta officiis numquam voluptatibus impedit asperiores totam, amet at. Tempora assumenda temporibus architecto voluptatum in libero laudantium nihil illum non cum tempore magni itaque ipsam sequi maiores ducimus, excepturi maxime incidunt, eveniet minima culpa dolorem veniam. Sed possimus nemo repellendus sunt quibusdam quasi veniam placeat nam ut, animi, reprehenderit tempora voluptatibus quos non temporibus aliquam enim fugit eius cumque minima illo libero. Magnam iusto ab aliquam, temporibus excepturi laborum molestias enim dolor explicabo. Nobis nulla doloremque et, temporibus laudantium tempore non harum impedit molestiae fugit odio autem commodi consequatur excepturi, iste labore officiis soluta dignissimos ut. Nulla laborum aperiam magnam voluptas quidem facilis recusandae quam ut saepe debitis reprehenderit impedit iusto odit quaerat temporibus, maiores dolorum quas repellendus voluptatem. Sapiente quia corrupti id est temporibus in. Dolor ipsa perferendis ut consequuntur dignissimos dolore maxime, veritatis nemo aliquam, aspernatur hic labore voluptates, voluptas ad. Mollitia illum omnis perspiciatis adipisci illo incidunt voluptatem. Iste adipisci fugiat optio aut!</p>
        </Col>
        <Col className="office">
         <img fluid src="https://tourpress.b-cdn.net/wp-content/uploads/2017/11/singapore-featured.jpg" alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
