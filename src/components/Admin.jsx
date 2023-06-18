import { Table, Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";

const Admin = () => {
  const [show, setShow] = useState(false);
  const initialRecetaState = {
    nombre: "",
    ingredientes: "",
    pasos: "",
    imagen: ""
  };
  const [receta, setReceta] = useState(initialRecetaState);
  let recetasLocalStorage = JSON.parse(localStorage.getItem('recetas')) || [];
  const [recetas, setRecetas] = useState(recetasLocalStorage);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setReceta((prevReceta) => ({
      ...prevReceta,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const recetasUpdated = [...recetas, receta];
    localStorage.setItem("recetas", JSON.stringify(recetasUpdated));
    setRecetas(recetasUpdated);
    setReceta(initialRecetaState);
    handleClose();
  };

  const borrarReceta = (nombreReceta)=> {
    let copiaRecetas = recetas.filter((receta) => receta !== nombreReceta);
    setRecetas(copiaRecetas);

  }

  return (
    <div className="container my-5">
      <h1 className="mb-3">Administrador de recetas</h1>
      <Button variant="primary" onClick={handleShow}>
        Agregar
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar o modificar receta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="nombre">
              <Form.Label>Receta</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre del plato"
                value={receta.nombre}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ingredientes">
              <Form.Label>Ingredientes</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                placeholder="Ej: Arroz, 2 huevos, manteca"
                value={receta.ingredientes}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="pasos">
              <Form.Label>Pasos</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                placeholder="Ej: 1. Hornear 2. Servir 3. Limpiar"
                value={receta.pasos}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="imagen">
              <Form.Label>Imagen</Form.Label>
              <Form.Control
                type="text"
                placeholder="URL de la imagen"
                value={receta.imagen}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Guardar receta
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <Table striped bordered hover responsive className="my-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Receta</th>
            <th>Ingredientes</th>
            <th>Pasos</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {recetas.map((receta, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{receta.nombre}</td>
              <td className="text-truncate ancho">{receta.ingredientes}</td>
              <td className="text-truncate ancho">{receta.pasos}</td>
              <td className="text-truncate ancho">{receta.imagen}</td>
              <td className="d-flex justify-content-evenly">
                <Button variant="warning" onClick={handleShow}>
                  Editar
                </Button>
                <Button variant="danger" onClick={() => borrarReceta(receta)}>Borrar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Admin;
