import Resultados from '../componentes/Resultados.js';
import '../estilos/resultados-busqueda.css';

function ResultadosBusqueda(){

    function handleSubmit(evento){
        evento.preventDefault();
    }

    function handleChange(evento){
        console.log(evento);
        console.log(evento.target);
        console.log(evento.target.value);
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
                    <div className="dv-resultados">
                        <Resultados/>
                        <Resultados/>
                        <Resultados/>
                        <Resultados/>
                        <Resultados/>
                        <Resultados/>
                    </div>
                </fieldset>
            </div>
        </>

    );
}

export default ResultadosBusqueda;