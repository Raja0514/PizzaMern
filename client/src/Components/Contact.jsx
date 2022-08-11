import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
const Contact = () => {
  return (
    <>
      <Container >
        <Row style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Col md={12}>
            <Image
              src="images/contact.jpg"
              style={{ width: "100%",height:"100%" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
