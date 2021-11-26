import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import Orders from "../Orders/Orders";
import YourOrders from "../YourOrders/YourOrders";

const Dashboard = () => {
  return (
    <div className="m-5">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <h1 className="bg-dark text-light py-3"> <strong className="text-info"> <strong className="text-danger">DASHBOARD</strong></strong></h1>
        <Row>
          <Col sm={3}>
            <Nav
              variant="pills"
              className="flex-column"
              
            >
              <Nav.Item>
                <Nav.Link eventKey="first">My Orders</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Order">Manage All Orders</Nav.Link>
              </Nav.Item>
            
              <Nav.Item>
                <Nav.Link eventKey="Add">Add New Product</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <YourOrders></YourOrders>
              </Tab.Pane>
              <Tab.Pane eventKey="Add">
                <AddNewProduct />
              </Tab.Pane>
              <Tab.Pane eventKey="Order">
                <Orders></Orders>
              </Tab.Pane>
             
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default Dashboard;
