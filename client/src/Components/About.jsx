import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
const About = () => {
  return (
    <>
      <Container style={{marginTop:"20px"}} >
   
        <p>
        <strong>Pizza Muscat</strong> was established on 2nd December 2002 by an Omani
        Entrepreneur Mr. Haroon Bin Ahmed Bin Sumar Al Saigh. We operated our
        first store in Al-Khuwair and made Fast Food chain concept throughout
        Sultanate. Pizza Muscat is an Omani Group which produces fresh Arabic
        and Traditional flavoured Pizzas in Town. We still embrace the same
        concept of the reputed Italian Pizza offering fresh food made daily for
        the entire family in a friendly ambiance. Our signature dishes include
        Variety of Pizzas, Delicious Lasagna, Pizza Pie Sandwiches, Fresh Salad
        and many more. Our conception will be always to serve right quality, top
        ranked, fully hygiene & Halal food to our valued customers. Our
        commitment to quality and service has and always will remain our focus.
        On behalf of Pizza Muscat Family Restaurants, we want to thank you for
        your support and look forward to serving you for generations to come.
        
        </p>
        
        <Row style={{marginTop:'50px' }}>
         
          <Col md={3} style={{marginBottom:"25px"}}>
            <Image
              src="images/kitchen.jpg"
              style={{ width: "100%", height: "100%" }}
            />
          </Col>
          <Col md={3} style={{marginBottom:"25px"}}>
            <Image
              src="images/kitchen2.jpg"
              style={{ width: "100%", height: "100%" }}
            />
          </Col>
          <Col md={3} style={{marginBottom:"25px"}}>
            <Image
              src="images/kitchen3.jpg"
              style={{ width: "100%", height: "100%" }}
            />
          </Col>
          <Col md={3} style={{marginBottom:"25px"}}>
            <Image
              src="images/kitchen4.jpg"
              style={{ width: "100%", height: "100%" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default About;
