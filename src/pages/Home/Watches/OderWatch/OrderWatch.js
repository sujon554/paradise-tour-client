import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

const OrderWatch = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState([]);
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    fetch(`https://glacial-brushlands-74296.herokuapp.com/tours/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  }, []);

  //Booking FORM Submit
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://glacial-brushlands-74296.herokuapp.com/allorders", data)
      .then((res) => {
        
        if (res.data.insertedId) {
          alert("Package Booked Successfully!");
        }
      });
  };

  return (
    <Container className="d-flex">
      <div>
        <img src={singleProduct.img} alt="" />
        <h2>Watch Name {singleProduct.name}</h2>
        <h1>Price: {singleProduct.Price}</h1>
        <p>{singleProduct.Description}</p>

        {/* Button */}
        <Link to="/tours">
          <Button className="m-5">Back Tour Page</Button>
        </Link>
      </div>

      {/* //order Now */}
      <div>
        <Form
          className="d-flex flex-column mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            style={{ outline: "none" }}
            className="mb-3 py-2 px-3"
            defaultValue={user.displayName}
            {...register("userName")}
          />
          <input
            style={{ outline: "none" }}
            className="mb-3 py-2 px-3"
            defaultValue={user.email}
            {...register("userEmail")}
          />
          {/* Error */}

          {singleProduct.name && (
            <input
              style={{ outline: "none" }}
              className="mb-3 py-2 px-3"
              defaultValue={singleProduct.name}
              {...register("singleWatchName")}
            />
          )}

          {singleProduct.img && (
            <input
              className="mb-3 p-2 d-none"
              defaultValue={singleProduct.img}
              {...register("singleWatchImg")}
            />
          )}

          {singleProduct.Price && (
            <input
              className="mb-3 p-2"
              defaultValue={singleProduct.Price}
              {...register("singleWatchPrice")}
            />
          )}

          {/* Error */}

          <input
            className="mb-3 p-2 d-none"
            defaultValue="Pending"
            {...register("bookedServiceStatus")}
          />

          <Button variant="danger" type="submit">
            Booking Now
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default OrderWatch;
