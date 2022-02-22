import { useState ,useEffect} from 'react';
import Resultados from '../componentes/Resultados.js';
import '../estilos/resultados-busqueda.css';
//import peliculasDB from '../../peliculas150.json';
import * as PeliculasService from '../servicios/PeliculasService';

function ResultadosBusqueda(){

    const [busqueda,setBusqueda] = useState('');
    const [resultados, setResultados] = useState([]);

    /**
     * 1. SIEMPRE SE EJECUTA UNA VEZ -> Montaje del Componente
     * 2. POR CADA CAMBIO DE ESTADO, DESPUES DE RENDERIZAR SE EJECUTA -> Actualizacion
     * 3. ADICIONAR UN RETURN -> Desmontaje
     */
    useEffect(()=>{

        /**
         * SE RECOMIENDA CONECTAR LAS APIS AQUI EN LOS EFECTOS Y
         * LLAMAR A LA BASE DE DATOS
         */
        if(busqueda.length >= 4){
            PeliculasService.servicioBusquedaTitulo(busqueda)
                .then(function(ResultadosBusqueda){
                    setResultados(ResultadosBusqueda.data);
                });
        }
        else{
            setResultados([]);
        }
        
    },[busqueda])

    function handleSubmit(evento){
        evento.preventDefault();
    }

    function handleChange(evento){
        let tituloPelicula = evento.target.value;                    
        setBusqueda(tituloPelicula);
    }
    return(

        <>
            <div className="dv-busqueda">
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Buscar Peliculas</legend>
                        <input type="text" id="busqueda" name="busqueda" onChange={handleChange}placeholder="Titulo de la pelicula"/>
                    </fieldset>
                </form>

            </div>
            <div>
                <fieldset>
                    <legend>Listado Peliculas</legend>
                    <div><span>Mostrando resultado para : {busqueda}</span></div>
                    <div className="dv-resultados">
                        {resultados && resultados.length > 0 && resultados.map(pelicula => (
                            <Resultados pelicula={pelicula}/>
                        ))

                        }
                    </div>
                </fieldset>
            </div>
        </>

    );
}

export default ResultadosBusqueda;