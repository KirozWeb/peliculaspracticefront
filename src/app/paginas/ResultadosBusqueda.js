import Resultados from '../componentes/Resultados.js';


function ResultadosBusqueda(){

    return(

        <>
            <div className="dv-busqueda">
                <form>
                    <fieldset>
                        <legend>Buscar Peliculas</legend>
                        <input type="text" id="busqueda" name="busqueda" placeholder="Titulo de la pelicula"/>
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