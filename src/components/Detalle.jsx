import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
// import ListadoIngredientes from './partesDeetalle/ListadoIngredientes';
// import ListadoPasos from './partesDeetalle/ListadoPasos';

const Detalle = () => {
    const {nomreceta} = useParams();
    let recetas = JSON.parse(localStorage.getItem('recetas'));
    let receta = recetas.filter((receta) => receta.nombre === nomreceta);
    console.log(receta)
    return (
      <>
        <Container>
          <h1 className="my-5 text-center">Como hacer {receta[0].nombre}</h1>
          <hr />
          <section>
            <article className="row">
              <h3>Ingredientes</h3>
              <p className='col-md-6'>{receta[0].ingredientes}</p>
              {/* <ListadoIngredientes /> */}
              <section className="col-6">
                <img
                  className="col-md-6 img-fluid h-70 w-100"
                  src={receta[0].imagen}
                ></img>
              </section>
            </article>
            <article>
              <h3 className='my-5'>Pasos a seguir</h3>
              <p>{receta[0].pasos}</p>
              {/* <ListadoPasos/> */}
            </article>
          </section>
        </Container>
      </>
    );
};

export default Detalle;