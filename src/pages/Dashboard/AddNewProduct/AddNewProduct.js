import axios from "axios";
import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddNewProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const [success, setSuccess] = useState();

  const onSubmit = (data) => {
    axios.post("https://paradise-tour-server.onrender.com/tours", data).then((res) => {
      if (res.data.insertedId) {
        // alert("Package Addeded Successfully!");
        reset();
        setSuccess("Tour Package Added Successfully !");
      }
    });
  };

  //Remove Success Text
  const successTextRemover = () => {
    setSuccess("");
  };

  return (
    <div className="pt-5">
      <h3 className="text-center text-dark mb-5 text-uppercase">
        add a new <span style={{ color: "#ea3c23" }}>Tour Package</span>
      </h3>

      <Form
        className="d-flex flex-column w-25 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          style={{ outline: "none" }}
          onClick={successTextRemover}
          className="mb-3 py-2 px-3"
          placeholder="Tour Package Name"
          {...register("name")}
        />
        <input
          style={{ outline: "none" }}
          onClick={successTextRemover}
          className="mb-3 py-2 px-3"
          placeholder="Image URL"
          {...register("img")}
        />

        <textarea
          style={{ outline: "none" }}
          onClick={successTextRemover}
          className="mb-3 py-2 px-3"
          placeholder="Description"
          {...register("Description")}
        />

        <input
          style={{ outline: "none" }}
          onClick={successTextRemover}
          className="mb-3 py-2 px-3"
          placeholder="$ Price"
          {...register("Price")}
        />

        <Button className="w-75" variant="danger" type="submit">
          Add Package
        </Button>
      </Form>
      <p className="text-center text-danger text-uppercase mt-4 mb-5 pb-5 fs-4">
        {success}
      </p>
    </div>
  );
};

export default AddNewProduct;
