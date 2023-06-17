import { Table, Button } from "react-bootstrap";
const Admin = () => {
  return (
    <div className="container my-5">
        <h1 className="mb-4">Administrador de recetas</h1>
        <Button>Agregar</Button>
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
              <td className="d-flex"><Button variant="warning">Editar</Button><Button variant="danger">Borrar</Button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Empanadas</td>
              <td className="text-truncate ancho">Carne picada, picante, tapas para empanada</td>
              <td className="text-truncate ancho">1. Cortar la carne 2. Cocinar 3. Comer</td>
              <td className="text-truncate ancho">https://assets.bonappetit.com/photos/58a34e1df12ac6e639bf24ae/1:1/w_2812,h_2812,c_limit/argentinian-beef-empanadas.jpg</td>
              <td className="d-flex"><Button variant="warning">Editar</Button><Button variant="danger">Borrar</Button></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Humita</td>
              <td className="text-truncate ancho">Choclo rallado, queso, aji</td>
              <td className="text-truncate ancho">1. Rallar el choclo 2. Hervir 3. Servir caliente</td>
              <td className="text-truncate ancho">https://canalcocina.es/medias/images/1403SorLuciaHumita.jpg</td>
              <td className="d-flex"><Button variant="warning">Editar</Button><Button variant="danger">Borrar</Button></td>
            </tr>
          </tbody>
        </Table>
    </div>
  );
};

export default Admin;
