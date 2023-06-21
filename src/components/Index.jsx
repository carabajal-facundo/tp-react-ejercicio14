import React, { useState, useEffect } from "react";
import { Card,Button } from "react-bootstrap";
import "../App.css"
const AdminChild = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    const recetasLocalStorage = JSON.parse(localStorage.getItem("recetas")) || [];
    setRecetas(recetasLocalStorage);
  }, []);

  return (
    <>
    <h1 className="text-center mt-5 ">Tus recetas favoritas</h1>
    <div className="Adaptar">
      
      {recetas.map((receta, index) => (
        <Card key={index} style={{ width: "18rem" }} className="mb-5 margen-edit">
          <Card.Img variant="top" src={receta.imagen} />
          <Card.Body>
            <Card.Title>{receta.nombre}</Card.Title>
            <Button variant="warning">Ver Mas</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
    </>
  );
};

export default AdminChild;