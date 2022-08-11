import React, { useEffect } from "react";
//import AllPizza from "../pizza-data";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { getAllpizzas } from "../action/pizzaAction";
import Pizza from "../Components/Pizza";
import Loader from "../Components/Loader";
import Error from "../Components/Error";


const Home = () => {
  
  const dispatch = useDispatch()

  const pizza1 = useSelector((state) =>state.getAllpizzaReducer);

  console.log(pizza1)

  const { loading, pizzas, error } = pizza1;

  console.log(pizzas)


  
  useEffect(() => {
    dispatch(getAllpizzas());
  }, [dispatch]);

  return (
    <>
      <Container>
        {loading ? (
          <Loader/>
        ) : error ? (
          <Error error="Error on fecthing data from server"></Error>
        ) : (
          <Row>
            {pizzas.map((pizza,index) => {
              return (
                <>
                  <Col md={4} >
                    
                    <Pizza key={index}  pizza={pizza} />
                  </Col>
                </>
              );
            })}
          </Row>
        )}
      </Container>
    </>
  );
};

export default Home;
