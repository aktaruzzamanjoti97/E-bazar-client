import React, { useEffect, useState } from "react";
import { Button, Form, FormControl, Spinner } from "react-bootstrap";
import Product from "../Product/Product";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://infinite-temple-86375.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);

  return (
    <div>
      <div className="text-center">
        <div className="d-flex justify-content-center align-items-center">
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
        </div>
        
      </div>
      {products.length <= 0 && (
        <div
          style={{ height: "300px" }}
          className="d-flex justify-content-center align-items-center m-5"
        >
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="warning" />
        </div>
      )}
      <div className="row">
        {products.map((product) => (
          <Product product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Home;
