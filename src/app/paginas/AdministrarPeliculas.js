import ListarPeliculas from "../componentes/ListarPeliculas";

export default function AdministrarPeliculas(){
    let contador = 0;
    return(
        <>
            <fieldset>
                <legend>Administrar Peliculas</legend>
                <fieldset>
                    <legend>Datos Pelicula</legend>
                </fieldset>
               <fieldset>
                    <legend>Lista Peliculas</legend>
                    <ListarPeliculas contador = {contador}/>
               </fieldset> 
            </fieldset>
        </>
    )
}