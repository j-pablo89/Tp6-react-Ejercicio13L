import React from "react";
import { Container, Card, ListGroup } from "react-bootstrap";

const Clima = ({ miClima }) => {
  
  const urlIcono =
    `https://openweathermap.org/img/wn/` + miClima.weather[0].icon + `@2x.png`;
  return (
    <div className="mainSection">
      <h3 className="text-center my-4">
        Datos para la Ciudad de {miClima.name}, {miClima.sys.country}
      </h3>
      <Container className="d-flex justify-content-center">
        <Card style={{ width: "30rem" }}>
          <Card.Body className="bg-degradado d-flex justify-content-between">
            <div>
              <Card.Title className="fs-3 text-primary">Pronóstico</Card.Title>
              <Card.Text className="fs-2">
                {Math.round(miClima.main.temp - 273.15)}°C - {miClima.weather[0].description}
              </Card.Text>
            </div>
            <Card.Img style={{ width: "6rem" }} src={urlIcono}></Card.Img>
          </Card.Body>
          <ListGroup className="list-group-flush bg-degradado">
            <ListGroup.Item>
              T.MAX: {Math.round(miClima.main.temp_max - 273.15)}°C - T.MIN: {Math.round(miClima.main.temp_min - 273.15)}°C
            </ListGroup.Item>
            <ListGroup.Item>Humedad: {miClima.main.humidity}%</ListGroup.Item>
            <ListGroup.Item>Visibilidad: {miClima.visibility} m</ListGroup.Item>
            <ListGroup.Item>Presión: {miClima.main.pressure} HPa</ListGroup.Item>
            <ListGroup.Item>Vientos: {miClima.wind.speed} km/h</ListGroup.Item>
          </ListGroup>
        </Card>
      </Container>
    </div>
  );
};

export default Clima;
