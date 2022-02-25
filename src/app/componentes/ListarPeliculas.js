import { useState, useEffect } from "react";
export default function ListarPeliculas(){

    const [peliculas, setPeliculas] = useState([]);

    useEffect(()=>{
        //CARGAR TODAS LAS PELICULAS
    },[peliculas])
    return(
        <>  
            <table>

                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Año</th>
                        <th>Rating</th>
                        <th>Clasificacion</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                {peliculas && peliculas.map(pelicula =>(
                    <tr key={pelicula._id}>
                        <td>{pelicula.titulo}</td>
                        <td>{pelicula.ano}</td>
                        <td>{pelicula.rating}</td>
                        <td>{pelicula.clasificacion}</td>

                        <td>
                            <button type="button" value={pelicula._id} name="btnEditar">Editar</button>
                            <button type="button" value={pelicula._id} name="btnEliminar">Editar</button>
                        </td>
                    </tr>
                ))}
            </table>
        </>
    );

}