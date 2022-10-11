import React from "react";
import "./Blogs.css";
import RR from "../../images/react-router.png";
import Hooks from "../../images/hook.png";
import Context from "../../images/context-api.png";
import { Button, Card } from "react-bootstrap";
const Blogs = () => {
  return (
    <div className="container">
      <Card>
        <Card.Img variant="top" src={RR} />
        <Card.Body>
          <Card.Title>What is the purpose of React-Router-Dom</Card.Title>
          <Card.Text>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
              minima vitae, dolor libero, aliquam animi nesciunt explicabo
              repudiandae debitis odio non. Saepe quaerat modi aperiam non
              consequatur omnis distinctio molestias voluptatem ipsum suscipit
              veritatis ullam nobis, doloribus, cumque atque voluptate.
            </p>
          </Card.Text>
          <Button variant="primary">Learn More</Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={Hooks} />
        <Card.Body>
          <Card.Title>What is the purpose of React-Router-Dom</Card.Title>
          <Card.Text>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
              minima vitae, dolor libero, aliquam animi nesciunt explicabo
              repudiandae debitis odio non. Saepe quaerat modi aperiam non
              consequatur omnis distinctio molestias voluptatem ipsum suscipit
              veritatis ullam nobis, doloribus, cumque atque voluptate.
            </p>
          </Card.Text>
          <Button variant="primary">Learn More</Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={Context} />
        <Card.Body>
          <Card.Title>What is the purpose of React-Router-Dom</Card.Title>
                  <Card.Text>
                      <p>
                      React Router DOM is an npm package that enables you to implement dynamic routing in a web app. It allows you to display pages and allow users to navigate them. It is a fully-featured client and server-side routing library for React.
                      </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
              minima vitae, dolor libero, aliquam animi nesciunt explicabo
              repudiandae debitis odio non. Saepe quaerat modi aperiam non
              consequatur omnis distinctio molestias voluptatem ipsum suscipit
              veritatis ullam nobis, doloribus, cumque atque voluptate.
            </p>
          </Card.Text>
          <Button variant="primary">Learn More</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Blogs;
