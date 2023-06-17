import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

const Formulario = () => {
    const [ciudad, setCiudad] = useState('');

    useEffect(()=>{
        consultarAPI();
    },[]);

    const consultarAPI = async () => {
        try {
           // const respuesta = await fetch('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}');
            const dato = await respuesta.json();
            console.log(dato);
        } catch (error) {
            console.log(error);
        }
    }
    

  return (
    <Form className="container pt-3 mt-5 px-5 transparencia">
      <Form.Group className="mb-3 pe-4 d-flex justify-content-center container px-5" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Ingrese la Ciudad" />
        <Button variant="success" className="py-0">Success</Button>
      </Form.Group>
    </Form>
  );
};

export default Formulario;
