import { Table, Button } from "react-bootstrap";
const Admin = () => {
  return (
    <div className="container my-5">
        <h1 className="mb-4">Administrador de recetas</h1>
        <Table striped bordered hover responsive>
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
              <td className="d-flex"><Button>Ver</Button><Button>Borrar</Button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Empanadas</td>
              <td className="text-truncate ancho">Thornton</td>
              <td className="text-truncate ancho">@fat</td>
              <td className="text-truncate ancho">@fat</td>
              <td className="text-truncate ancho">@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Humita</td>
              <td className="text-truncate ancho">@twitter</td>
              <td className="text-truncate ancho">@twitter</td>
              <td className="text-truncate ancho">@twitter</td>
              <td className="text-truncate ancho">@twitter</td>
            </tr>
          </tbody>
        </Table>
    </div>
  );
};

export default Admin;
