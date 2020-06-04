import React, {Fragment, useState} from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const FormularioGastos = ({guardarGasto, funcionMostrarGasto}) => {

    const [nombregasto, guardarNombreGasto] = useState('');
    const [cantidadgasto, guardarCantidadGastos] = useState(0);  
    const [error, guardarError] = useState(false);  

    const definirNombreGasto = (e) => {

            guardarNombreGasto(e.target.value);
            
    }
    const definirCantidadGasto = (e) => {

        guardarCantidadGastos(parseInt(e.target.value, 10));
    }
    const agregarGasto = e =>{

        e.preventDefault();

        // validar el envio de los datos

        if(cantidadgasto <= 1 || isNaN(cantidadgasto)){

            guardarError(true);
            return;
        }
        guardarError(false);

        // construir el gasto

        const gasto = {

            nombregasto,
            cantidadgasto,
            id: shortid.generate()

        }
        // console.log(gasto);
        // pasar el gasto al componente principal
        guardarGasto(gasto);
        funcionMostrarGasto(true);
        

        //resetar el formulario
    }


    return ( 
            <Fragment>
            

            <form onSubmit={agregarGasto}>
                <h2>Gastos</h2>
                {error ? <Error mensaje="Debe ingresar un monto valido" /> : null}
                <div className="campo">
                    <label>Nombre Gasto</label>
                    <input
                        type="text"
                        className="u-full-width" 
                        placeholder="Ej. Tranporte"  
                        value={nombregasto}
                        onChange={definirNombreGasto}                 
                    />
                 </div>
                 <div className="campo">
                    <label>Cantidad Gasto</label>
                    <input
                        type="number"
                        className="u-full-width" 
                        placeholder="Ej. 5000" 
                        value={cantidadgasto}
                        onChange={definirCantidadGasto}                  
                    />
                 </div>   
                 <input  
                    type="submit"
                    className="u-full-width button-primary"
                    value="Agregar gasto"

                 />                       
            </form>
            </Fragment>

     );
}
FormularioGastos.protoTypes = {

    guardarGasto: PropTypes.func.isRequired,
    funcionMostrarGasto: PropTypes.func.isRequired

 }
export default FormularioGastos;