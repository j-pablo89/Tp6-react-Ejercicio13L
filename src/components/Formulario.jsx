import React from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import Clima from "./Clima";
import Footer from "./Footer";
import Swal from "sweetalert2";

const Formulario = () => {
    const [ciudad, setCiudad] = useState('');
    const [miClima, setMiClima] = useState('');
    const [mostrarSpinner, setMostrarSpinner] = useState(true);

    useEffect(()=>{
        consultarAPI();
        setCiudad('');
    },[]);

    const consultarAPI = async () => {
        setMostrarSpinner(true);
        try {    
            const respuesta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad || 'Tucuman'}&lang=sp&appid=57bacdc9bc94800c9ee193567194d082`);
            const dato = await respuesta.json();
            if(respuesta.ok){
                console.log(dato);
                setMiClima(dato);
                setCiudad('');
                setMostrarSpinner(false)
            }else{
                Swal.fire({
                    title: '¡Error!',
                    text: 'No se encontró información para la ciudad solicitada',
                    icon: 'error',
                    confirmButtonText: 'Aceptar'
                  });
                  setMostrarSpinner(false)
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setCiudad('');
    }

    const componenteRenderizado = (mostrarSpinner) ? (<div className="text-center pt-5 mt-5">
    <Button className="my-5" variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
         Loading...
      </Button>
    </div>) : <Clima miClima={miClima}></Clima>;
    
  return (
    <>
    <Form className="container pt-3 mt-3 px-5 transparencia" onSubmit={handleSubmit}>
      <Form.Group className="mb-3 pe-4 d-flex justify-content-center container px-5" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Ej: Quito" onChange={ (e) => setCiudad(e.target.value)} value={ciudad} required/>
        <Button variant="success" className="py-0 ms-2" type="submit" onClick={consultarAPI}>Consultar</Button>
      </Form.Group>
    </Form>
    {componenteRenderizado}
    <Footer ></Footer>
    </>
  );
};

export default Formulario;
