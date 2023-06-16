import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
const Admin = () => {
  return (
    <>
      <Container className="m-5">
        <h1 className="mb-4">Administrador de recetas</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Receta</th>
              <th>Ingredientes</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Admin;
