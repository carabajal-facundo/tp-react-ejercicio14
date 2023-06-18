import { Table, Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";

const Admin = () => {
  const [show, setShow] = useState(false);
  const [receta, setReceta] = useState({
    nombre: "",
    ingredientes: "",
    pasos: "",
    imagen: ""
  });
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
    setRecetas([...recetas, receta]);
    localStorage.setItem("recetas", JSON.stringify(recetas));
    handleClose();
  };

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
            <tr>
              <td>1</td>
              <td>Arroz con pollo</td>
              <td className="text-truncate ancho">Arroz, pollo, queso, leche, aceite, mantequilla</td>
              <td className="text-truncate ancho">1. Hornear 2.Cocinar 3. Servir</td>
              <td className="text-truncate ancho">https://upload.wikimedia.org/wikipedia/commons/3/39/Arroz-con-Pollo.jpg</td>
              <td className="d-flex justify-content-evenly"><Button variant="warning" onClick={handleShow}>Editar</Button><Button variant="danger" >Borrar</Button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Empanadas</td>
              <td className="text-truncate ancho">Carne picada, picante, tapas para empanada</td>
              <td className="text-truncate ancho">1. Cortar la carne 2. Cocinar 3. Comer</td>
              <td className="text-truncate ancho">https://assets.bonappetit.com/photos/58a34e1df12ac6e639bf24ae/1:1/w_2812,h_2812,c_limit/argentinian-beef-empanadas.jpg</td>
              <td className="d-flex justify-content-evenly"><Button variant="warning" onClick={handleShow}>Editar</Button><Button variant="danger">Borrar</Button></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Humita</td>
              <td className="text-truncate ancho">Choclo rallado, queso, aji</td>
              <td className="text-truncate ancho">1. Rallar el choclo 2. Hervir 3. Servir caliente</td>
              <td className="text-truncate ancho">https://canalcocina.es/medias/images/1403SorLuciaHumita.jpg</td>
              <td className="d-flex justify-content-evenly"><Button variant="warning" onClick={handleShow}>Editar</Button><Button variant="danger">Borrar</Button></td>
            </tr>
          </tbody>
        </Table>
    </div>
  );
};

export default Admin;
