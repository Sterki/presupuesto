import React, {Fragment, useState, useEffect} from 'react';
import Preguntapresupuesto from './components/Preguntapresupuesto';
import FormularioGastos from './components/FormularioGastos';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';




function App() {


  //Definir  presupuesto
  const [presupuesto, guardarPresupuesto] = useState(0);
  // el resto del presupuesto una vez vamos sacando del presupuesto
  const [restante, guardarRestante] = useState(0);

  // condicional para mostra o un componente u otro

  const [mostrarcomponente, actualizarComponente] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [mostrargasto, funcionMostrarGasto] = useState(false);


    useEffect( () => {


      // validamos que se haya agregado un gasto
      if(mostrargasto){

          //Agrega el nuevo presuuestpo
        guardarGastos([

          ...gastos,
          gasto
        ]);

        const presupuestoRestante = restante - gasto.cantidadgasto;
         guardarRestante(presupuestoRestante);
      }
      

      //Resetar a false
      funcionMostrarGasto(false);
      

    }, [gasto, mostrargasto, gastos, mostrarcomponente, presupuesto, restante])

  //Funcion que lee los gastos 


  return (

        <Fragment>
            <div className="container">
              <header>
                <h1>Gasto Semanal</h1>
                <div className="contenido-principal contenido">
                    {mostrarcomponente ? 
                    (
                        <Preguntapresupuesto 

                          guardarPresupuesto={guardarPresupuesto}
                          guardarRestante={guardarRestante}
                          actualizarComponente={actualizarComponente}

                        />
                      ) : (
                      
                      <div className="row">
                          <div className="one-half column">
                              <FormularioGastos 

                                guardarGasto={guardarGasto}
                                funcionMostrarGasto={funcionMostrarGasto}

                              />
                          </div>
                          <div className="one-half column">                                
                             
                            
                            <Listado 
                              gastos={gastos}
                            />
                            <ControlPresupuesto 
                              presupuesto={presupuesto}
                              restante={restante}

                            />
                          </div>
                      </div>
                  )}
                    

                    
                 </div> 
                
                </header>
             </div>
        </Fragment>
  );
}

export default App;
