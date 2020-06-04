import React, { Fragment, useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Preguntapresupuesto = ({guardarPresupuesto, guardarRestante, actualizarComponente}) => {


    //Creamos el state para leer lo que el usuario escribe como cantidad
    const [cantidad, guardarCantidad] = useState(0);
    const [error, actualizarError] = useState(false);


    //Luego definimos una funcion para leer lo que escribe
    const definirCantidad = e => {

        //guardamos lo que el usuario escribe con la funcion en cantidad
        guardarCantidad(parseInt(e.target.value)); // y la parseamos a entero         
    }
    const enviarDatosPresupuesto = (e) =>{

        e.preventDefault();

        //validar

        if(cantidad <= 1 || isNaN(cantidad)){

            actualizarError(true);
            actualizarComponente(true);
            return;
        }
        actualizarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarComponente(false);

    }

    return ( 
            <Fragment>
                    <h2>Coloca tu presupuesto</h2>

                        {error ? <Error mensaje="Debe definir un presupuesto valido"   /> : null}
                        
                        <form
                            onSubmit={enviarDatosPresupuesto}
                        >
                            <input 
                                type="number"
                                className="u-full-width"
                                placeholder="Coloca tu presupuesto"
                                onChange={definirCantidad}
                            />
                            <input 
                                type="submit"
                                className="u-full-width button-primary"
                            />
                        </form>
                     




            </Fragment>

     );
}
Preguntapresupuesto.protoTypes = {

    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarComponente: PropTypes.func.isRequired

 }
export default Preguntapresupuesto;