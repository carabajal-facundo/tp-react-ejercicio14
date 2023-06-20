import React from 'react';
import { Container } from 'react-bootstrap';
import ListadoIngredientes from './partesDeetalle/ListadoIngredientes';
import ListadoPasos from './partesDeetalle/ListadoPasos';

const Detalle = () => {
    return (
      <>
        <Container>
          <h1 className="my-5 text-center">Como hacer tamales</h1>
          <hr />
          <section>
            <article className="row">
              <ListadoIngredientes />
              <section className="col-6">
                <img
                  className="col-6 img-fluid h-70 w-100"
                  src="https://lasrecetasdelchef.net/wp-content/uploads/2019/01/tamales.jpg"
                ></img>
              </section>
            </article>
            <article>
              <h3 className='my-5'>Pasos a seguir</h3>
              <ListadoPasos/>
            </article>
          </section>
        </Container>
      </>
    );
};

export default Detalle;